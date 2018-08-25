// grab the URL param from the current URL query string (location.search)
const u = location.search.search("url=");
if (u > -1) {
    let t = location.search.substr(4 + u);
    // check if there are params after it (i.e., an "&")
    const p = t.indexOf("&");
    // lop off trailing params
    if (p > -1) {
        t = t.substr(0,p);
    }
    if (5 < t.length) {
        // decode URL and navigate to it
        location.replace(decodeURIComponent(t));
    }
}
