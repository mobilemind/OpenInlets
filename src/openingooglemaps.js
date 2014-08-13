// verify current url looks like Google Maps URL *and* has query String *and* iOS device
// then swap in URL protocol for Google Maps iOS app
function openingooglemaps() {
  if ('maps.google.com' == location.hostname && location.search && /iP(.d|hone)/.test(navigator.userAgent)) return location.href = 'comgooglemaps://' + location.search;
}
openingooglemaps();
