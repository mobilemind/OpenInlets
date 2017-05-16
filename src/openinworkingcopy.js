// verify host is 'github.com' & on an iOS device
// then swap in URL protocol for Working Copu call to show (clone if necessary)
function openinworkingcopy() {
  if (/iP(.d|hone)/.test(navigator.userAgent) &&
    (location.host === 'bitbucket.org' || location.host === 'github.com')) {
    return location.href = "working-copy://show?remote=" + location.href + ".git";
  }
  return void 0;
}
openinworkingcopy();
