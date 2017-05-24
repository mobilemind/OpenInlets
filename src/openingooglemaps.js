// verify URL looks like Google Maps URL *and* iOS UserAgent
// if URL has query string use query with URL protocol of Google Maps iOS app
// else if document title looks like a place then use Google Maps iOS URL protocol
// with title as a query to Google Maps iOS app
function openingooglemaps() {
  if ('maps.google.com' === location.hostname && /iP([ao]d|hone)/.test(navigator.userAgent)) {
    if (location.search) {
      return location.href = 'comgooglemaps://' + location.search;
    } else if (/ - Google Maps/.test(document.title)) {
      return location.href = 'comgooglemaps://?q=' + encodeURI(document.title.replace(' - Google Maps', '').replace(/ /g, '+'));
    }
  }
  return void 0;
}
openingooglemaps();
