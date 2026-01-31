// verify iOS UserAgent & then prefix URL with protocol of Brave iOS app
if (/iP(ad|hone)/.test(navigator.userAgent)) {
    location.href = `brave://open-url?url=${encodeURIComponent(location.href)}`;
}
