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
        // decode URL and navigate to it
        location.replace(encodeURI(decodeURIComponent(t)));
    }
}
