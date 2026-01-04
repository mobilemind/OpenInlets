/* eslint max-statements: ["error", 65] */
// Linklighter - use current text selection on a web page to generate a URL
// that highlights the selected text when opened in a modern browser.
// If a new URL is generated, open it in a new window to preview the highlight

(() => {
    const enc: typeof encodeURIComponent = encodeURIComponent;
    const selection: Selection | null = window.getSelection();
    if (!selection) {
        return;
    }
    const textFrag: string = selection.toString(),
        textFragLen: number = textFrag.length,
        url: string = document.URL,
        strPos: number = url.indexOf('#');
    let newUrl: string = url,
        strStart: string = '',
        prefix: string = '',
        suffix: string = '';

    // Check for duplicate text and get context if needed
    if (selection.rangeCount > 0 && textFrag) {
        const bodyText: string = document.body.textContent || '';
        const occurrences: number = bodyText.split(textFrag).length - 1;

        // Only add prefix/suffix if text appears multiple times
        if (occurrences > 1) {
            const range: Range = selection.getRangeAt(0);
            const container: Node = range.commonAncestorContainer;
            const fullText: string = container.textContent || '';
            const {startOffset, endOffset} = range;

            // Extract prefix (up to 20 chars before selection)
            const prefixStart: number = Math.max(0, startOffset - 20);
            prefix = fullText.substring(prefixStart, startOffset).trim();
            // If we cut mid-word at start, shift start forward to first complete word
            if (prefixStart > 0 && fullText.charAt(prefixStart - 1) !== ' ') {
                const firstSpace: number = prefix.indexOf(' ');
                if (firstSpace > 0) {
                    prefix = prefix.substring(firstSpace + 1);
                }
            }

            // Extract suffix (up to 20 chars after selection)
            const suffixEnd: number = Math.min(fullText.length, endOffset + 20);
            suffix = fullText.substring(endOffset, suffixEnd).trim();
            // If we cut mid-word at end, shift end backward to last complete word
            if (suffixEnd < fullText.length && fullText.charAt(suffixEnd) !== ' ') {
                const lastSpace: number = suffix.lastIndexOf(' ');
                if (lastSpace > 0) {
                    suffix = suffix.substring(0, lastSpace);
                }
            }
        }
    }

    // reset selection
    selection.removeAllRanges();
    // use text fragment or split it into subfragments
    if (textFrag && textFrag !== '') {
        // trim named anchor off of end of url
        if (strPos > -1) {
            newUrl = newUrl.substring(0, strPos);
        }

        // Build text fragment
        let fragment: string = '';
        if (prefix) {
            fragment = `${enc(prefix)}-,`;
        }

        if (textFragLen < 80) {
            strStart = textFrag;
            fragment += enc(textFrag);
        } else {
            // sub-fragment default length is < 1/2 selection length
            let subLen: number = ~~((textFragLen / 2) - 2);
            if (textFragLen > 150) {
                subLen = 48;
            } else if (textFragLen > 100) {
                subLen = ~~(textFragLen / 3);
            }
            // create start & end subfragments of selection
            let startFrag: string = textFrag.substring(0, subLen);
            let endFrag: string = textFrag.slice(textFragLen - subLen);

            // Improve word boundary awareness - trim to last/first word boundary
            const lastSpace: number = startFrag.lastIndexOf(' ');
            if (lastSpace > subLen / 2) {
                startFrag = startFrag.substring(0, lastSpace);
            }
            const firstSpace: number = endFrag.indexOf(' ');
            if (firstSpace > -1 && firstSpace < subLen / 2) {
                endFrag = endFrag.substring(firstSpace + 1);
            }

            strStart = `${startFrag}…`;
            fragment += `${enc(startFrag)},${enc(endFrag)}`;
        }

        if (suffix) {
            fragment += `,-${enc(suffix)}`;
        }

        newUrl += `#:~:text=${fragment}`;
        // clean-up trailing %0A (newline), %0D (carriage return), %09 (tab), or %20 (space)
        newUrl = newUrl.replace(/(%0A|%0D|%09|%20)+$/, '');
        newUrl = newUrl.replace(/(%20){2,}/g, '%20');
        newUrl = newUrl.replace(/##+:~:text=/, '#:~:text=');
    }
    if (newUrl !== url) {
        if (confirm(`Open URL with highlight on "${strStart}" and copy URL to clipboard?`)) {
            // Copy to clipboard with error feedback
            navigator.clipboard.writeText(newUrl).catch(() => {
                alert('Could not copy to clipboard. URL is in the new tab.');
            });

            const newWindow: Window | null = window.open(newUrl, '_blank');
            if (newWindow) {
                newWindow.opener = null;
            } else {
                alert('Popup blocked. URL copied to clipboard.');
            }
        }
    }
})();
