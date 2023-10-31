// x-man - based on selected text in browser, open the corresponding man page
// with yellow highlighting (using Safari) + the "x-man-page://" protocol

// no need to wrap this as it uses no vars
/* eslint no-unused-expressions: 0 */
window.getSelection().toString() ? window.open('x-man-page://' + window.getSelection().toString(), '_blank').opener = null : 0;
