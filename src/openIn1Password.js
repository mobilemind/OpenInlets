/* jshint strict: true */
// verify UserAgent is iOS *and* URL is http: or https:
// then swap in URL protocol for 1Password iOS app
if (/iP(.d|hone)/.test(navigator.userAgent) && /https?:/.test(location.protocol)) location.href='op'+location.href;
