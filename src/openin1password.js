// verify iOS UserAgent & then prefix URL to protocol of 1Password iOS app
function openin1password() {
  if (/iP([ao]d|hone)/.test(navigator.userAgent)) {
    return location.href = 'op' + location.href;
  }
  return void 0;
}
openin1password();
