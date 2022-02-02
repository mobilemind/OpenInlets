// modifysupporturl

// wrap it all in anonymous function closure for isolation
(() => {
    const docloc = document.location;
    const guide = (/(\/guide\/[-0-9a-z]+\/)([-0-9a-z]+)\//),
        lang = new RegExp('/' + navigator.language.toLowerCase() + '/', 'i'),
        path = docloc.pathname,
        selected = window.getSelection(),
        url = docloc.href;
    let heading = '',
        matches = null,
        result = url,
        subid = '';
    // for now, only work on support.apple.com
    if ('support.apple.com' !== docloc.host) {
        return;
    }

    // handle general support doc URLs
    if (lang.test(path)) {
        // replace language-locale with '/'
        result = url.replace(lang, '/');
    // handle guide special cases without a '-', like toc & welcome
    } else if (!/-/.test(path) && guide.test(path)) {
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
            let parts = matches[2].split('-');
            // remove vanity parts, keep ID (part after last dash)
            result = 'https://support.apple.com' + matches[1] + parts.pop() + '/';
        }
        // setup to check for a selection & find an anchor id
        let anchor = null,
            container = null,
            range = null;

        // is there a selection range?
        if ('None' !== selected.type && selected.rangeCount > 0) {
            range = selected.getRangeAt(0);
            // get DOM node at start of range & go up 1 level if text
            if (range) {
                container = range.startContainer;
                /* eslint-disable-next-line no-ternary, multiline-ternary */
                anchor = container.nodeType === 3 ? container.parentNode : container;
                if (anchor.parentNode) {
                    // parent node of a heading is the <div> w/ the anchor id
                    subid = anchor.parentNode.id;
                    heading = anchor.innerText;
                    // update result with id for selection
                    if (heading !== '' && subid !== '') {
                        result += '#' + subid;
                    }
                }
            }
            selected.removeAllRanges();
        }
    }

    if (url === result) {
        // results didn't change, show original URL
        alert('Unable to simplify current URL-\n' + url);
    } else {
        // set linktext for Markdown to either selected heading or page title
        let linktext = '';
        /* eslint-disable-next-line no-ternary, multiline-ternary */
        linktext = heading !== '' && subid !== '' ? heading : document.title.replace(/ - Apple Support$/, '');
        /* eslint-disable-next-line no-ternary, multiline-ternary */
        alert(`Original URL-\n${url}\n\nModified URL-\n${result}${heading !== '' && subid !== '' ? '\n\nSelected Heading-\n' + heading : ''}\n\nMarkdown link-\n[${linktext}](${result})`);
    }
})();
