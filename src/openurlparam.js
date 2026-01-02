// grab the URL param from the current URL query string (location.search)
const u = location.search.search("url=");
if (u > -1) {
    let t = location.search.slice(4 + u);
    // check if there are params after it (i.e., an "&")
    const p = t.indexOf("&");
    // lop off trailing params
    if (p > -1) {
        t = t.slice(0, p);
    }
    if (t.length > 5) {
        // decode URL and navigate to it
        location.replace(decodeURIComponent(t));
    }
}
