// verify iOS UserAgent & then prefix URL with protocol of Brave iOS app
if (/iP(.d|hone)/.test(navigator.userAgent)) {
    location.href = 'brave://open-url?url=' + encodeURIComponent(location.href);
}
