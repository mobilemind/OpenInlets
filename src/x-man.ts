// x-man - based on selected text in browser, offer to send to the clipboard
// the corresponding "x-man-page://" link. If using Safari on the Mac, also
// try to open the corresponding yellow highlighted man page in Terminal.

/*eslint max-depth: ["error", 5]*/
/* eslint no-unused-expressions: 0 */
/* eslint no-console: 0 */
/* Cspell: ignore xman */
(() => {
    const agent: string = navigator.userAgent,
        containsOther: boolean = agent.includes('Chrome/') || agent.includes('Firefox/' ) || agent.includes('Brave/') || agent.includes('Edg/' ),
        containsSafari: boolean = agent.includes('Safari/'),
        containsUnknown: boolean = !containsOther && !containsSafari,
        macSafari: boolean = navigator.platform.startsWith('Mac') && containsSafari && !containsOther && !containsUnknown && !navigator.maxTouchPoints && navigator.maxTouchPoints < 2;
    const selectionObj: Selection | null = window.getSelection();
    if (!selectionObj) {
        return;
    }
    const selection: string = selectionObj.toString().split('\n')[0].trim();
    let xman: string = 'x-man-page://';
    // check for a section specification (ie "print(1)" or "print(3)" )
    const matched: RegExpMatchArray | null = selection.match(/^(.*?)\((\d)\)$/);
    if (matched) {
      // convert section ref = 1 to simplified x-man-page URL format; "print(1)" —> "printf"
      //     and section ref != 1 to x-man-page URL format; "print(3)" —> "3/printf"
      xman += matched[2] === '1' ? matched[1] : `${matched[2]}/${matched[1]}`;
    } else {
      xman += selection;
    }
    if (selection) {
        if (confirm(`Link for "${selection}" is: ${xman}\n\nCopy to clipboard?`)) {
            let alertMsg: string = '';
            if (navigator.clipboard) {
                navigator.clipboard.writeText(xman);
            } else {
              alertMsg = `Unable to copy "${xman}" to clipboard.`;
              xman = '';
            }
            if (macSafari && xman !== '') {
                let newWin: Window | null = null;
                try {
                  newWin = window.open(xman);
                  if (newWin) {
                    newWin.opener = null;
                  }
                } catch (e) {
                  alertMsg = `Popup window blocked. Clipboard contains "${xman}"`;
                  if (e instanceof Error) {
                    console.error(e.name, e.message);
                  }
                } finally {
                  window.focus();
                  if (newWin !== null) {
                    setTimeout(() => {
                      if (newWin) {
                        newWin.close();
                      }
                    }, 3333);
                  }
                }
            } else if (xman !== '') {
              alertMsg = `Unable to open new link with Terminal. Clipboard contains "${xman}"`;
            }
            if (alertMsg !== '' ) {
              alert(alertMsg);
            }
        }
        selectionObj.empty();
    }
})();
