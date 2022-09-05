// modifysupporturl

// wrap it all in anonymous function closure for isolation
(() => {
    const docloc = document.location;
    // for now, only work on support.apple.com
    if ('support.apple.com' !== docloc.host) {
        return;
    }
    const guide = (/(\/guide\/[-0-9a-z]+\/)([-0-9a-z]+)\//),
        lang = new RegExp('/' + navigator.language.toLowerCase() + '/', 'i'),
        path = docloc.pathname,
        selected = window.getSelection(),
        url = docloc.href;
    let heading = '',
        linktext = document.title.replace(/ - (Official )?Apple Support$/, ''),
        matches = null,
        result = url,
        subid = '';

    // handle general support doc URLs
    if (lang.test(path)) {
        // replace language-locale with '/'
        result = url.replace(lang, '/');
    // handle guide special cases without a '-', like toc & welcome
    } else if (!/-/.test(path) && guide.test(path)) {
        let i = url.indexOf('/toc/');
        if (i > 0) {
            result = url.substr(0, i + 4);
        } else {
            i = url.indexOf('/welcome/');
            if (i > 0) {
                result = url.substr(0, i + 8);
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
            // remove vanity parts, keep ID (part after last dash)
            result = 'https://support.apple.com' + matches[1] + parts.pop();
        }

        // is there a selection range?
        if ('None' !== selected.type && selected.rangeCount > 0) {
            const range = selected.getRangeAt(0);
            // get DOM node at start of range & go up 1 level if text
            if (range) {
                const container = range.startContainer;
                /* eslint-disable-next-line no-ternary, multiline-ternary */
                const anchor = container.nodeType === 3 ? container.parentNode : container;
                if (anchor.parentNode) {
                    // parent node of a heading is the <div> w/ the anchor id
                    subid = anchor.parentNode.id;
                    heading = anchor.innerText;
                    // update result with id for selection
                    if (heading !== '' && subid !== '') {
                        linktext = heading;
                        result += '#' + subid;
                    }
                }
            }
            selected.empty();
        }
    }
    // show original title & url, heading if selected, and then modified url & markdown
    /* eslint-disable-next-line no-ternary, multiline-ternary */
    alert(document.title + '\n\n' + url + '\n' + (heading !== '' && subid !== '' ? '\nSelected Heading:\n' + heading + '\n' : '') + '\nModified URL:\n' + result + '\n\nMarkdown link:\n[' + linktext + '](' + result + ')');
})();
