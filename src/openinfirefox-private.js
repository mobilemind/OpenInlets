// verify iOS UserAgent, prefix URL w/ Firefox iOS protocol, & add private suffix
if (/iP(.d|hone)/.test(navigator.userAgent)) {
  location.href = 'firefox://open-url?url=' +
  encodeURIComponent(location.href) +
  '&private=true';
}
