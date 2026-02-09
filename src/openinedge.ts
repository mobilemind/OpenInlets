// verify iOS UserAgent & then prefix URL with protocol for Microsoft Edge iOS app
// microsoft-edge-http://URL_WITHOUT_SCHEME or microsoft-edge-https://URL_WITHOUT_SCHEME

if (/iP(ad|hone)/.test(navigator.userAgent)) {
    location.href = `microsoft-edge-${location.href}`;
}
