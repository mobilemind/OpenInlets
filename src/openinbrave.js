// verify iOS UserAgent & then swap in the URL protocol for the Brave iOS app
if (/iP(.d|hone)/.test(navigator.userAgent)) {
  location.href = location.href.replace(/^https?/, 'brave');
}
