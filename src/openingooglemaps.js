// verify current url looks like Google Maps URL *and* iOS device
// if url has query String use it and swap in URL protocol for Google Maps iOS app
// else if document title looks like a place then swap in URL protocol for a query to Google Maps iOS app
function openingooglemaps() {
  if ('maps.google.com' === location.hostname && /iP(.d|hone)/.test(navigator.userAgent)) {
    if (location.search) return location.href = 'comgooglemaps://' + location.search;
    else if (/ - Google Maps/.test(document.title)) return location.href = 'comgooglemaps://?q=' + encodeURI(document.title.replace(' - Google Maps','').replace(/ /g,'+'));
  }
}
openingooglemaps();
