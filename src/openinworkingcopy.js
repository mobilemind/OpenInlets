// verify host is 'github.com' (or 'bitbucket.org') & on an iOS device
// then use URL protocol of Working Copy with "show" and top-level repo URL
// Working Copy "show" will open to the repo, performing a clone if needed
function openinworkingcopy() {
  if (/iP([ao]d|hone)/.test(navigator.userAgent) &&
    (location.host === 'bitbucket.org' || location.host === 'github.com')) {
    return location.href = 'working-copy://show?remote=' +
      location.href.split('/').slice(0,5).join('/') + '.git';
  }
  return void 0;
}
openinworkingcopy();
