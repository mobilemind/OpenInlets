// verify host is 'bitbucket.org' & iOS UserAgent
// then swap in URL protocol of CodeBucket iOS app
if (/iP(.d|hone)/.test(navigator.userAgent) && location.host === 'bitbucket.org') location.href = `codebucket://${location.href.split('/').slice(2,5).join('/')}`;
