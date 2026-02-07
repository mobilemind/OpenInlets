// verify iOS UserAgent & then prefix URL with protocol for Google Chrome iOS app
// googlechrome://URL_WITHOUT_SCHEME or googlechromes://URL_WITHOUT_SCHEME

if (/iP(ad|hone)/.test(navigator.userAgent)) {
		const chromeScheme = `googlechrome${location.protocol === 'https:' ? 's' : ''}://`;
    location.href = `${chromeScheme}${location.host}${location.pathname}${location.search}${location.hash}`;
}
