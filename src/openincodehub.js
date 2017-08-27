// verify host is 'github.com' & iOS UserAgent
// then swap in URL protocol of CodeHub iOS app
if (/iP(.d|hone)/.test(navigator.userAgent) && location.host === 'github.com') {
    location.href = 'codehub://' + location.href.split('/').slice(2,5).join('/');
}
