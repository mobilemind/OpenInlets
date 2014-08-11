/* jshint strict: true */
// verify UserAgent is iOS & then swap in URL protocol for 1Password iOS app
if (/iP(.d|hone)/.test(navigator.userAgent) location.href = 'op' + location.href;
