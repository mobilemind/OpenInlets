// verify UserAgent is iOS then swap in URL protocol for Firefox iOS app
function openinfirefox() {
  if (/iP(.d|hone)/.test(navigator.userAgent)) {
    return location.href = "firefox://open-url?url=" + location.href;
  }
  return void 0;
}
openinfirefox();