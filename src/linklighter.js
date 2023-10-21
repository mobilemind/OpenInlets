// Linklighter - generate a link that highlights a selected text fragment when
//   opened in a modern browser. After showing an alert, it opens a new window
//   that should show the effect.

(() => {
    const docloc = document.location,
        doctitle = document.title,
        textFrag = window.getSelection().toString(),
        textFragLen = textFrag.length,
        url = docloc.href;
    let hashpos = url.indexOf('#'),
        result = url;

    // trim off named anchor
    if (hashpos > -1) {
        result = result.substring(0, hashpos);
    }

    // use selection to set text fragment or subfragments for start,end
    if (textFrag && '' != textFrag) {
        let subLen = 0;
        result += '#:~:text=';
        if (textFragLen < 80) {
            result += encodeURIComponent(textFrag);
        } else {
            if (textFragLen > 150) {
                subLen = 60;
            } else if (textFragLen > 100) {
                subLen = ~~(textFragLen / 3);
            } else {
                subLen = ~~((textFragLen / 2) - 2);
            }
            let subFrag = [encodeURIComponent(textFrag.substring(0, subLen)),
                encodeURIComponent(textFrag.substr(textFragLen - subLen))];
            // trim start string by truncating at last space
            hashpos = subFrag[0].lastIndexOf('%20');
            if (hashpos > -1) {
                subFrag[0] = subFrag[0].substring(0, hashpos);
            }
            // trim end string by cutting off text before first space
            hashpos = subFrag[1].indexOf('%20');
            if (hashpos > -1) {
                subFrag[1] = subFrag[1].substr(hashpos + 3);
            }
            // join start & end
            result += subFrag.join();
        }
        // clean-up trailing %0A or %20, and any leading double-hash, just in case
        result = result.replace((/%0A$/), '');
        result = result.replace((/%20$/), '');
        result = result.replace('##:~:text=', '#:~:text=');
    } else {
        // warn if no selection & defaulting to top of page link
        alert('Unable to link directly to selection. Link will be to top of page.');
    }

    // page title & url, selection to highlight, and URL with Markdown
    alert(`${doctitle}\n${url}\n${textFrag && '' != textFrag ? `\nText fragment to highlight\n${textFrag}\n` : ''}\nModified URL:\n${result}\n\nMarkdown link:\n[${doctitle}](${result})`);
    window.getSelection().empty();
    // open in new window # or try window.open(result, '_blank', 'noreferrer');
    window.open(result, '_blank').opener = null;

})();
