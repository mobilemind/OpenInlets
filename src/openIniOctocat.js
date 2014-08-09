/* jshint strict: true */
// verify host is 'github.com'
// then swap in URL protocol for iOctocat iOS app
if (location.host === 'github.com') location.href = location.href.replace('https:', 'ioc');
