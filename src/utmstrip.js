(() => {
    const locSearch = location.search;
    // bail early if there's no params to replace
    if (locSearch.length < 3) {
        return;
    }
    let searchStr = locSearch;
    const hostStr = location.host;
    // Amazon referrals
    if (hostStr.indexOf("amazon.com") > -1) {
        searchStr = searchStr.replace(/([?&])(_encoding|ie|psc|ref_|tag)=[^&]+/ig, "$1");
        searchStr = searchStr.replace(/([?&])p[df]_rd_.*?=[^&]+/ig, "$1");
        searchStr = searchStr.replace(/([?&])ascsubtag=[^&]+/ig, "$1");
    }
    // Facebook
    if (searchStr.indexOf("fb_") > -1) {
        searchStr = searchStr.replace(/([?&])fb_(action_ids|action_types|ref|source)=[^&]+/ig, "$1");
    }
    if (searchStr.indexOf("action_") > -1) {
        searchStr = searchStr.replace(/([?&])action_(object|ref|type)_map=[^&]+/ig, "$1");
    }
    // generic/general
    searchStr = searchStr.replace(/([?&])(assetType|elqTrack|originalReferer|referrer|terminal_id|trk|trkInfo)=[^&]+/ig, "$1");
    if (searchStr.indexOf("aff_") > -1) {
        searchStr = searchStr.replace(/([?&])aff_(platform|trace_key)=[^&]+/ig, "$1");
    }
    if (searchStr.toLowerCase().indexOf("id=") > -1) {
        searchStr = searchStr.replace(/([?&])(an|asset|campaign|e|gcl|recipient|site)id=[^&]+/ig, "$1");
    }
    // Google Analytics
    if (searchStr.indexOf("ga_") > -1 || searchStr.indexOf("utm_") > -1) {
        searchStr = searchStr.replace(/([?&])(ga|utm)_(campaign|cid|content|design|medium|name|place|pubreferrer|reader|source|swu|term|userid|viz_id)=[^&]+/ig, "$1");
    }
    // Google YouTube (handles youtube.com, youtu.be, etc.)
    if (hostStr.indexOf("youtu") > -1 || hostStr.indexOf("googlevideo.com") > -1) {
        searchStr = searchStr.replace(/([?&])(ac|annotation_id|app|feature|gclid|kw|src_vid)=[^&]+/ig, "$1");
    }
    // HubSpot
    if (searchStr.indexOf("_hsenc") > -1 || searchStr.indexOf("_hsmi") > -1) {
        searchStr = searchStr.replace(/([?&])_hs(enc|mi)=[^&]+/ig, "$1");
    }
    if (searchStr.indexOf("hmb_") > -1) {
        searchStr = searchStr.replace(/([?&])hmb_(campaign|medium|source)=[^&]+/ig, "$1");
    }
    // IBM Digital Analytics (Coremetrics)
    if (searchStr.indexOf("cm_") > -1) {
        searchStr = searchStr.replace(/([?&])cm_(mmc|mmca\d+|re|sp)=[^&]+/ig, "$1");
        searchStr = searchStr.replace(/([?&])manual_cm_mmc=[^&]+/ig, "$1");
    }
    // MailChimp
    if (searchStr.indexOf("mc_cid") > -1 || searchStr.indexOf("mc_eid") > -1) {
        searchStr = searchStr.replace(/([?&])mc_[ce]id=[^&]+/ig, "$1");
    }
    // Marketo
    if (searchStr.indexOf("iesrc") > -1 || searchStr.indexOf("mkt_tok") > -1) {
        searchStr = searchStr.replace(/([?&])(iesrc|mkt_tok)=[^&]+/ig, "$1");
    }
    // Matomo
    if (searchStr.indexOf("pk_") > -1) {
        searchStr = searchStr.replace(/([?&])pk_(campaign|content|kwd|medium|source)=[^&]+/ig, "$1");
    }
    // clean-up: reduce run of "&", conditionally remove trailing "&"
    searchStr = searchStr.replace(/&&+/g, "&");
    if ("&" === searchStr.charAt(searchStr.length - 1)) {
        searchStr = searchStr.substr(0, searchStr.length - 1);
    }
    // clean-up: restore leading "?" if necessary
    if ("?" !== searchStr.charAt(0)) {
        searchStr = "?" + searchStr;
    }
    // clean-up "?&param=value" --> "?param=value"
    if (0 == searchStr.indexOf("?&")) {
        searchStr = "?" + searchStr.substr(2);
    }
    // clean-up: nullify if no params assigns left (e.g. "?" or "?param)
    if (searchStr.length < 3) {
        searchStr = "";
    }
    // if changed replace location with stripped version
    if (locSearch !== searchStr) {
        history.replaceState(null, null, location.origin + location.pathname + searchStr);
    }
})();
