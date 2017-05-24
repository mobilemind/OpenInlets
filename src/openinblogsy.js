// verify iOS UserAgent and then prefix URL with protocol of Blogsy iOS app
function openinblogsy() {
  if (/iP([ao]d|hone)/.test(navigator.userAgent)) {
    return location.href = 'blogsy:' + location.href;
  }
  return void 0;
}
openinblogsy();
