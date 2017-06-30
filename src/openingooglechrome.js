// verify iOS UserAgent & then swap for URL protocol of GoogleChrome iOS app
if (/iP(.d|hone)/.test(navigator.userAgent)) {
  location.href = location.href.replace(/^http/, 'googlechrome');
}
