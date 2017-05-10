// verify host is 'github.com' & on an iOS device
// then swap in URL protocol for iOctocat iOS app
function openinioctocat() {
    if (location.host === 'github.com' && /iP(.d|hone)/.test(navigator.userAgent)) {
        return location.href = location.href.replace('https:', 'ioc:');
    }
    return void 0;
}
openinioctocat();
