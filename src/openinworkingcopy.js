// verify host is 'github.com' (or 'bitbucket.org') & on an iOS device
// then use URL protocol of Working Copy with "show" and top-level repo URL
// Working Copy "show" will open to the repo, performing a clone if needed
if (/iP(.d|hone)/.test(navigator.userAgent) &&
    (location.host === 'bitbucket.org' || location.host === 'github.com')) {
    location.href = 'working-copy://show?remote=' +
        encodeURIComponent(location.href.split('/').slice(0,5).join('/')) + '.git';
}
