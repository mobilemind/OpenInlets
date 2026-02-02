#!/usr/bin/env node
/* eslint no-plusplus: 0 */
// cSpell:words Bronto Klaviyo Listrak Omeda
/* cSpell: ignore afid amdata anid ascsubtag assetid athancid athcgid athcpid athiession athmtid athpgid athposb athstid athznid btsid campaignid campid clkid crid customid dclid epik evid fbclid gclid gclsrc hsenc hsfp hsmi hssc hstc iesrc iflsig igsh igshid licu lipi mkcid mkevt mkrid mmca msclkid prmd pvid recipientid sclient siteid sourceid sprefix srsltid sxsrf ttclid twclid uact wmlspartner youtu */
/**
 * Test utmstrip.ts logic against test URL corpus
 * Run: node scripts/test-utmstrip.js
 */
const testData = require('../tests/utmstrip-test-urls.json');

// Replicate the shouldDelete logic from utmstrip.ts
const universalExact = [
    // Generic tracking
    'assetType', 'elqTrack', 'mkt_tok', 'originalReferer', 'referrer',
    'terminal_id', 'trk', 'trkCampaign', 'trkInfo',
    // *id suffix params
    'anid', 'assetid', 'campaignid', 'eid', 'gclid', 'recipientid', 'siteid',
    // Brevo/Sendinblue
    'sib_cuid', 'sib_sid',
    // Bronto (Oracle)
    '_bta_c', '_bta_tid',
    // Drip
    '__s',
    // Facebook/Instagram
    'fbclid', 'hrc', 'igsh', 'igshid', 'refsrc',
    // Google Analytics
    '_gl', 'gclsrc', 'srsltid',
    // HubSpot
    '_hsenc', '_hsmi', '__hsfp', '__hssc', '__hstc',
    // IBM (non-numeric only)
    'cm_mmc', 'cm_re', 'cm_sp', 'manual_cm_mmc',
    // Klaviyo
    '_ke', '_kx',
    // Listrak
    'trk_contact', 'trk_module', 'trk_msg', 'trk_sid',
    // MailChimp
    'mc_cid', 'mc_eid',
    // Marketo
    'iesrc',
    // Microsoft & ad platform click IDs
    'dclid', 'msclkid', 'ttclid', 'twclid',
    // Omeda
    'oly_anon_id', 'oly_enc_id',
    // Pinterest
    'epik',
    // Vero
    'vero_id'
];

const universalPrefixes = [
    // Facebook: fb_action_ids, fb_action_types, fb_ref, fb_source & action_*
    'action_', 'fb_',
    // Google Analytics
    'ga_', 'utm_',
    // HubSpot
    'hmb_', 'hsa_',
    // Matomo
    'mtm_', 'pk_',
    // Sailthru email
    'stm_',
    // Omeda
    'oly_'
];

const aliexpressExact = ['algo_evid', 'algo_pvid', 'btsid', 'scm', 'spm', 'ws_ab_test'];
const aliexpressPrefixes = ['aff_'];

const amazonExact = [
    '_encoding', 'asc_campaign', 'asc_refurl', 'asc_source', 'ascsubtag',
    'content-id', 'crid', 'cv_ct_cx', 'dib_tag', 'dib', 'ie', 'language',
    'linkCode', 'linkId', 'pd_rd_i', 'pd_rd_r', 'pd_rd_w', 'pd_rd_wg', 'pf_rd_i',
    'pf_rd_m', 'pf_rd_p', 'pf_rd_r', 'pf_rd_s', 'pf_rd_t', 'pf', 'psc', 'qid',
    'ref_', 'sprefix', 'sr', 'tag', 'th'
];

const youtubeExact = ['ac', 'annotation_id', 'app', 'feature', 'gclid', 'kw', 'src_vid'];

// Host-specific: eBay
const ebayExact = [
    'amdata', 'campid', 'customid', 'itm', 'mkcid', 'mkevt', 'mkrid', 'norover', 'toolid'
];

// Host-specific: LinkedIn
const linkedinExact = ['li_fat_id', 'licu', 'lipi', 'midSig', 'midToken', 'refId'];

// Host-specific: Google Search (only on /search path)
const googleSearchExact = [
    // Session/tracking identifiers
    'ei', 'ved', 'iflsig', 'sca_esv', 'aqs', 'gs_lp', 'gs_ssp',
    // Query tracking
    'oq', 'sa', 'uact',
    // Distribution/client tracking
    'rlz', 'sxsrf',
    // Browser/client info (clutter)
    'bih', 'biw', 'client', 'prmd', 'sclient', 'source', 'sourceid',
    // Encoding params (clutter)
    'ie', 'oe'
];

