// verify UserAgent is iOS *and* file is PDF
// then swap in URL protocol for GoodReader iOS app
function openingoodreader() {
  if (/iP(.d|hone)/.test(navigator.userAgent) && /\.pdf($|\?)/.test(location.href)) return location.href = 'gr' + location.href;
}
openingoodreader();
