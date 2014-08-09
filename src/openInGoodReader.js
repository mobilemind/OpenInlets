/* jshint strict: true */
// verify UserAgent is iOS *and* URL is http: or https: *and* file is PDF
// then swap in URL protocol for GoodReader iOS app
if (/iP(.d|hone)/.test(navigator.userAgent) && /https?:/.test(location.protocol) && /\.pdf($|\?)/.test(location.href)) location.href = 'gr' + location.href;
