// verify iOS UserAgent & then prefix URL with protocol of Firefox iOS app
if (/iP(.d|hone)/.test(navigator.userAgent)) {
  location.href = 'firefox://open-url?url=' + location.href;
}
