(() => {
    if (window.location.search) {
        let s = window.location.search;
        // Amazon referrals
        if (location.hostname.indexOf("amazon.com") > -1) {
            s = s.replace(/[?&](_encoding|ie|psc|ref_|tag)=[^&#]+/ig, "");
            s = s.replace(/[?&]p[df]_rd_.*?=[^&#]+/ig, "");
        }
        // Facebook
        if (s.indexOf("fb_") > -1) {
            s = s.replace(/[&?]fb_(?:action_ids|action_types|ref|source)=[^#&]+/ig, "");
        }
        if (s.indexOf("action_") > -1) {
            s = s.replace(/[&?]action_(?:object|ref|type)_map=[^#&]+/ig, "");
        }
        // generic
        if (s.indexOf("Id=") > -1) {
            s = s.replace(/[&?](?:asset|campaign|elqTrack|recipient|site)Id=[^#&]+/ig, "");
        }
        // Google Analytics
        if (s.indexOf("utm_") > -1) {
            s = s.replace(/[&?]utm_(?:campaign|cid|content|design|medium|name|pubreferrer|reader|source|swu|term|viz_id)=[^#&]+/ig, "");
        }
        if (s.indexOf("ga_") > -1) {
            s = s.replace(/[&?]ga_(?:campaign|cid|content|medium|name|place|pubreferrer|source|swu|term|userid|viz_id)=[^#&]+/ig, "");
        }
        // Google YouTube # verify w/Patterns
        if (location.hostname.indexOf("youtube.com") > -1) {
            s = s.replace(/[?&](ac|annotation_id|app|feature|gclid|kw|src_vid)=[^&#]+/ig, "");
        }
        // HubSpot
        if (s.indexOf('_hsenc') > -1 || s.indexOf('_hsmi') > -1) {
            s = s.replace(/[?&](_hsenc|_hsmi)=[^&#]+/ig, '');
        }
        if (s.indexOf('hmb_') > -1) {
            s = s.replace(/[&?]hmb_(?:campaign|medium|source)=[^#&]+/ig, "");
        }
        // MailChimp
        if (s.indexOf('mc_cid') > -1 || s.indexOf('mc_eid') > -1) {
            s = s.replace(/[?&]mc_[ce]id=[^#&]+/ig, '');
        }
        // Marketo
        if (s.indexOf('iesrc') > -1 || s.indexOf('mkt_tok') > -1) {
            s = s.replace(/[?&](iesrc|mkt_tok)=[^&#]+/ig, '');
        }
        // clean-up
        if (window.location.search !== s) {
            if ('&' === s.charAt(0)) {
                s = s.substring(1);
            }
            if ('?' === s || '??' === s) {
                s = '';
            }
            history.replaceState(null, null, window.location.origin + s);
        }
    }
})();