// Host-specific: Target
const targetExact = ['afid', 'clkid', 'lnm', 'tref', 'preselect'];

// Host-specific: Temu
const temuExact = [
    '_bg_fs', '_p_jump_id', '_p_rfs', 'refer_page_id', 'refer_page_name', 'refer_page_sn'
];
const temuPrefixes = ['_x_'];

// Host-specific: TikTok
const tiktokExact = [
    '_d', '_r', '_t', 'is_from_webapp', 'preview_pb', 'share_app_name', 'share_item_id',
    'timestamp', 'tt4d_t', 'u_code', 'user_id',
];

// Host-specific: Twitter/X
const twitterExact = ['cn', 'ref_src', 'ref_url', 's', 't'];

// Host-specific: Walmart
const walmartExact = [
    'adsredirect', 'affiliates_ad_id', 'athancid', 'athcgid', 'athcpid',
    'athena', 'athiession', 'athmtid', 'athpgid', 'athposb', 'athstid',
    'athznid', 'campaign_id', 'wmlspartner'
];


function stripUrl(inputUrl) {
    const url = new URL(inputUrl);
    const locSearch = url.search;
    const locPath = url.pathname;

    // Early exit if nothing to strip
    if (locSearch.length < 3 && !locPath.includes('/amp')) {
        return inputUrl;
    }

    const params = new URLSearchParams(locSearch);
    const host = url.hostname;

    // Build combined param lists based on host
    const exactParams = [...universalExact];
    const prefixParams = [...universalPrefixes];

    if ((/\.aliexpress\.[a-z]{2,3}$/).test(host)) {
        exactParams.push(...aliexpressExact);
        prefixParams.push(...aliexpressPrefixes);
    } else if ((/(|\.)amazon\.com$/).test(host)) {
        exactParams.push(...amazonExact);
    } else if (host.endsWith('.ebay.com') || (/\.ebay\.co\.[a-z]{2}$/).test(host)) {
        exactParams.push(...ebayExact);
    } else if ((/(^|\.)google\.(com|[a-z]{2}|com?\.[a-z]{2})$/).test(host) && locPath.startsWith('/search')) {
        exactParams.push(...googleSearchExact);
    } else if (host.endsWith('.linkedin.com')) {
        exactParams.push(...linkedinExact);
    } else if (host.endsWith('.target.com')) {
        exactParams.push(...targetExact);
    } else if (host.endsWith('.temu.com')) {
        exactParams.push(...temuExact);
        prefixParams.push(...temuPrefixes);
    } else if (host.endsWith('.tiktok.com') || host === 'tiktok.com') {
        exactParams.push(...tiktokExact);
    } else if ((/\.(twitter|x)\.com$/).test(host) || (/^(twitter|x)\.com$/).test(host)) {
        exactParams.push(...twitterExact);
    } else if (host.endsWith('.walmart.com')) {
        exactParams.push(...walmartExact);
    } else if ((/(m|www)\.youtube\.com$/).test(host) ||
        host === 'youtu.be' || host === 'www.youtube-nocookie.com') {
        exactParams.push(...youtubeExact);
    }

    // Convert to lowercase Set for O(1) lookup
    const exactSet = new Set(exactParams.map(p => p.toLowerCase()));

    const shouldDelete = (key) => {
        const k = key.toLowerCase();
        if (exactSet.has(k)) {
          return true;
        } else if (prefixParams.some(p => k.startsWith(p))) {
          return true;
        } else if (/^cm_mmca\d+$/i.test(key)) {
          return true;
        }
        return false;
    };

    for (const key of [...params.keys()]) {
        if (shouldDelete(key)) {
            params.delete(key);
        }
    }

    let searchStr = params.toString();
    searchStr = searchStr ? `?${searchStr}` : '';

    const pathStr = url.pathname.replace(/\/amp\/?$/, '');

    return `${url.protocol}//${url.host}${pathStr}${searchStr}${url.hash}`;
}

// Run tests
let passed = 0;
let failed = 0;

console.log('Testing UTMStrip refactored logic...\n');

for (const test of testData.testCases) {
    const result = stripUrl(test.input);
    const ok = result === test.expected;

    if (ok) {
        passed++;
        console.log(`✓ ${test.name}`);
    } else {
        failed++;
        console.log(`✗ ${test.name}`);
        console.log(`  Input:    ${test.input}`);
        console.log(`  Expected: ${test.expected}`);
        console.log(`  Got:      ${result}`);
        console.log(`  Note:     ${test.note}`);
    }
}

console.log(`\n${passed} passed, ${failed} failed out of ${testData.testCases.length} tests`);
process.exit(failed > 0 ? 1 : 0);
