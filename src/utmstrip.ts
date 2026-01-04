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
    const hostStr: string = location.hostname,
        strip = (s: string, p: RegExp): string => s.replace(p, '$1');
    // AliExpress trackers
    if (hostStr.includes('aliexpress.')) {
        searchStr = strip(searchStr, /([?&])aff_(platform|trace_key)=[^&]+/ig);
        searchStr = strip(searchStr, /([?&])algo_[ep]vid=[^&]+/g);
        searchStr = strip(searchStr, /([?&])(btsid|ws_ab_test)=[^&]+/g);
        searchStr = strip(searchStr, /([?&])s[cp]m=[^&]+/g);
    }
    // Amazon referrals
    if ((/(|\.)amazon\.com$/).test(hostStr)) {
        searchStr = strip(searchStr, /([?&])(_encoding|ie|linkCode|linkId|pf|psc|ref_|tag)=[^&]+/ig);
        searchStr = strip(searchStr, /([?&])p[df]_rd_.*?=[^&]+/ig);
        searchStr = strip(searchStr, /([?&])(content-id|crid|cv_ct_cx|language|qid|sprefix|sr|th)=[^&]+/g);
        searchStr = strip(searchStr, /([?&])asc(_campaign|_refurl|_source|subtag)=[^&]+/g);
        searchStr = strip(searchStr, /([?&])dib(_tag)?=[^&]+/g);
    }
    // Facebook
    if (searchStr.includes('fb_')) {
        searchStr = strip(searchStr, /([?&])fb_(action_ids|action_types|ref|source)=[^&]+/ig);
        searchStr = strip(searchStr, /([?&])(fbclid|hrc|refsrc)=[^&]+/ig);
    }
    if (searchStr.includes('action_')) {
        searchStr = strip(searchStr, /([?&])action_(object|ref|type)_map=[^&]+/ig);
    }
    // generic/general
    searchStr = strip(searchStr, /([?&])(assetType|elqTrack|mkt_tok|originalReferer|referrer|terminal_id|trk|trkCampaign|trkInfo)=[^&]+/ig);
    if (searchStr.toLowerCase().includes('id=')) {
        searchStr = strip(searchStr, /([?&])(an|asset|campaign|e|gcl|recipient|site)id=[^&]+/ig);
    }
    // Google Analytics
    if (searchStr.includes('ga_') || searchStr.includes('utm_')) {
        searchStr = strip(searchStr, /([?&])(ga|utm)_(campaign|cid|content|design|medium|name|place|pubreferrer|reader|source|swu|term|userid|viz_id)=[^&]+/ig);
        searchStr = strip(searchStr, /([?&])gcl(id|src)=[^&]+/ig);
    }
    // Google YouTube (handles youtube.com, youtu.be, etc.)
    if ((/(m|www)\.youtube\.com$/).test(hostStr) || hostStr === 'youtu.be' || hostStr === 'www.youtube-nocookie.com') {
         searchStr = strip(searchStr, /([?&])(ac|annotation_id|app|feature|gclid|kw|src_vid)=[^&]+/ig);
    }
    // HubSpot
    if (/[?&]_hs(enc|mi)=/.test(searchStr)) {
        searchStr = strip(searchStr, /([?&])_hs(enc|mi)=[^&]+/ig);
    }
    if (searchStr.includes('hmb_')) {
        searchStr = strip(searchStr, /([?&])hmb_(campaign|medium|source)=[^&]+/ig);
    }
    // IBM Digital Analytics (Coremetrics)
    if (searchStr.includes('cm_')) {
        searchStr = strip(searchStr, /([?&])cm_(mmc|mmca\d+|re|sp)=[^&]+/ig);
        searchStr = strip(searchStr, /([?&])manual_cm_mmc=[^&]+/ig);
    }
    // MailChimp
    if (/[?&]mc_[ce]id=/.test(searchStr)) {
        searchStr = strip(searchStr, /([?&])mc_[ce]id=[^&]+/ig);
    }
    // Marketo
    if (/[?&](iesrc|mkt_tok)=/.test(searchStr)) {
        searchStr = strip(searchStr, /([?&])(iesrc|mkt_tok)=[^&]+/ig);
    }
    // Matomo
    if (searchStr.includes('pk_')) {
        searchStr = strip(searchStr, /([?&])pk_(campaign|content|kwd|medium|source)=[^&]+/ig);
    }
    // clean-up: reduce run of '&', remove trailing '&', fix leading '?'
    searchStr = searchStr.replace(/&&+/g, '&').replace(/&$/, '');
    searchStr = searchStr[0] === '?' ? searchStr.replace(/^\?&/, '?') : `?${searchStr}`;
    searchStr = searchStr.length < 3 ? '' : searchStr;
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
