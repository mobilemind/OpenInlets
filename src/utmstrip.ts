/* eslint max-statements: ["error", 65] */
/* cSpell:ignore hsenc, hsmi, iesrc, Matomo, youtu */
(() => {
    const locPath: string = location.pathname,
        locSearch: string = location.search;
    // bail early if there's no params or /amp/ to replace
    if (locSearch.length < 3 && !locPath.includes('/amp')) {
        return;
    }
    let pathStr: string = locPath,
        searchStr: string = locSearch;
    const hostStr: string = location.hostname;
    // AliExpress trackers
    if (hostStr.includes('aliexpress.')) {
        searchStr = searchStr.replace(/([?&])aff_(platform|trace_key)=[^&]+/ig, '$1');
        searchStr = searchStr.replace(/([?&])algo_[ep]vid=[^&]+/g, '$1');
        searchStr = searchStr.replace(/([?&])(btsid|ws_ab_test)=[^&]+/g, '$1');
        searchStr = searchStr.replace(/([?&])s[cp]m=[^&]+/g, '$1');
    }
    // Amazon referrals
    if ((/(|\.)amazon\.com$/).test(hostStr)) {
        searchStr = searchStr.replace(/([?&])(_encoding|ie|linkCode|linkId|pf|psc|ref_|tag)=[^&]+/ig, '$1');
        searchStr = searchStr.replace(/([?&])p[df]_rd_.*?=[^&]+/ig, '$1');
        searchStr = searchStr.replace(/([?&])(content-id|crid|cv_ct_cx|language|qid|sprefix|sr|th)=[^&]+/g, '$1');
        searchStr = searchStr.replace(/([?&])asc(_campaign|_refurl|_source|subtag)=[^&]+/g, '$1');
        searchStr = searchStr.replace(/([?&])dib(_tag)?=[^&]+/g, '$1');
    }
    // Facebook
    if (searchStr.includes('fb_')) {
        searchStr = searchStr.replace(/([?&])fb_(action_ids|action_types|ref|source)=[^&]+/ig, '$1');
        searchStr = searchStr.replace(/([?&])(fbclid|hrc|refsrc)=[^&]+/ig, '$1');
    }
    if (searchStr.includes('action_')) {
        searchStr = searchStr.replace(/([?&])action_(object|ref|type)_map=[^&]+/ig, '$1');
    }
    // generic/general
    searchStr = searchStr.replace(/([?&])(assetType|elqTrack|mkt_tok|originalReferer|referrer|terminal_id|trk|trkCampaign|trkInfo)=[^&]+/ig, '$1');
    if (searchStr.includes('aff_')) {
        searchStr = searchStr.replace(/([?&])aff_(platform|trace_key)=[^&]+/ig, '$1');
    }
    if (searchStr.toLowerCase().includes('id=')) {
        searchStr = searchStr.replace(/([?&])(an|asset|campaign|e|gcl|recipient|site)id=[^&]+/ig, '$1');
    }
    // Google Analytics
    if (searchStr.includes('ga_') || searchStr.includes('utm_')) {
        searchStr = searchStr.replace(/([?&])(ga|utm)_(campaign|cid|content|design|medium|name|place|pubreferrer|reader|source|swu|term|userid|viz_id)=[^&]+/ig, '$1');
        searchStr = searchStr.replace(/([?&])gcl(id|src)=[^&]+/ig, '$1');
    }
    // Google YouTube (handles youtube.com, youtu.be, etc.)
    if ((/(m|www)\.youtube\.com$/).test(hostStr) || hostStr === 'youtu.be' || hostStr === 'www.youtube-nocookie.com') {
         searchStr = searchStr.replace(/([?&])(ac|annotation_id|app|feature|gclid|kw|src_vid)=[^&]+/ig, '$1');
    }
    // HubSpot
    if (searchStr.includes('_hsenc') || searchStr.includes('_hsmi')) {
        searchStr = searchStr.replace(/([?&])_hs(enc|mi)=[^&]+/ig, '$1');
    }
    if (searchStr.includes('hmb_')) {
        searchStr = searchStr.replace(/([?&])hmb_(campaign|medium|source)=[^&]+/ig, '$1');
    }
    // IBM Digital Analytics (Coremetrics)
    if (searchStr.includes('cm_')) {
        searchStr = searchStr.replace(/([?&])cm_(mmc|mmca\d+|re|sp)=[^&]+/ig, '$1');
        searchStr = searchStr.replace(/([?&])manual_cm_mmc=[^&]+/ig, '$1');
    }
    // MailChimp
    if (searchStr.includes('mc_cid') || searchStr.includes('mc_eid')) {
        searchStr = searchStr.replace(/([?&])mc_[ce]id=[^&]+/ig, '$1');
    }
    // Marketo
    if (searchStr.includes('iesrc') || searchStr.includes('mkt_tok')) {
        searchStr = searchStr.replace(/([?&])(iesrc|mkt_tok)=[^&]+/ig, '$1');
    }
    // Matomo
    if (searchStr.includes('pk_')) {
        searchStr = searchStr.replace(/([?&])pk_(campaign|content|kwd|medium|source)=[^&]+/ig, '$1');
    }
    // clean-up: reduce run of '&', conditionally remove trailing '&'
    searchStr = searchStr.replace(/&&+/g, '&');
    if (searchStr.charAt(searchStr.length - 1) === '&') {
        searchStr = searchStr.slice(0, -1);
    }
    // clean-up: restore leading '?' if necessary
    if (searchStr.charAt(0) !== '?') {
        searchStr = `?${searchStr}`;
    }
    // clean-up '?&param=value' --> '?param=value'
    if (searchStr.includes('?&')) {
        searchStr = `?${searchStr.slice(2)}`;
    }
    // clean-up: nullify if no params assigns left (e.g. '?' or '?param')
    if (searchStr.length < 3) {
        searchStr = '';
    }
    // clean-up '/amp/' in pathname
    pathStr = pathStr.replace(/\/amp\/?$/, '');
    // if changed replace location with stripped version
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
