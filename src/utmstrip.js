(() => {
    if (window.location.search) {
        let s = window.location.search;
        if (s.length < 2) {
            return;
        }
        const h = location.hostname;
        // Amazon referrals
        if (h.indexOf("amazon.com") > -1) {
            s = s.replace(/([?&])(_encoding|ie|psc|ref_|tag)=[^&#]+&?/ig, "$1");
            s = s.replace(/([?&])p[df]_rd_.*?=[^&#]+&?/ig, "$1");
        }
        // Facebook
        if (s.indexOf("fb_") > -1) {
            s = s.replace(/([?&])fb_(action_ids|action_types|ref|source)=[^#&]+&?/ig, "$1");
        }
        if (s.indexOf("action_") > -1) {
            s = s.replace(/([?&])action_(object|ref|type)_map=[^#&]+&?/ig, "$1");
        }
        // generic
        if (s.indexOf("aff_") > -1) {
            s = s.replace(/([?&])aff_(platform|trace_key)=[^#&]+&?/ig, "$1");
        }
        if (s.toLowerCase().indexOf("id=") > -1) {
            s = s.replace(/([?&])(an|asset|campaign|gcl|recipient|site)id=[^#&]+&?/ig, "$1");
        }
        s = s.replace(/([?&])(assetType|elqTrack|originalReferer|referrer|terminal_id|trk|trkInfo)=[^#&]+&?/ig, "$1");
        // Google Analytics
        if (s.indexOf("ga_") > -1 || s.indexOf("utm_") > -1) {
            s = s.replace(/([?&])(ga|utm)_(campaign|cid|content|design|medium|name|place|pubreferrer|reader|source|swu|term|userid|viz_id)=[^#&]+&?/ig, "$1");
        }
        // Google YouTube (handles youtube.com, youtu.be, etc.)
        if (h.indexOf("youtu") > -1 || h.indexOf("googlevideo.com") > -1) {
            s = s.replace(/([?&])(ac|annotation_id|app|feature|gclid|kw|src_vid)=[^&#]+&?/ig, "$1");
        }
        // HubSpot
        if (s.indexOf("_hsenc") > -1 || s.indexOf("_hsmi") > -1) {
            s = s.replace(/([?&])_hs(enc|mi)=[^&#]+&?/ig, "$1");
        }
        if (s.indexOf("hmb_") > -1) {
            s = s.replace(/([?&])hmb_(campaign|medium|source)=[^#&]+&?/ig, "$1");
        }
        // IBM Digital Analytics (Coremetrics)
        if (s.indexOf("cm_") > -1) {
            s = s.replace(/([?&])cm_(mmc|mmca\d+|re|sp)=[^#&]+&?/ig, "$1");
            s = s.replace(/([?&])manual_cm_mmc=[^#&]+&?/ig, "$1");
        }
        // MailChimp
        if (s.indexOf("mc_cid") > -1 || s.indexOf("mc_eid") > -1) {
            s = s.replace(/([?&])mc_[ce]id=[^#&]+&?/ig, "$1");
        }
        // Marketo
        if (s.indexOf("iesrc") > -1 || s.indexOf("mkt_tok") > -1) {
            s = s.replace(/([?&])(iesrc|mkt_tok)=[^&#]+&?/ig, "$1");
        }
        // Matomo
        if (s.indexOf("pk_") > -1) {
            s = s.replace(/([?&])pk_(campaign|content|kwd|medium|source)=[^&#]+&?/ig, "$1");
        }
        // restore leading '?' if necessary
        if ("?" === window.location.search.charAt(0) && "?" !== s.charAt(0)) {
            s = "?" + s;
        }
        // clean-up trailing &
        if ("&" === s.charAt(s.length - 1)) {
            s = s.substring(0, s.length - 1);
        }
        // simplify if no params and no anchor left (e.g. "?" or "?&" or "?#")
        if (s.length < 3) {
            s = "";
        }
        // if changed replace location with stripped version
        if (window.location.search !== s) {
            history.replaceState(null, null, window.location.origin + window.location.pathname + s);
        }

    }
})();
