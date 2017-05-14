// verify UserAgent is iOS then swap in URL protocol for GoogleChrome iOS app
function openingooglechrome() {
  if (/iP(.d|hone)/.test(navigator.userAgent)) {
    return location.href = location.href.replace(/^http/, 'googlechrome');
  }
  return void 0;
}
openingooglechrome();
