// verify UserAgent is iOS & then swap in URL protocol for 1Password iOS app
function openin1password() {
  if (/iP(.d|hone)/.test(navigator.userAgent)) return location.href = 'op' + location.href;
  return void 0;
}
openin1password();
