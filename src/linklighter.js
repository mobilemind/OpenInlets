// Linklighter - generate a link that highlights a selected text fragment when
// opened in a modern browser

(() => {
    const docloc = document.location,
        doctitle = document.title,
        hashpos = docloc.href.indexOf('#'),
        textFrag = window.getSelection().toString(),
        textFragLen = textFrag.length,
        url = docloc.href;
    let result = url;

    // trim off named anchor
    if (hashpos > -1) {
        result = result.substring(0, hashpos);
    }

    // use selection to set text fragment or subfragments for start,end
    if (textFrag && '' != textFrag) {
        let subLen = 0;
        result += '#:~:text=';
        if (textFragLen < 100) {
            result += encodeURIComponent(textFrag);
        } else {
            if (textFragLen > 189) {
                subLen = 63;
            } else if (textFragLen > 149) {
                subLen = ~~(textFragLen / 3);
            } else {
                subLen = ~~((textFragLen / 2) - 5);
            }
            const subFrag = [encodeURIComponent(textFrag.substring(0, subLen)),
                encodeURIComponent(textFrag.substr(textFragLen - subLen))];
            result += subFrag.join();
        }
        // clean-up trailing %0A, & double-hash, just in case
        result = result.replace((/%0A$/), '');
        result = result.replace('##:~:text=', '#:~:text=');
    } else {
        // warn if no selection & defaulting to top of page link
        alert('Unable to link directly to selection. Link will be to top of page.');
    }

    // page title & url, selection to highlight, and URL with Markdown
    alert(`${doctitle}\n${url}\n${textFrag && '' != textFrag ? `\nText fragment to highlight\n${textFrag}\n` : ''}\nModified URL:\n${result}\n\nMarkdown link:\n[${doctitle}](${result})`);
    window.getSelection().empty();
})();
