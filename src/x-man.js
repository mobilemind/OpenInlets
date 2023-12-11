// x-man - based on selected text in browser, open the corresponding man page
// with yellow highlighting (using Safari) + the "x-man-page://" protocol

/* eslint no-unused-expressions: 0 */
(() => {
    const selection = window.getSelection().toString(),
        xman = 'x-man-page://' + selection;
    if (selection) {
        if (confirm('x-man-page for: "' + selection + '"?')) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(xman);
            }
            window.open(xman, '_blank').opener = null;
        }
        window.getSelection().empty();
    }
})();
