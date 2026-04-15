// unskim - look for a common URL query parameter used for redirection & affiliate links
//          if a common param name is found (e.g., "url="), then get the value
//          of that param, decodeURIComponent() the value an open that URL

// wrap everything in an anon function for isolation

(() => {
    // default to getting the current address & making it a URL object to work with
    let origUrl: URL = new URL(document.location.href);

    // handle special case of Safari error page (DNS block of redirection service)
    if (origUrl.href === 'safari-resource:/ErrorPage.html') {
        // regex matches both straight AND curly (typographic) apostrophe/quotes
        const urlStr: string | undefined = document.querySelector('p.error-message')?.textContent?.match(/Safari can['\u2019]t open the page ["\u201C](https?:[^"\u201D]+)["\u201D]/)?.[1];
        if (urlStr) {
            origUrl = new URL(urlStr);
        }
    }

    // exit if searchParam is less than 13 chars ('u=https://x.y)
    if (origUrl.search.length < 13) {
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

    // navigate to new URL if found, after stripping common tracking params
    if (urlCandidate) {
        const targetUrl: URL = new URL(urlCandidate);
        if (targetUrl.searchParams.size > 0) {
            const targetParams: URLSearchParams = new URLSearchParams(targetUrl.search);
            for (const key of [...targetParams.keys()]) {
                const k: string = key.toLowerCase();
                if (k.startsWith('utm_') || k.startsWith('fb_') ||
                    ['fbclid', 'gclid', 'msclkid', 'ref', 'referrer', 'ttclid', 'twclid'].includes(k)) {
                    targetParams.delete(key);
                }
            }
            targetUrl.search = targetParams.toString();
        }
        window.location.replace(targetUrl);
    }

})();
