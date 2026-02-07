// verify iOS UserAgent & then prefix URL with protocol of Orion iOS app
if (/iP(ad|hone)/.test(navigator.userAgent)) {
    location.href = `orion://open-url?url=${encodeURIComponent(location.href)}`;
}
