/* eslint max-statements: ["error", 40] */
/* cSpell:ignore hsenc, hsmi, iesrc, Matomo, youtu */
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
        // Facebook
        'fbclid', 'hrc', 'refsrc',
        // Google Analytics
        'gclsrc',
        // HubSpot
        '_hsenc', '_hsmi',
        // MailChimp
        'mc_cid', 'mc_eid',
        // Marketo
        'iesrc',
        // IBM (non-numeric only)
        'cm_mmc', 'cm_re', 'cm_sp', 'manual_cm_mmc'
    ];

    // Universal prefix params to strip
    const universalPrefixes: string[] = [
    		// Facebook: fb_action_ids, fb_action_types, fb_ref, fb_source & action_*
        'fb_',
        'action_',
        // Google Analytics
        'utm_',
        'ga_',
        // HubSpot
        'hmb_',
        // Matomo
        'pk_'
    ];

    // Host-specific rules
    const aliexpressExact: string[] = ['btsid', 'ws_ab_test', 'spm', 'scm', 'algo_evid', 'algo_pvid'];
    const aliexpressPrefixes: string[] = ['aff_'];

    const amazonExact: string[] = [
        '_encoding', 'ie', 'linkCode', 'linkId', 'pf', 'psc', 'ref_', 'tag',
        'content-id', 'crid', 'cv_ct_cx', 'language', 'qid', 'sprefix', 'sr', 'th',
        'asc_campaign', 'asc_refurl', 'asc_source', 'ascsubtag', 'dib', 'dib_tag',
        // pd_rd_* (finite list)
        'pd_rd_i', 'pd_rd_r', 'pd_rd_w', 'pd_rd_wg',
        // pf_rd_* (finite list)
        'pf_rd_i', 'pf_rd_m', 'pf_rd_p', 'pf_rd_r', 'pf_rd_s', 'pf_rd_t',
    ];

    const youtubeExact: string[] = ['ac', 'annotation_id', 'app', 'feature', 'gclid', 'kw', 'src_vid'];

    // Host detection
    const isAliexpress: boolean = host.includes('aliexpress.');
    const isAmazon: boolean = (/(|\.)amazon\.com$/).test(host);
    const isYoutube: boolean = (/(m|www)\.youtube\.com$/).test(host) ||
        host === 'youtu.be' || host === 'www.youtube-nocookie.com';

    // Check if param should be deleted
    const shouldDelete = (key: string): boolean => {
        const k: string = key.toLowerCase();

        // Universal exact matches (case-insensitive)
        if (universalExact.some(p => p.toLowerCase() === k)) {
        	return true;
        }

        // Universal prefix matches
        if (universalPrefixes.some(p => k.startsWith(p))) {
        	return true;
        }

        // IBM Coremetrics cm_mmca\d+ (only regex pattern needed)
        if (/^cm_mmca\d+$/i.test(key)) {
        	return true;
        }

        // Host-specific: AliExpress
        if (isAliexpress) {
            if (aliexpressExact.some(p => p.toLowerCase() === k)) {
            	return true;
            }
            if (aliexpressPrefixes.some(p => k.startsWith(p))) {
            	return true;
            }
        }

        // Host-specific: Amazon
        if (isAmazon) {
            if (amazonExact.some(p => p.toLowerCase() === k)) {
            	return true;
            }
        }

        // Host-specific: YouTube
        if (isYoutube) {
            if (youtubeExact.some(p => p.toLowerCase() === k)) {
            	return true;
            }
        }

        return false;
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

    // Clean up '/amp/' in pathname
    const pathStr: string = locPath.replace(/\/amp\/?$/, '');

    // If changed, replace location with stripped version
    if (locSearch !== searchStr || locPath !== pathStr) {
        if (confirm('Update history and copy cleaned URL to clipboard?')) {
            const newURL: string = `${location.protocol}//${location.host}${pathStr}${searchStr}${location.hash}`;
            navigator.clipboard.writeText(newURL);
            history.replaceState(null, '', newURL);
            const newWindow: Window | null = window.open(newURL, '_self', 'noreferrer');
            if (newWindow) {
                newWindow.opener = null;
            }
        }
    }
})();
