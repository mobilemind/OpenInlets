// Linklighter - use current text selection on a web page to generate a URL
// that highlights the selected text when opened in a modern browser.
// If a new URL is generated, open it in a new window to preview the highlight

(() => {
    const selection: Selection | null = window.getSelection();
    if (!selection) {
        return;
    }
    const textFrag: string = selection.toString(),
        textFragLen: number = textFrag.length,
        url: string = document.URL;
    let newUrl: string = url,
        strPos: number = url.indexOf('#'),
        strStart: string = '';

    // reset selection
    selection.empty();
    // use text fragment or split it into subfragments
    if (textFrag && textFrag !== '') {
        // trim named anchor off of end of url
        if (strPos > -1) {
            newUrl = newUrl.substring(0, strPos);
        }
        // append 1st part of suffix
        newUrl += '#:~:text=';
        if (textFragLen < 80) {
            strStart = textFrag;
            // append selection as a single fragment
            newUrl += encodeURIComponent(textFrag);
        } else {
            // sub-fragment default length is < 1/2 selection length
            let subLen: number = ~~((textFragLen / 2) - 2);
            if (textFragLen > 150) {
                subLen = 48;
            } else if (textFragLen > 100) {
                subLen = ~~(textFragLen / 3);
            }
            // create start & end subfragments of selection
            strStart = textFrag.substring(0, subLen);
            const subFrag: string[] = [encodeURIComponent(strStart),
                encodeURIComponent(textFrag.slice(textFragLen - subLen))];
            strStart += '…';
            // trim start string- truncate at last space
            strPos = subFrag[0].lastIndexOf('%20');
            if (strPos > -1) {
                subFrag[0] = subFrag[0].substring(0, strPos);
            }
            // trim end string- drop text before first space
            strPos = subFrag[1].indexOf('%20');
            if (strPos > -1) {
                subFrag[1] = subFrag[1].slice(strPos + 3);
            }
            // append selection as start & end subfragments
            newUrl += subFrag.join();
        }
        // clean-up trailing %0A (newline) or %20 (space)
        // and any leading double-hash, just in case
        newUrl = newUrl.replace((/(%0A|%20A)+$/), '');
        newUrl = newUrl.replace(/##+:~:text=/, '#:~:text=');
    }
    if (newUrl !== url) {
        if (confirm(`Open URL with highlight on "${strStart}" and copy URL to clipboard?\n\nNote: If text isn't highlighted in new tab, you can try again with a smaller selection.`)) {
            // send to clipboard & open in new window
            navigator.clipboard.writeText(newUrl);
            const newWindow: Window | null = window.open(newUrl, '_blank');
            if (newWindow) {
                newWindow.opener = null;
            }
        }
    }
})();
