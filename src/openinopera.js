// verify iOS UserAgent & then prefix URL with protocol of the Opera iOS app
if (/iP(.d|hone)/.test(navigator.userAgent)) {
    location.href = 'opera://open-url?url=' + encodeURIComponent(location.href);
}
