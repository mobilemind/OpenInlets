// verify iOS UserAgent & then prefix URL with protocol for Opera iOS app
// opera-http://URL_WITHOUT_SCHEME or opera-https://URL_WITHOUT_SCHEME

if (/iP(ad|hone)/.test(navigator.userAgent)) {
		location.href = `opera-${location.href}`;
}
