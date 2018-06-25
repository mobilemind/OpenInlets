(() => {
    let e = window.location.href,
        t = e.indexOf("?");
    // Google Analytics
    if (e.indexOf("utm_") > t) {
        e = e.replace(/([?&]utm_(campaign|content|medium|reader|source|term)=[^&#]+)/ig, "");
        if (e.charAt(t) === "&") {
            e = e.substr(0, t) + "?" + e.substr(t + 1);
            t = e.indexOf("?");
        }
    }
    // Google YouTube
    if (e.indexOf("www.youtube.com/watch") > 0) {
        e = e.replace(/([?&](ac|annotation_id|app|feature|src_vid)=[^&#]*)/ig, '');
        if (e.charAt(t) === "&") {
            e = e.substr(0, t) + "?" + e.substr(t + 1);
            t = e.indexOf("?");
        }
    }
    // HubSpot
    if (e.indexOf('_hsenc') > t || e.indexOf('_hsmi') > t) {
        e = e.replace(/([?&](_hsenc|_hsmi)=[^&#]+)/ig, '');
        if (e.charAt(t) === "&") {
            e = e.substr(0, t) + "?" + e.substr(t + 1);
            t = e.indexOf("?");
        }
    }
    // MailChimp
    if (e.indexOf('mc_cid') > t || e.indexOf('mc_eid') > t) {
        e = e.replace(/([?&](mc_cid|mc_eid)=[^&#]+)/ig, '');
    }
    if (window.location.href !== e) {
        history.replaceState(null, null, e);
    }
})();
