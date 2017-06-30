// verify iOS UserAgent and then prefix URL with protocol of Blogsy iOS app
if (/iP(.d|hone)/.test(navigator.userAgent)) {
  location.href = `blogsy:${location.href}`;
}
