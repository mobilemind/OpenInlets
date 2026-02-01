// grab the (target) "url" param from the current URL query string (location.search)

(() => {
	// default to getting the current address & making it a URL object to work with
	const origUrl: URL = new URL(document.location.href);

	// exit if the current URL object searchParam is less than 11 chars ('https://x.x)
	if (origUrl.search.length < 11) {
		return;
	}

	// create array of common param keys used for URLs (in priority order)
	const urlKey: string[] = ['url', 'destination', 'redirect', 'target', 'goto', 'u', 'dest', 'link', 'out'],
				origParams: URLSearchParams = new URLSearchParams(origUrl.search);

	// find 1st param key match that's a valid looking URL, starting w/ 'https:'
	const urlCandidate: string | undefined = urlKey
		.filter((param: string) => origParams.has(param))
		.map((param: string) => {
			const value: string | null = origParams.get(param);
			return value ? decodeURIComponent(value) : '';
		})
		.find((url: string) => url.match(/^https:/));

	// navigate to new URL if found
	if (urlCandidate) {
		window.location.replace(new URL(urlCandidate));
	}
})();
