/* jshint strict: true */
// verify host is 'github.com' & on an iOS device
// then swap in URL protocol for iOctocat iOS app
if (location.host === 'github.com' && /iP(.d|hone)/.test(navigator.userAgent)) location.href = location.href.replace('https:', 'ioc:');
