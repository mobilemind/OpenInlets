(() => {
    if (window.location.search) {
        let s = window.location.search;
        // Amazon referrals
        if (location.hostname.indexOf("amazon.com") > -1) {
            s = s.replace(/([?&](_encoding|ie|tag)=[^&#]+)/ig, "");
        }
        // Google Analytics
        if (s.indexOf("utm_") > -1) {
            s = s.replace(/([?&]utm_(campaign|content|medium|reader|source|term)=[^&#]+)/ig, "");
        }
        // Google YouTube
        if (location.hostname.indexOf("youtube.com") > -1) {
            s = s.replace(/([?&](ac|annotation_id|app|feature|src_vid)=[^&#]+)/ig, "");
        }
        // HubSpot
        if (s.indexOf('_hsenc') > -1 || s.indexOf('_hsmi') > -1) {
            s = s.replace(/([?&](_hsenc|_hsmi)=[^&#]+)/ig, '');
        }
        // MailChimp
        if (s.indexOf('mc_cid') > -1 || s.indexOf('mc_eid') > -1) {
            s = s.replace(/([?&](mc_cid|mc_eid)=[^&#]+)/ig, '');
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
