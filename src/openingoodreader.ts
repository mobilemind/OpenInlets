// verify iOS UserAgent *and* file is PDF
// then prefix URL with protocol of GoodReader iOS app
if (/iP(ad|hone)/.test(navigator.userAgent) &&
    /\.pdf($|\?)/.test(location.href)) {
    location.href = `gr${location.href}`;
}
