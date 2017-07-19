// verify iOS UserAgent & then prefix URL to protocol of 1Password iOS app
if (/iP(.d|hone)/.test(navigator.userAgent)) {
  location.href = 'op' + location.href;
}
