// verify host is 'github.com' (or 'bitbucket.org') & on an iOS device
// then prefix URL protocol for Working Copy call to show (clone if necessary)
function openinworkingcopy() {
  if (/iP(.d|hone)/.test(navigator.userAgent) &&
    (location.host === 'bitbucket.org' || location.host === 'github.com')) {
    return location.href = "working-copy://show?remote=" +
      location.href.
      split('/').
      slice(0,5).
      join('/') + ".git";
  }
  return void 0;
}
openinworkingcopy();
