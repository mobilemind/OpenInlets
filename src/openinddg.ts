// verify iOS UserAgent & then prefix URL with protocol for DuckDuckGo Browser

if (/iP(ad|hone)/.test(navigator.userAgent)) {
    location.href = `ddgQuickLink://${location.href.slice(location.protocol.length + 2)}`;
}
