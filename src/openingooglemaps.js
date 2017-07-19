// verify URL looks like Google Maps URL *and* iOS UserAgent
// if URL has query string use query with URL protocol of Google Maps iOS app
// else if document title looks like a place then use Google Maps iOS URL protocol
// with title as a query to Google Maps iOS app
if (/\.google\.com/.test(location.host) && /iP(.d|hone)/.test(navigator.userAgent)) {
  if (location.search) {
    location.href = 'comgooglemaps://' + location.search;
  } else if (/ - Google Maps/.test(document.title)) {
    location.href = 'comgooglemaps://?q=' +
      encodeURI(document.title.replace(' - Google Maps', '').replace(/ /g, '+'));
  }
}
