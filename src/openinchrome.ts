// verify iOS UserAgent & then prefix URL with protocol for Google Chrome iOS app
// googlechrome://URL_WITHOUT_SCHEME or googlechromes://URL_WITHOUT_SCHEME

if (/iP(ad|hone)/.test(navigator.userAgent)) {
		const proto = location.protocol;
    location.href = `googlechrome${proto === 'https' ? 's' : ''}://${location.href.slice(proto.length + 2)}`;
}
