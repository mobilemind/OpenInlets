/* eslint max-statements: ["error", 55] */
/* cSpell: ignore afid amdata anid ascsubtag assetid athancid athcgid athcpid athiession athmtid athpgid athposb athstid athznid btsid campaignid campid cjevent clkid crid customid dclid efid epik evid fbclid gclid gclsrc hsenc hsfp hsmi hssc hstc iesrc iflsig igsh igshid licu lipi mkcid mkevt mkrid mmca msclkid outbrain prmd pvid qclid Quora rdtcid recipientid sclient sccid siteid sourceid sprefix srsltid sxsrf Taboola tblci ttclid twclid uact wmlspartner youtu */

(() => {
    const locPath: string = location.pathname,
        locSearch: string = location.search;
    // bail early if there's no params or /amp/ to replace
    if (locSearch.length < 3 && !locPath.includes('/amp')) {
        return;
    }
    const host: string = location.hostname;
    const params = new URLSearchParams(locSearch);

    // Universal exact-match params to strip (all hosts)
    const universalExact: string[] = [
        // Generic tracking
        'assetType', 'elqTrack', 'mkt_tok', 'originalReferer', 'referrer',
        'terminal_id', 'trk', 'trkCampaign', 'trkInfo',
        // *id suffix params
        'anid', 'assetid', 'campaignid', 'eid', 'gclid', 'recipientid', 'siteid',
        // Brevo/Sendinblue
        'sib_cuid', 'sib_sid',
        // Bronto (Oracle)
        '_bta_tid', '_bta_c',
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
        'trk_contact', 'trk_msg', 'trk_module', 'trk_sid',
        // MailChimp
        'mc_cid', 'mc_eid',
        // Marketo
        'iesrc',
        // Microsoft & ad platform click IDs
        'msclkid', 'dclid', 'twclid', 'ttclid',
        // Omeda
        'oly_enc_id', 'oly_anon_id',
        // Pinterest
        'epik',
        // Vero
        'vero_id',
        // Reddit Ads
        'rdt_cid',
        // Snapchat Ads
        'ScCid',
        // Quora Ads
        'qclid',
        // Taboola
        'tblci',
        // CJ Affiliate
        'cjevent',
        // Adobe Advertising
        'ef_id',
        // Outbrain
        'outbrain_cid'
    ];

    // Universal prefix params to strip
    const universalPrefixes: string[] = [
        // Facebook: fb_action_ids, fb_action_types, fb_ref, fb_source & action_*
        'fb_', 'action_',
        // Google Analytics
        'ga_', 'utm_',
        // HubSpot
        'hmb_', 'hsa_',
        // Matomo
        'mtm_','pk_',
        // Omeda
        'oly_',
        // Sailthru email
        'stm_'
    ];

    // Host-specific rules
    const aliexpressExact: string[] = ['algo_evid', 'algo_pvid', 'btsid', 'spm', 'scm', 'ws_ab_test'];
    const aliexpressPrefixes: string[] = ['aff_'];

    const amazonExact: string[] = [
        '_encoding', 'asc_campaign', 'asc_refurl', 'asc_source', 'ascsubtag', 'content-id', 'crid',
        'cv_ct_cx', 'dib_tag', 'dib', 'ie', 'language', 'linkCode', 'linkId', 'pd_rd_i', 'pd_rd_r',
        'pd_rd_w', 'pd_rd_wg', 'pf_rd_i', 'pf_rd_m', 'pf_rd_p', 'pf_rd_r', 'pf_rd_s', 'pf_rd_t',
        'pf', 'psc', 'qid', 'ref_', 'sprefix', 'sr', 'tag', 'th'
    ];

    // Host-specific: eBay
    const ebayExact: string[] = [
        'mkevt', 'mkcid', 'mkrid', 'campid', 'toolid', 'customid',
        'norover', 'itm', 'amdata'
    ];

    // Host-specific: Google Search (only on /search path)
    const googleSearchExact: string[] = [
        // Session/tracking identifiers
        'aqs', 'ei', 'gs_lp', 'gs_ssp', 'iflsig', 'sca_esv', 'ved',
        // Query tracking
        'oq', 'sa', 'uact',
        // Distribution/client tracking
        'rlz', 'sxsrf',
        // Browser/client info (clutter)
        'bih', 'biw', 'client', 'prmd', 'sclient', 'source', 'sourceid',
        // Encoding params (clutter)
        'ie', 'oe'
    ];

    // Host-specific: LinkedIn
    const linkedinExact: string[] = ['li_fat_id', 'licu', 'lipi', 'midSig', 'midToken', 'refId'];

    // Host-specific: Target
    const targetExact: string[] = ['afid', 'clkid', 'lnm', 'preselect', 'tref'];

    // Host-specific: Temu
    const temuExact: string[] = [
        '_bg_fs', '_p_jump_id', '_p_rfs', 'refer_page_id', 'refer_page_name', 'refer_page_sn'
    ];
    const temuPrefixes: string[] = ['_x_'];

    // Host-specific: TikTok
    const tiktokExact: string[] = [
        '_d', '_r', '_t',  'is_from_webapp', 'preview_pb', 'share_app_name',
        'share_item_id', 'tt4d_t', 'timestamp', 'u_code', 'user_id'
    ];

    // Host-specific: Twitter/X
    const twitterExact: string[] = ['cn', 'ref_src', 'ref_url', 's', 't'];

    // Host-specific: Walmart
    const walmartExact: string[] = [
        'adsredirect', 'affiliates_ad_id', 'athcpid', 'athpgid', 'athcgid', 'athmtid', 'athstid',
        'athznid', 'athiession', 'athancid', 'athposb', 'athena', 'campaign_id', 'wmlspartner', 'wt_mc'
    ];

    // Host-specific youtube
    const youtubeExact: string[] = ['ac', 'annotation_id', 'app', 'feature', 'gclid', 'kw', 'src_vid'];

    // Build combined param lists based on host
    const exactParams: string[] = [...universalExact];
    const prefixParams: string[] = [...universalPrefixes];

    // Host-specific additions
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
    const exactSet: Set<string> = new Set(exactParams.map(p => p.toLowerCase()));

    // Check if param should be deleted
    const shouldDelete = (key: string): boolean => {
        const k: string = key.toLowerCase();
        return (exactSet.has(k) || prefixParams.some(p => k.startsWith(p)) || (/^cm_mmca\d+$/i.test(key)));
    };

    // Iterate and delete matching params
    for (const key of [...params.keys()]) {
        if (shouldDelete(key)) {
            params.delete(key);
        }
    }

    // Reconstruct search string
    let searchStr: string = params.toString();
    searchStr = searchStr ? `?${searchStr}` : '';

    // Clean up '/amp/' in pathname & assign newURL
    const pathStr: string = locPath.replace(/\/amp\/?$/, ''),
        newURL: string = `${location.protocol}//${location.host}${pathStr}${searchStr}${location.hash}`;

    // always _offer_ to copy the "cleaned" newURL
    if (confirm('Update history and copy cleaned URL to clipboard?')) {
        navigator.clipboard.writeText(newURL);
        // If changed (truly cleaned), replace location with stripped version
        if (locSearch !== searchStr || locPath !== pathStr) {
            history.replaceState(null, '', newURL);
            const newWindow: Window | null = window.open(newURL, '_self', 'noreferrer');
            if (newWindow) {
                newWindow.opener = null;
            }
        }
    }
})();
