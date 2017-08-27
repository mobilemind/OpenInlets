(() => {
    const e = window.location.href,
        t = e.indexOf("?");
    if (e.indexOf("utm_") > t) {
        let n = e.replace(/([?&]utm_(source|medium|term|campaign|content)=[^&#]+)/ig, "");
        if (n.charAt(t) === "&") {
            n = n.substr(0, t) + "?" + n.substr(t + 1);
        }
        if (n !== e) {
            history.replaceState(null, null, n);
        }
    }
})();
