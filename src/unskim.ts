// unskim - look for a common URL query parameter used for redirection & affiliate links
//          if a common param name is found (e.g., "url="), then get the value
//          of that param, decodeURIComponent() the value an open that URL

// wrap everything in an anon function for isolation

(() => {

// default to getting the current address & making it a URL object to work with
let origUrl: URL = new URL(document.location.href);

// handle special case of Safari error page (DNS block of redirection service)
if (origUrl.href === 'safari-resource:/ErrorPage.html') {
  // DO NOT "UNCURL" the apostrophe or quotes in the match regex, that formatting IS CRITICAL
  const urlStr: string | undefined = document.querySelector('p.error-message')?.textContent?.match(/Safari can't open the page "(https?:[^"]+)"/)?.[1];
  if (urlStr) {
    origUrl = new URL(urlStr);
  }
}

// if the current URL object doesn't even have a searchParam, exit now
if (origUrl.search === '') {
  return;
}

// create array of common param keys used for URLs (in priority order)
const urlKey: string[] = ['url', 'destination', 'redirect', 'target', 'goto', 'u', 'dest', 'link', 'out'],
      origParams: URLSearchParams = new URLSearchParams(origUrl.search);

// find 1st param key match that's a valid looking URL
const urlCandidate: string | undefined = urlKey
  .filter((param: string) => origParams.has(param))
  .map((param: string) => {
    const value: string | null = origParams.get(param);
    return value ? decodeURIComponent(value) : '';
  })
  .find((url: string) => url.match(/^https?:/));

// navigate to new URL if found
if (urlCandidate) {
  window.location.replace(new URL(urlCandidate));
}

})();
