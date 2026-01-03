// grab the URL param from the current URL query string (location.search)
const u: number = location.search.search("url=");
if (u > -1) {
    let t: string = location.search.slice(4 + u);
    // check if there are params after it (i.e., an "&")
    const p: number = t.indexOf("&");
    // lop off trailing params
    if (p > -1) {
        t = t.slice(0, p);
    }
    if (t.length > 5) {
        // decode URL and validate it before navigating
        const decodedUrl: string = decodeURIComponent(t);
        try {
            // Parse URL to validate it's well-formed
            const urlObj: URL = new URL(decodedUrl, location.href);
            // Only allow https scheme to prevent XSS and enforce secure connections
            if (urlObj.protocol === "https:") {
                location.replace(urlObj.href);
            }
        } catch (e) {
            // Invalid URL - do nothing
        }
    }
}
