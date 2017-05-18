// verify host is 'bitbucket.org' & on an iOS device
// then swap in URL protocol for CodeBucket
function openincodebucket() {
  if (/iP(.d|hone)/.test(navigator.userAgent) &&
    location.host === 'bitbucket.org') {
    return location.href = 'codebucket://' +
      location.href.split('/').slice(2,5).join('/');
  }
  return void 0;
}
openincodebucket();
