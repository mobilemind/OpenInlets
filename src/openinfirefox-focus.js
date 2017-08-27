// verify iOS UserAgent, prefix URL w/ Firefox Focus protocol, & add private suffix
if (/iP(.d|hone)/.test(navigator.userAgent)) {
    location.href = 'firefox-focus://open-url?url=' +
    encodeURIComponent(location.href) +
    '&private=true';
}
