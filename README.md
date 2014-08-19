# OpenInlets

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Build Status](https://secure.travis-ci.org/mobilemind/OpenInlets.png?branch=master)](http://travis-ci.org/mobilemind/OpenInlets)

OpenInlets is a collection of bookmarklets for iOS Mobile Safari. Individual bookmarklets are
described below.

__OpenIn1Password__ Use this bookmarklet to automatically open the current web page using the
Webview in 1Password 4.1.x. The 1Password Webview is handy for login/form completion, or to
quickly add a new entry with login credentials.

__OpenInBlogsy__ Use this bookmarklet to automatically open the current web page using the Webview
in Blogsy on iOS. From there you can easily reblog or quote the page.

__OpenInGoodReader__ Use this bookmarklet when viewing a PDF in Mobile Safari to automatically
open the same PDF in GoodReader 4.

__OpenInGoogleMaps__ Use this bookmarklet to automatically open the current web page in the
Google Maps application on iOS. Handy when an app opens a Google Maps page in Mobile Safari,
but you'd prefer that the Google Maps _app_ show the same info. Just select the bookmark, it does
the rest-- no need to select, copy, switch apps & paste. If the current URL does NOT contain an
address or location, the bookmarklet will trigger a Google Maps app search using the page title.

__OpenIniOctocat__ Use this bookmarklet when viewing a Github repository URL in Mobile Safari to
automatically open the same repository in the iOctocat iOS app.

__SearchIn1Password__ Use this bookmarklet to automatically open 1Password and search for entries
containing the domain of the current web page. This works on Mobile Safari as well as Safari and
Firefox on Mac OS X Mavericks.


## Install
### Desktop browser
Visit the [OpenInlets page].

Drag the indicated link to the bookmark bar or select it and add bookmark/favorite. Optionally
edit or rename the bookmark/favorite. Finally, synchronize bookmarks using iTunes or iCloud to
get the bookmarklet to iOS.

#### JavaScript bookmarks
+ [OpenIn1Password] v1.1.0 `javascript:function%20a()%7Breturn/iP(.d%7Chone)/.test(navigator.userAgent)?location.href='op'+location.href:void%200%7Da();void'1.1.0'`
+ [OpenInBlogsy] v1.0.0 `javascript:function%20a()%7Breturn/iP(.d%7Chone)/.test(navigator.userAgent)?location.href='blogsy:'+location.href:void%200%7Da();void'1.0.0'`
+ [OpenInGoodReader] v1.1.0 `javascript:function%20a()%7Breturn/iP(.d%7Chone)/.test(navigator.userAgent)&&/%5C.pdf($%7C%5C?)/.test(location.href)?location.href='gr'+location.href:void%200%7Da();void'1.1.0'`
+ [OpenInGoogleMaps] v1.7.1 `javascript:function%20a()%7Bif('maps.google.com'==location.hostname&&/iP(.d%7Chone)/.test(navigator.userAgent))%7Bif(location.search)return%20location.href='comgooglemaps://'+location.search;if(/%20-%20Google%20Maps/.test(document.title))return%20location.href='comgooglemaps://?q='+encodeURI(document.title.replace('%20-%20Google%20Maps','').replace(/%20/g,'+'))%7D%7Da();void'1.7.1'`
+ [OpenIniOctocat] v1.1.0 `javascript:function%20a()%7Breturn'github.com'===location.host&&/iP(.d%7Chone)/.test(navigator.userAgent)?location.href=location.href.replace('https:','ioc:'):void%200%7Da();void'1.1.0'`
+ [SearchIn1Password] v1.0.0 `javascript:function%20a()%7Bvar%20a=location.hostname.split('.');return%20location.href='onepassword4://search/'+a.slice(a.length-2).join('.')%7Da();void'1.0.0'`

Or use the a Mobile browser to visit this page (or the [OpenInlets page]) and use one of the Mobile
browser setup links such as the ones below.

### Mobile browser
Tap the link below, bookmark the new page and follow the instructions on the page to turn the
followed bookmark into a JavaScript bookmarklet.

+ **Mobile Safari setup link** -- [Setup OpenIn1Password] v1.1.0
+ **Mobile Safari setup link** -- [Setup OpenInBlogsy] v1.0.0
+ **Mobile Safari setup link** -- [Setup OpenInGoodReader] v1.1.0
+ **Mobile Safari setup link** -- [Setup OpenInGoogleMaps] v1.7.1
+ **Mobile Safari setup link** -- [Setup OpenIniOctocat] v1.1.0
+ **Mobile Safari setup link** -- [Setup SearchIn1Password] v1.0.0

## Use
When a search or other app opens a web page in Mobile Safari, activate the corresponding bookmarklet
(tap it on bookmark bar or use the Bookmarks/Favorites menu). If installed the corresponding iOS
app will open to the same document or location.

## Requirements
* Mobile Safari 7.x or higher
* Corresponding iOS app

**NOTE:**
1. On iOS bookmarklets do NOT work in current versions of Google Chrome, Ghostery and DuckDuckGo apps
for iOS due to restrictions in those apps on `javascript:` URL bookmarks.
2. SearchIn1Password does work on Macintosh OS X Mavericks with Safari or Firefox.

## License
MIT License - <http://www.opensource.org/licenses/mit-license.php>

## Source Code Notes

The `void'x.y.z'` at the end the bookmarklet URL code serves two purposes.

First it prevents the browser from navigating to another page when the bookmark is used.

Second, it is a convenient place to embed a string indicating the `semver` version of the bookmark.

## Build
Clone the repository. If `node` is not installed go get it from [nodejs.org][nodejs]. Finally change to
the `OpenInlets` directory and install the dependencies into the project before invoking `grunt`.
```bash
git clone https://github.com/mobilemind/OpenInlets.git
cd OpenInlets
npm install
grunt
```

Note that [nodejs] and [npm] are required. The lines above will install [grunt], [js2uri], and other
dependencies defined in `package.json`. Later you can update them using `npm update` at any time or
just invoke `grunt` to re-build OpenInlets.

## URL Scheme Notes
Each bookmarklet does one or more rudimentary checks and then redirects to an app using a URL protocol
scheme. Information for each bookmarklet and the URL scheme follows.

* **OpenIn1Password** - Checks that the current browser UserAgent is for an iOS device (iPod/iPad/iPhone)
and then redirects using the `ophttp://` or `ophttps://` URL protocol scheme for 1Password. See the
subheading [Open URLs externally...][1Password URL Scheme] for details.
* **OpenInBlogsy** - Checks that the UserAgent corresponds to an iOS device and then redirects using the
`blogsy:` URL protocol scheme for Blogsy.
See [GoodReader URL Scheme].
* **OpenInGoodReader** - Checks that the UserAgent corresponds to an iOS device and that the current URL
contains `.pdf` before redirecting using the `grhttp://` or `grhttps://` URL protocol scheme for GoodReader.
See [GoodReader URL Scheme].
* **OpenInGoogleMaps** - Checks that the current domain is `maps.google.com` and then redirects using
the `comgooglemaps://` protocol scheme for the Google Maps app on iOS. See [Google Maps URL Scheme]
for details.
* **OpenIniOctocat** - Checks that the current domain is `github.com` and then redirects using the
`ioc://` URL protocol scheme for iOctocat. See the subheading [How to open GitHub URLs in iOctocat?][iOctocat URL Scheme]
for details.
* **SearchIn1Password** - Parses the current browser URL and then redirects using `onepassword4://search/`
with the current domain appended to trigger a search for 1Password entries containing the current domain.
See the subheading [Open URLs externally...][1Password URL Scheme] for details.


## Version Notes
0.0.6: August 18, 2014 - Add OpenInBlogsy; update version

0.0.6: August 18, 2014 - Add OpenInBlogsy; update version

0.0.5: August 12, 2014 - Refactor bookmarklet to use anonymous functions to facilitate testing; add SearchIn1Password; update version

0.0.4: August 11, 2014 - Remove unneeded http/https checks & add iOS checks in bookmarklets; Add URL Scheme Notes to README; update version

0.0.3: August 10, 2014 - Refactor Gruntfile.js for efficiency & 'DRY'; add package.json keywords; add OpenIniOctocat

0.0.2: August 8, 2014 - Bookmarklets have individual version numbers that update

0.0.1: July 28, 2014 - Bookmarklets build via `grunt`, `grunt deploy` updates `README.md`, version numbers not updating

0.0.0: July 22, 2014 - Initial commit, smushing together multiple bookmarklet repos I have; doesn't build yet

## Plans/"To Do"
- [X] Get this working with 2-3 existing bookmarklets (Gmapplet, OpenIn1Password, OpenInGoodReader)
- [X] Get Travis CI integrated
- [X] Get bookmarklet to have individual version numbers
- [X] Make use of RegEx replacements or templates to streamline updating the README.md
- [ ] Use some sort of Markdown or HTML templating to automate making a gh-pages `index.html` file
- [ ] Add a "References" section to README.md with links to the underlying URL schemes used
- [ ] Use `x-callback:` URLs where possible


<!--- JavaScript links -->
[OpenIn1Password]: javascript:function%20a()%7Breturn/iP(.d%7Chone)/.test(navigator.userAgent)?location.href='op'+location.href:void%200%7Da();void'1.1.0' "OpenIn1Password"
[OpenInBlogsy]: javascript:function%20a()%7Breturn/iP(.d%7Chone)/.test(navigator.userAgent)?location.href='blogsy:'+location.href:void%200%7Da();void'1.0.0' "OpenInBlogsy"
[OpenInGoodReader]: javascript:function%20a()%7Breturn/iP(.d%7Chone)/.test(navigator.userAgent)&&/%5C.pdf($%7C%5C?)/.test(location.href)?location.href='gr'+location.href:void%200%7Da();void'1.1.0' "OpenInGoodReader"
[OpenInGoogleMaps]: javascript:function%20a()%7Bif('maps.google.com'==location.hostname&&/iP(.d%7Chone)/.test(navigator.userAgent))%7Bif(location.search)return%20location.href='comgooglemaps://'+location.search;if(/%20-%20Google%20Maps/.test(document.title))return%20location.href='comgooglemaps://?q='+encodeURI(document.title.replace('%20-%20Google%20Maps','').replace(/%20/g,'+'))%7D%7Da();void'1.7.1' "OpenInGoogleMaps"
[OpenIniOctocat]: javascript:function%20a()%7Breturn'github.com'===location.host&&/iP(.d%7Chone)/.test(navigator.userAgent)?location.href=location.href.replace('https:','ioc:'):void%200%7Da();void'1.1.0' "OpenIniOctocat"
[SearchIn1Password]: javascript:function%20a()%7Bvar%20a=location.hostname.split('.');return%20location.href='onepassword4://search/'+a.slice(a.length-2).join('.')%7Da();void'1.0.0' "SearchIn1Password"
<!--- Setup links -->
[Setup OpenIn1Password]: http://mmind.me/_?javascript:function%20a()%7Breturn/iP(.d%7Chone)/.test(navigator.userAgent)?location.href='op'+location.href:void%200%7Da();void'1.1.0' "Setup OpenIn1Password"
[Setup OpenInBlogsy]: http://mmind.me/_?javascript:function%20a()%7Breturn/iP(.d%7Chone)/.test(navigator.userAgent)?location.href='blogsy:'+location.href:void%200%7Da();void'1.0.0' "Setup OpenInBlogsy"
[Setup OpenInGoodReader]: http://mmind.me/_?javascript:function%20a()%7Breturn/iP(.d%7Chone)/.test(navigator.userAgent)&&/%5C.pdf($%7C%5C?)/.test(location.href)?location.href='gr'+location.href:void%200%7Da();void'1.1.0' "Setup OpenInGoodReader"
[Setup OpenInGoogleMaps]: http://mmind.me/_?javascript:function%20a()%7Bif('maps.google.com'==location.hostname&&/iP(.d%7Chone)/.test(navigator.userAgent))%7Bif(location.search)return%20location.href='comgooglemaps://'+location.search;if(/%20-%20Google%20Maps/.test(document.title))return%20location.href='comgooglemaps://?q='+encodeURI(document.title.replace('%20-%20Google%20Maps','').replace(/%20/g,'+'))%7D%7Da();void'1.7.1' "Setup OpenInGoogleMaps"
[Setup OpenIniOctocat]: http://mmind.me/_?javascript:function%20a()%7Breturn'github.com'===location.host&&/iP(.d%7Chone)/.test(navigator.userAgent)?location.href=location.href.replace('https:','ioc:'):void%200%7Da();void'1.1.0' "Setup OpenIniOctocat"
[Setup SearchIn1Password]: http://mmind.me/_?javascript:function%20a()%7Bvar%20a=location.hostname.split('.');return%20location.href='onepassword4://search/'+a.slice(a.length-2).join('.')%7Da();void'1.0.0' "Setup SearchIn1Password"
<!-- Reference links -->
[nodejs]: http://nodejs.org/
[npm]: https://npmjs.org/
[grunt]: http://gruntjs.com/
[js2uri]: https://npmjs.org/package/js2uri
[OpenInlets page]: http://mobilemind.github.io/OpenInlets/
[1Password URL Scheme]: http://blog.agilebits.com/2013/01/24/developers-heres-how-to-add-a-little-1password-to-your-ios-apps/ "Agile Bits: 1Password URL Scheme"
[Blogsy URL Scheme]: http://blogsyapp.com/developers/ "Blogsy URL Scheme"
[GoodReader URL Scheme]: http://www.goodreader.com/gr-man-howto.html#ghttp "GoodReader:How do I save a file from Safari to GoodReader?"
[Google Maps URL Scheme]: https://developers.google.com/maps/documentation/ios/urlscheme "Google Developers:Google Maps URL Scheme"
[iOctocat URL Scheme]: http://ioctocat.com/faq/ "iOctocat FAQs - How to open GitHub URLs in iOctocat?"
