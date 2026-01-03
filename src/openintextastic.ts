// verify on an iOS device, then swap in URL protocol of Textastic iOS app
if (/iP(.d|hone)/.test(navigator.userAgent)) {
    location.href = location.href.replace(/^https?/, 'textastic');
}
