// x-man - based on selected text in browser, offer to send to the clipboard
// the corresponding "x-man-page://" link. If using Safari on the Mac, also
// try to open the corresponding yellow highlighted man page in Terminal.

/*eslint max-depth: ["error", 5]*/
/* eslint no-unused-expressions: 0 */
/* eslint no-console: 0 */
/* Cspell: ignore xman */
(() => {
    const agent = navigator.userAgent,
        containsOther = agent.includes('Chrome/') || agent.includes('Firefox/' ) || agent.includes('Brave/') || agent.includes('Edg/' ),
        containsSafari = agent.includes('Safari/'),
        containsUnknown = !containsOther && !containsSafari,
        macSafari = navigator.platform.startsWith('Mac') && containsSafari && !containsOther && !containsUnknown && !navigator.maxTouchPoints && navigator.maxTouchPoints < 2,
        selection = window.getSelection().toString().split('\n')[0].trim();
    let xman = 'x-man-page://';
    // check for a section specification (ie "print(1)" or "print(3)" )
    const matched = selection.match(/^(.*?)\((\d)\)$/);
    if (matched) {
      // convert section ref = 1 to simplified x-man-page URL format; "print(1)" —> "printf"
      //     and section ref != 1 to x-man-page URL format; "print(3)" —> "3/printf"
      xman += matched[2] === '1' ? matched[1] : `${matched[2]}/${matched[1]}`;
    } else {
      xman += selection;
    }
    if (selection) {
        if (confirm(`Link for "${selection}" is: ${xman}\n\nCopy to clipboard?`)) {
            let alertMsg = '';
            if (navigator.clipboard) {
                navigator.clipboard.writeText(xman);
            } else {
              alertMsg = `Unable to copy "${xman}" to clipboard.`;
              xman = '';
            }
            if (macSafari && xman !== '') {
                let newWin = null;
                try {
                  newWin = window.open(xman);
                  newWin.opener = null;
                } catch (e) {
                  alertMsg = `Popup window blocked. Unable to open new link with Terminal, but clipboard contains "${xman}"`;
                  console.error(e.name, e.message);
                } finally {
                  window.focus();
                  if (newWin !== null) {
                    setTimeout(() => {newWin.close()}, 3333);
                  }
                }
            } else if (xman !== '') {
              alertMsg = `Browser doesn't look like Mac Safari. Unable to open new link with Terminal, but clipboard contains "${xman}"`;
            }
            if (alertMsg !== '' ) {
              alert(alertMsg);
            }
        }
        window.getSelection().empty();
    }
})();
