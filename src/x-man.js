// x-man - based on selected text in browser, offer to send to the clipboard
// the corresponding "x-man-page://" link. If using Safari on the Mac, also
// try to open the corresponding yellow highlighted man page im Terminal

/* eslint no-unused-expressions: 0 */
(() => {
    const agent = navigator.userAgent,
        containsOther = agent.includes('Chrome/') || agent.includes('Firefox/' ) || agent.includes('Brave/') || agent.includes('Edg/' ),
        containsSafari = agent.includes('Safari/'),
        macSafari = navigator.platform.startsWith('Mac') && containsSafari && !containsOther && !navigator.maxTouchPoints && !navigator.maxTouchPoints > 1,
        selection = window.getSelection().toString().trim();
    let xman = 'x-man-page://' + selection;
    if (selection) {
        if (confirm(`Link for "${selection}" is: ${xman}\n\nCopy to clipboard?`)) {
            let alertMsg = '';
            if (navigator.clipboard) {
                navigator.clipboard.writeText(xman);
            } else {
              alertMsg = `Unable to copy "${xman}" to clipboard.`;
              xman = '';
            }
            if (macSafari && xman != '') {
                const newWin = window.open(xman, '_blank');
                if (typeof newWin.closed !== 'undefined' && !newWin.closed && newWin) {
                  newWin.close();
                } else {
                  alertMsg = `Popup window blocked. Unable to open new link with Terminal, but clipboard contains "${xman}"`;
                }
            } else if (xman != '') {
              alertMsg = `Browser doesn't look like Mac Safari. Unable to open new link with Terminal, but clipboard contains "${xman}"`;
            }
            if (alertMsg != '' ) {
              alert(alertMsg);
            }
        }
        window.getSelection().empty();
    }
})();
