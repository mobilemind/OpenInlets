/* jshint strict: true */
// verify UserAgent is iOS *and* file is PDF
// then swap in URL protocol for GoodReader iOS app
if (/iP(.d|hone)/.test(navigator.userAgent) && /\.pdf($|\?)/.test(location.href)) location.href = 'gr' + location.href;
