// verify host is 'github.com' & on an iOS device
// then swap in URL protocol for CodeHub
function openincodehub() {
  if (/iP(.d|hone)/.test(navigator.userAgent) &&
    location.host === 'github.com') {
    return location.href = 'codehub://' +
     location.href.split('/').slice(2,5).join('/');
  }
  return void 0;
}
openincodehub();
