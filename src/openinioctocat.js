// verify host is 'github.com' & on an iOS device
// then swap in URL protocol of iOctocat iOS app
function openinioctocat() {
  if (/(gist\.)?github\.com/.test(location.host) &&
    /iP([ao]d|hone)/.test(navigator.userAgent)) {
    return location.href = location.href.replace('https:', 'ioc:');
  }
  return void 0;
}
openinioctocat();
