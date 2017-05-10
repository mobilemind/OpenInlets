// javascript:window.location=%27blogsy:%27+window.location
// http://blogsyapp.com/developers/
// verify UserAgent is iOS and then swap in URL protocol for Blogsy iOS app
function openinblogsy() {
    if (/iP(.d|hone)/.test(navigator.userAgent)) {
        return location.href = 'blogsy:' + location.href;
    }
    return void 0;
}
openinblogsy();
