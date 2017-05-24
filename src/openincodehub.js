// verify host is 'github.com' & iOS UserAgent
// then swap in URL protocol of CodeHub iOS app
function openincodehub() {
  if (/iP([ao]d|hone)/.test(navigator.userAgent) &&
    location.host === 'github.com') {
    return location.href = 'codehub://' +
      location.href.split('/').slice(2,5).join('/');
  }
  return void 0;
}
openincodehub();
