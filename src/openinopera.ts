// verify iOS UserAgent & then prefix URL with protocol for Opera iOS app
// touch-http://URL_WITHOUT_SCHEME or touch-https://URL_WITHOUT_SCHEME

if (/iP(ad|hone)/.test(navigator.userAgent)) {
    location.href = `touch-${location.href}`;
}
