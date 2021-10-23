// modifyurl

// Modifies Apple Support URLs to a more stable form

// User Guide Example
// BEFORE: https://support.apple.com/guide/mdm/managing-software-updates-mdm02df57e2a/web
// AFTER: https://support.apple.com/guide/mdm/mdm02df57e2a/
// special cases:
// https://support.apple.com/guide/mdm/welcome/web
// https://support.apple.com/guide/mdm/toc

// Support Article Example
// BEFORE: https://support.apple.com/en-us/HT201487
// AFTER: https://support.apple.com/HT201487

// wrap it all in anonymous function closure for isolation
(() => {
    const u = document.location.href;
    const p = document.location.pathname;
    const l = new RegExp('/' + navigator.language.toLowerCase() + '/', 'i');
    const g = new RegExp('(/guide/[a-z]+-?[a-z]*-?[a-z]*/)([a-z0-9\-]+)/');
    let m = null;
    let result = u;

    // handle support doc URLs
    if (p.match(l)) {
        // remove language
        result = u.replace(l,'/');
    // handle guide special cases without a '-', like toc & welcome
    } else if (p.indexOf('-') < 0 && p.match(g)) {
        let i = u.indexOf('/toc/');
        if (i > 0) {
            result = u.substr(0, i + 5);
        } else {
            i = u.indexOf('/welcome/');
            if (i > 0) {
                result = u.substr(0, i + 9);
            }
        }
    // try to handle general guide case
    } else {
        // check 'guide' is matched in path, and assign matches w/substrings to m
        m = p.match(g);
        // validate match w/substrings was found
        if (null !== m && m.length > 1) {
            // split the 3rd matched substring (should be vanity portion + ID) on the dashes
            const v = m[2].split('-');
            // rebuild the path with the "vanity" part removed (ID from after last dash)
            result = u.replace(p, m[1] + v[v.length - 1] + '/');
        }
    }

    // copy result to clipboard doesn't work on Safari  :-(
    // navigator.clipboard.writeText(result);

    if (u === result) {
        // results didn't change, show original URL
        alert('Unable to simplify the current URL—\n' + u);
    } else {
        // no clipboard access, so update address bar URL & show results
        history.replaceState(null, null, result);
        alert('Original URL:\n' + u + '\n\nModified URL:\n' + result);
    }
})();
