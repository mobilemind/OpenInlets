// verify host is 'bitbucket.org' & iOS UserAgent
// then swap in URL protocol of CodeBucket iOS app
function openincodebucket() {
  if (/iP(.d|hone)/.test(navigator.userAgent) &&
    location.host === 'bitbucket.org') {
    return location.href = 'codebucket://' +
      location.href.split('/').slice(2,5).join('/');
  }
  return void 0;
}
openincodebucket();
