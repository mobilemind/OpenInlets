# OpenInlets

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Build Status](https://secure.travis-ci.org/mobilemind/OpenInlets.png?branch=master)](http://travis-ci.org/mobilemind/OpenInlets)

OpenInlets is a collection of bookmarklets to open apps from a web page-- typically from iOS Mobile
Safari to an iOS app.

__OpenIn1Password__: Open the current web page with the Webview in 1Password 4.1.x. Handy for
login/form completion, or to quickly add a new entry with login credentials.

__OpenInBlogsy__: Open the current web page using the Webview in Blogsy on iOS. Easily reblog or
quote a page.

__OpenInGoodReader__: When viewing a PDF in Mobile Safari, open/download the same PDF in
GoodReader 4.

__OpenInGoogleChrome__: Open the current web page in the Google Chrome app for iOS.

__OpenInGoogleMaps__: Open the current web page in the Google Maps application on iOS. Handy
when an app opens a Google Maps page in Mobile Safari, but you'd prefer the Google Maps _app_.
If the current URL does NOT contain an address or location, it will search in the Google Maps app
using the page title.

__OpenIniOctocat__: When viewing a Github repository in Mobile Safari, open the same repository in the
iOctocat iOS app.

__SearchIn1Password__: Open 1Password and search for entries containing the domain of the current
web page. _NOTE:_ This also works with Safari and Firefox on Mac OS X Mavericks.


## Install
### Desktop browser
Visit the [OpenInlets page] (this README.md file as a hosted HTML page).

Drag a __JavaScript__ __bookmark__ to the bookmark bar or select it and add bookmark/favorite. Optionally
edit or rename the bookmark/favorite. iTunes or iCloud will sync the bookmarklet to iOS.

#### JavaScript bookmarks
+ [OpenIn1Password] v1.1.0 `javascript:function%20a()%7Breturn/iP(.d%7Chone)/.test(navigator.userAgent)?location.href='op'+location.href:void%200%7Da();void'1.1.0'`
+ [OpenInBlogsy] v1.0.0 `javascript:function%20a()%7Breturn/iP(.d%7Chone)/.test(navigator.userAgent)?location.href='blogsy:'+location.href:void%200%7Da();void'1.0.0'`
+ [OpenInGoodReader] v1.1.0 `javascript:function%20a()%7Breturn/iP(.d%7Chone)/.test(navigator.userAgent)&&/%5C.pdf($%7C%5C?)/.test(location.href)?location.href='gr'+location.href:void%200%7Da();void'1.1.0'`
+ [OpenInGoogleChrome] v1.0.0 `javascript:function%20a()%7Breturn/iP(.d%7Chone)/.test(navigator.userAgent)?location.href=location.href.replace(/%5Ehttp/,'googlechrome'):void%200%7Da();void'1.0.0'`
+ [OpenInGoogleMaps] v1.7.1 `javascript:function%20a()%7Bif('maps.google.com'==location.hostname&&/iP(.d%7Chone)/.test(navigator.userAgent))%7Bif(location.search)return%20location.href='comgooglemaps://'+location.search;if(/%20-%20Google%20Maps/.test(document.title))return%20location.href='comgooglemaps://?q='+encodeURI(document.title.replace('%20-%20Google%20Maps','').replace(/%20/g,'+'))%7D%7Da();void'1.7.1'`
+ [OpenIniOctocat] v1.1.0 `javascript:function%20a()%7Breturn'github.com'===location.host&&/iP(.d%7Chone)/.test(navigator.userAgent)?location.href=location.href.replace('https:','ioc:'):void%200%7Da();void'1.1.0'`
+ [SearchIn1Password] v1.0.0 `javascript:function%20a()%7Bvar%20a=location.hostname.split('.');return%20location.href='onepassword4://search/'+a.slice(a.length-2).join('.')%7Da();void'1.0.0'`

_NOTE:_ The `javascript:` bookmarks above will __not__ work from the Github repository page, due to
Github security precautions.

### Mobile browser
Visit the [OpenInlets page] and tap a link below. Follow the instructions on the resulting page to turn
the followed bookmark into a JavaScript bookmarklet.

+ **Mobile Safari setup link** -- [Setup OpenIn1Password] v1.1.0
+ **Mobile Safari setup link** -- [Setup OpenInBlogsy] v1.0.0
+ **Mobile Safari setup link** -- [Setup OpenInGoodReader] v1.1.0
+ **Mobile Safari setup link** -- [Setup OpenInGoogleChrome] v1.0.0
+ **Mobile Safari setup link** -- [Setup OpenInGoogleMaps] v1.7.1
+ **Mobile Safari setup link** -- [Setup OpenIniOctocat] v1.1.0
+ **Mobile Safari setup link** -- [Setup SearchIn1Password] v1.0.0

## Use
While viewing web page in Mobile Safari, activate the corresponding bookmarklet (tap it on the
bookmark bar or use the Bookmarks/Favorites menu). If installed the corresponding iOS app will open to
the same document or location.

## Requirements
* Mobile Safari 7.x or higher
* Corresponding iOS app

#### Notes
1. Bookmarklets do _not_ work in Google Chrome, Ghostery and DuckDuckGo iOS apps due to
restrictions of those apps on `javascript:` URL bookmarks.
2. SearchIn1Password _does_ work on Macintosh OS X Mavericks with Safari or Firefox.

## License
MIT License - <http://www.opensource.org/licenses/mit-license.php>

## Source Code Notes

The `src/` directory has human readable JavaScript, written in a way to facilitate testing. The `web\`
directory has "uglified" code that has a `javascript:` URL protocol prefix and should be shorter.
The `void'x.y.z'` at the end the bookmarklet URL code serves two purposes.

1. It prevents the browser from navigating to another page when the bookmark is used.
2. It is a convenient place to embed a string indicating the `semver` version of the bookmark.

## Build
Clone the repository. If `node` is not installed go get it from [nodejs.org][nodejs]. Finally change to the
`OpenInlets` directory and install the dependencies into the project before invoking `grunt`.
```bash
git clone https://github.com/mobilemind/OpenInlets.git
cd OpenInlets
npm install
grunt
```

Note that [nodejs] and [npm] are required. The lines above will install [grunt], [js2uri], and other
dependencies defined in `package.json`. You can update dependencies using `npm update` at any time
or just invoke `grunt` to re-build OpenInlets `web/` directory.

## URL Scheme Notes
Each bookmarklet does some rudimentary check and then redirects to an app using a URL protocol
scheme.

* **OpenIn1Password** - Uses the `ophttp://` or `ophttps://` URL protocol scheme for 1Password.
See the subheading [Open URLs externally...][1Password URL Scheme] for details.
* **OpenInBlogsy** - Uses the `blogsy:` URL protocol scheme for Blogsy. See [Blogsy URL Scheme].
* **OpenInGoodReader** - Uses the `grhttp://` or `grhttps://` URL protocol scheme for
GoodReader. See [GoodReader URL Scheme].
* **OpenInGoogleChrome** - Uses the `googlechrome://` or `googlechromes://` scheme for the
Google Chrome app on iOS. See [Google Chrome URL Scheme] for details.
* **OpenInGoogleMaps** - Uses the `comgooglemaps://` protocol scheme for the Google Maps app
on iOS. See [Google Maps URL Scheme] for details.
* **OpenIniOctocat** - Uses the `ioc://` URL protocol scheme for iOctocat. See the subheading
[How to open GitHub URLs in iOctocat?][iOctocat URL Scheme] for details.
* **SearchIn1Password** - Uses `onepassword4://search/` with the current domain appended to
trigger a 1Password search. See the subheading [Open URLs externally...][1Password URL Scheme] for details.


## Version Notes
0.0.12: April 4, 2015 -  work with `grunt-cli` > 0.1.0, use `grunt-contrib-uglify` 0.8.x

0.0.11: February 13, 2015 -  work with `node` engine 0.10.x - 0.12.x

0.0.10: January 22, 2015 - update to `grunt-contrib-jshint` 0.11.x; add some stricter checks

0.0.9: September 18, 2014 - Update to uglify 0.6.0; specify uglify maxLineLen option; update version

0.0.8: August 19, 2014 - Add OpenInGoogleChrome; update version

0.0.7: August 18, 2014 - Enhance OpenInGoogleMaps; update version

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
[OpenInGoogleChrome]: javascript:function%20a()%7Breturn/iP(.d%7Chone)/.test(navigator.userAgent)?location.href=location.href.replace(/%5Ehttp/,'googlechrome'):void%200%7Da();void'1.0.0' "OpenInGoogleChrome"
[OpenInGoogleMaps]: javascript:function%20a()%7Bif('maps.google.com'==location.hostname&&/iP(.d%7Chone)/.test(navigator.userAgent))%7Bif(location.search)return%20location.href='comgooglemaps://'+location.search;if(/%20-%20Google%20Maps/.test(document.title))return%20location.href='comgooglemaps://?q='+encodeURI(document.title.replace('%20-%20Google%20Maps','').replace(/%20/g,'+'))%7D%7Da();void'1.7.1' "OpenInGoogleMaps"
[OpenIniOctocat]: javascript:function%20a()%7Breturn'github.com'===location.host&&/iP(.d%7Chone)/.test(navigator.userAgent)?location.href=location.href.replace('https:','ioc:'):void%200%7Da();void'1.1.0' "OpenIniOctocat"
[SearchIn1Password]: javascript:function%20a()%7Bvar%20a=location.hostname.split('.');return%20location.href='onepassword4://search/'+a.slice(a.length-2).join('.')%7Da();void'1.0.0' "SearchIn1Password"
<!--- Setup links -->
[Setup OpenIn1Password]: http://mmind.me/_?javascript:function%20a()%7Breturn/iP(.d%7Chone)/.test(navigator.userAgent)?location.href='op'+location.href:void%200%7Da();void'1.1.0' "Setup OpenIn1Password"
[Setup OpenInBlogsy]: http://mmind.me/_?javascript:function%20a()%7Breturn/iP(.d%7Chone)/.test(navigator.userAgent)?location.href='blogsy:'+location.href:void%200%7Da();void'1.0.0' "Setup OpenInBlogsy"
[Setup OpenInGoodReader]: http://mmind.me/_?javascript:function%20a()%7Breturn/iP(.d%7Chone)/.test(navigator.userAgent)&&/%5C.pdf($%7C%5C?)/.test(location.href)?location.href='gr'+location.href:void%200%7Da();void'1.1.0' "Setup OpenInGoodReader"
[Setup OpenInGoogleChrome]: http://mmind.me/_?javascript:function%20a()%7Breturn/iP(.d%7Chone)/.test(navigator.userAgent)?location.href=location.href.replace(/%5Ehttp/,'googlechrome'):void%200%7Da();void'1.0.0' "Setup OpenInGoogleChrome"
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
[Google Chrome URL Scheme]: https://developer.chrome.com/multidevice/ios/links/ "Opening links in Chrome for iOS"
[Google Maps URL Scheme]: https://developers.google.com/maps/documentation/ios/urlscheme "Google Developers:Google Maps URL Scheme"
[iOctocat URL Scheme]: http://ioctocat.com/faq/ "iOctocat FAQs - How to open GitHub URLs in iOctocat?"
