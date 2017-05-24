// verify iOS UserAgent & then prefix URL with protocol of Firefox iOS app
function openinfirefox() {
  if (/iP([ao]d|hone)/.test(navigator.userAgent)) {
    return location.href = 'firefox://open-url?url=' + location.href;
  }
  return void 0;
}
openinfirefox();
