// verify iOS UserAgent *and* file is PDF
// then prefix URL with protocol of GoodReader iOS app
function openingoodreader() {
  if (/iP([ao]d|hone)/.test(navigator.userAgent) && /\.pdf($|\?)/.test(location.href)) {
    return location.href = 'gr' + location.href;
  }
  return void 0;
}
openingoodreader();
