/* jshint strict: true */
// verify current url looks like Google Maps URL *and* has query String
// then swap in URL protocol for Google Maps iOS app
if ('maps.google.com' == location.hostname && location.search) location.href = 'comgooglemaps://' + location.search;