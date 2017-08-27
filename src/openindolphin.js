// verify iOS UserAgent & then swap in URL protocol for the Dolphin iOS app
if (/iP(.d|hone)/.test(navigator.userAgent)) {
    location.href = location.href.replace(/^https?/, 'dolphin');
}
