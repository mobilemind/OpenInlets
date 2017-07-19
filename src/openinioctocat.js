// verify host is 'github.com' & on an iOS device
// then swap in URL protocol of iOctocat iOS app
if (/(gist\.)?github\.com/.test(location.host) &&
  /iP(.d|hone)/.test(navigator.userAgent)) {
  location.href = location.href.replace('https:', 'ioc:');
}
