// modifysupporturl

// wrap it all in anonymous function closure for isolation
(() => {
    const url = document.location.href;
    const path = document.location.pathname;
    const lang = new RegExp('/' + navigator.language.toLowerCase() + '/', 'i');
    const guide = (/(\/guide\/[-a-z]+\/)([-\da-z]+)\//);
    let matches = null;
    let result = url;

    // for now, only work on support.apple.com
    if ('support.apple.com' !== document.location.host) {
        return;
    }

    // handle general support doc URLs
    if (path.match(lang)) {
        // replace language-locale with '/'
        result = url.replace(lang,'/');
    // handle guide special cases without a '-', like toc & welcome
    } else if (path.indexOf('-') < 0 && path.match(guide)) {
        let i = url.indexOf('/toc/');
        if (i > 0) {
            result = url.substr(0, i + 5);
        } else {
            i = url.indexOf('/welcome/');
            if (i > 0) {
                result = url.substr(0, i + 9);
            }
        }
    // try to handle general guide case
    } else {
        // check 'guide' is in path, and break into substrings via match
        matches = path.match(guide);
        // validate match w/substrings was found
        if (null !== matches && matches.length > 1) {
            // 3rd match is vanity & ID; split it into parts separated by '-'
            const parts = matches[2].split('-');
            // replace path: remove vanity parts, keep ID (part after last dash)
            result = url.replace(path, matches[1] + parts[parts.length - 1] + '/');
        }
    }

    // copy result to clipboard doesn't work on Safari  :-(
    // navigator.clipboard.writeText(result);

    if (url === result) {
        // results didn't change, show original URL
        alert('Unable to simplify the current URL—\n' + url);
    } else {
        // no clipboard access, so update address bar URL & show results
        history.replaceState(null, null, result);
        alert('Original URL:\n' + url + '\n\nModified URL:\n' + result);
    }
})();
