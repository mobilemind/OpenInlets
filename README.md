# OpenInlets

OpenInlets is a collection of bookmarklets to open apps from a web page--
typically from iOS Mobile Safari to an iOS app.

[![Built with Grunt][built-with-grunt-img]][built-with-grunt-url] [![Build Status][build-image]][build-url]

[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devDep-image]][devDep-url]

[![Codacy Badge][Codacy-image]][Codacy-dash]

__IsItAws__: Check the current page hostname to determine if runs on AWS.

__OpenIn1Password__: Open the current web page with the Webview in 1Password
4.1+. Handy for login/form completion, or to quickly add a new entry with
login credentials.

__OpenInBlogsy__: Open the current web page using the Webview in Blogsy on
iOS. Easily reblog or quote a page.

__OpenInFirefox__: Open the current web page in the Firefox app for iOS.

__OpenInGoodReader__: When viewing a PDF in Mobile Safari, open/download the
same PDF in GoodReader 4.

__OpenInGoogleChrome__: Open the current web page in the Google Chrome app for
iOS.

__OpenInGoogleMaps__: Open the current web page in the Google Maps application
on iOS. Handy when an app opens a Google Maps page in Mobile Safari, but you'd
prefer the Google Maps _app_. If the current URL does NOT contain an address
or location, it will search in the Google Maps app using the page title.

__OpenIniOctocat__: When viewing a Github repository in Mobile Safari, open
the same repository in the iOctocat iOS app.

__OpenInWorkingCopy__: When viewing a BitBucket _or_ Github repository in
Mobile Safari, show the same repo in the Working Copy iOS app (cloning the
repo locally if necessary).

__SearchIn1Password__: Open 1Password and search for entries containing the
domain of the current web page. _NOTE:_ This also works with Safari and
Firefox on Mac OS X Mavericks (and macOS Sierra).

## Install

### Desktop browser

Visit the [OpenInlets page] (this README.md file as a hosted HTML page).

Drag a __JavaScript__ __bookmark__ to the bookmark bar or select it and add
bookmark/favorite. Optionally edit or rename the bookmark/favorite. iTunes or
iCloud will sync the bookmarklet to iOS.

#### JavaScript bookmarks

+ [IsItAws] v1.2.0 `javascript:location.href='https://isitonaws.com/discover?name='+location.hostname;void'1.2.0'`
+ [OpenIn1Password] v1.2.0 `javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent))return%20location.href='op'+location.href%7D)();void'1.2.0'`
+ [OpenInBlogsy] v1.1.0 `javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent))return%20location.href='blogsy:'+location.href%7D)();void'1.1.0'`
+ [OpenInCodeBucket] v1.0.0 `javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent)&&'bitbucket.org'===location.host)return%20location.href='codebucket://'+location.href.split('/').slice(2,5).join('/')%7D)();void'1.0.0'`
+ [OpenInCodeHub] v1.0.0 `javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent)&&'github.com'===location.host)return%20location.href='codehub://'+location.href.split('/').slice(2,5).join('/')%7D)();void'1.0.0'`
+ [OpenInFirefox] v1.1.0 `javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent))return%20location.href='firefox://open-url?url='+location.href%7D)();void'1.1.0'`
+ [OpenInGoodReader] v1.2.0 `javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent)&&/%5C.pdf($%7C%5C?)/.test(location.href))return%20location.href='gr'+location.href%7D)();void'1.2.0'`
+ [OpenInGoogleChrome] v1.1.0 `javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent))return%20location.href=location.href.replace(/%5Ehttp/,'googlechrome')%7D)();void'1.1.0'`
+ [OpenInGoogleMaps] v1.8.0 `javascript:(function()%7Bif('maps.google.com'===location.hostname&&/iP(.d%7Chone)/.test(navigator.userAgent))%7Bif(location.search)return%20location.href='comgooglemaps://'+location.search;if(/%20-%20Google%20Maps/.test(document.title))return%20location.href='comgooglemaps://?q='+encodeURI(document.title.replace('%20-%20Google%20Maps','').replace(/%20/g,'+'))%7D%7D)();void'1.8.0'`
+ [OpenIniOctocat] v1.3.0 `javascript:(function()%7Bif(/(gist%5C.)?github%5C.com/.test(location.host)&&/iP(.d%7Chone)/.test(navigator.userAgent))return%20location.href=location.href.replace('https:','ioc:')%7D)();void'1.3.0'`
+ [OpenInWorkingCopy] v1.1.0 `javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent)&&('bitbucket.org'===location.host%7C%7C'github.com'===location.host))return%20location.href='working-copy://show?remote='+location.href.split('/').slice(0,5).join('/')+'.git'%7D)();void'1.1.0'`
+ [SearchIn1Password] v1.3.0 `javascript:location.href='onepassword4://search/'+location.host.split('.').slice(location.host.split('.').length-2).join('.');void'1.3.0'`

_NOTE:_ The `javascript:` bookmarks above will __not__ work from the Github
repository page, due to Github security precautions.

### Mobile browser

Visit the [OpenInlets page] and tap a link below. Follow the instructions on
the resulting page to turn the followed bookmark into a JavaScript
bookmarklet.

+ **Mobile Safari setup link** -- [Setup IsItAws] v1.2.0
+ **Mobile Safari setup link** -- [Setup OpenIn1Password] v1.2.0
+ **Mobile Safari setup link** -- [Setup OpenInBlogsy] v1.1.0
+ **Mobile Safari setup link** -- [Setup OpenInCodeBucket] v1.0.0
+ **Mobile Safari setup link** -- [Setup OpenInCodeHub] v1.0.0
+ **Mobile Safari setup link** -- [Setup OpenInFirefox] v1.1.0
+ **Mobile Safari setup link** -- [Setup OpenInGoodReader] v1.2.0
+ **Mobile Safari setup link** -- [Setup OpenInGoogleChrome] v1.1.0
+ **Mobile Safari setup link** -- [Setup OpenInGoogleMaps] v1.8.0
+ **Mobile Safari setup link** -- [Setup OpenIniOctocat] v1.3.0
+ **Mobile Safari setup link** -- [Setup OpenInWorkingCopy] v1.1.0
+ **Mobile Safari setup link** -- [Setup SearchIn1Password] v1.3.0

## Use

While viewing web page in Mobile Safari, activate the corresponding
bookmarklet (tap it on the bookmark bar or use the Bookmarks/Favorites menu).
If installed the corresponding iOS app will open to the same document or
location.

## Requirements

+ Mobile Safari 7.x or higher (v1.3.0 tested with iOS 10)
+ Corresponding iOS app (_except_ for "IsItAws" bookmarklet)

### Notes

1. Bookmarklets do _not_ work in Google Chrome, Ghostery and DuckDuckGo iOS
   apps due to restrictions of those apps on `javascript:` URL bookmarks.
2. SearchIn1Password _does_ work on Macintosh OS X Mavericks with Safari or
   Firefox.

## License

MIT License - <http://opensource.org/licenses/mit-license.php>

## Source Code Notes

The `src/` directory has human readable JavaScript, written in a way to
facilitate testing. The `web/` directory has "uglified" code that has a
`javascript:` URL protocol prefix and should be shorter. The `void'x.y.z'` at
the end the bookmarklet URL code serves two purposes.

1. It prevents the browser from navigating to another page when the bookmark
   is used.
2. It is a convenient place to embed a string indicating the `semver` version
   of the bookmark.

## Build

Clone the repository. If `node` is not installed go get it from
[nodejs.org][nodejs]. Finally change to the `OpenInlets` directory and install
the dependencies into the project before invoking `grunt`.

```bash
git clone https://github.com/mobilemind/OpenInlets.git
cd OpenInlets
npm install
grunt
```

Note that [nodejs] and [npm] are required. The lines above will install
[grunt], [js2uri], and other dependencies defined in `package.json`. You can
update dependencies using `npm update` at any time or just invoke `grunt` to
re-build OpenInlets `web/` directory.

## URL Scheme Notes (References)

Each bookmarklet does some rudimentary check and then redirects to an app
using a URL protocol scheme.

+ **IsItAws** - Does _not_ use a URL protocol scheme. Rather it uses the
  lambda [IsItOnAWS.com] functions created by Tim Bray. For details, see
  [Is it on AWS? Domain Identification Using AWS Lambda][IsItOnAWS Blog Post].
+ **OpenIn1Password** - Uses the `ophttp://` or `ophttps://` URL protocol
  scheme for 1Password. See the subheading
  [Open URLs externally...][1Password URL Scheme] for details.
+ **OpenInBlogsy** - Uses the `blogsy:` URL protocol scheme for Blogsy. See
  [Blogsy URL Scheme][Blogsy URL Scheme].
+ **OpenInCodeBucket** _and_ **OpenInCodeBucket**- Uses the `codebucket://`
and `codehub://` URL protocol schemes, respectively. See
  [CodeHub URL Scheme][CodeHub URL Scheme]. Note that the source code seems to
  be the only documentation for the scheme; look for `codehub://`.
+ **OpenInFirefox** - Uses the `firefox://open-url?url=` scheme for the
  Firefox app on iOS.
+ **OpenInGoodReader** - Uses the `grhttp://` or `grhttps://` URL protocol
  scheme for GoodReader. See [GoodReader URL Scheme][GoodReader URL Scheme].
+ **OpenInGoogleChrome** - Uses the `googlechrome://` or `googlechromes://`
  scheme for the Google Chrome app on iOS. Formerly documented at
  `https://developer.chrome.com/multidevice/ios/links`.
+ **OpenInGoogleMaps** - Uses the `comgooglemaps://` protocol scheme for the
  Google Maps app on iOS. See [Google Maps URL Scheme][Google Maps URL Scheme]
  for details.
+ **OpenIniOctocat** - Uses the `ioc://` URL protocol scheme for iOctocat. See
  the subheading [How to open GitHub URLs in iOctocat][iOctocat URL Scheme]
  for details.
+ **OpenInWorkingCopy** - Uses the `working-copy://show?remote=/` ("show")
  URL protocol scheme for Working Copy. See the subheading
  [URL Schemes in Working Copy][Working Copy URL Scheme] for details.
+ **SearchIn1Password** - Uses `onepassword4://search/` with the current
  domain appended to trigger a 1Password search. See the subheading
  [Open URLs externally...][1Password URL Scheme] for details.

## Version Notes

1.5.2  Add more eslint security rules; republish w/more aggressive uglify-js
v3.0.19 that heavily optimizes `IsItAws` and `SearchIn1Password`

1.5.1  Update OpenIniOctcat to work with Github gists; cleanup eslint warnings
and uglify-js option

1.5.0  Add OpenInCodeBucket & OpenInCodeHub; bump version of OpenInWorkingCopy
and overall version

1.4.1  Added OpenInWorkingCopy and bumped overall version

1.3.1: Added OpenInFirefox and bumped version

1.3.0: Added IsItAws and bumped overall version as this is significant change

1.2.0: overall package # bumped due to significant ES6/eslint driven changes

1.1.3: use eslint instead of jshint

1.1.2: editorial updates to text files; add CodeClimate support files

1.1.1: update package.json to use- node: >6.0, grunt: >1.0,
grunt-contrib-uglify >=2.0 (reduces size of output); bump semver

1.1.0: update to LTS versions of `node`; use `grunt-contrib-...` >= 1.0.0;
bump semver

1.0.1: March 9, 2016 - update .travis.yml and package.json to use `node_js`
">= 4.4.0"  and `grunt` ">=0.4.0"

1.0.1: February 16, 2016 - update package.json to use `grunt-contrib-jshint:
">=0.11.0"` to support 1.0.0 and beyond

1.0.0: September 19, 2015 - update package.json to use `node: ">=0.12.0"`;
baseline semver to 1.0.0

0.0.15: August 2, 2015 - update build dependencies and README, no functional
changes

0.0.14: May 15, 2015 - update license info in `package.json` to use new
property and SPDX format

0.0.13: April 8, 2015 - use `grunt-contrib-uglify` 0.9.x with new options
(i.e., `screwIE8: true`)

0.0.12: April 4, 2015 -  work with `grunt-cli` > 0.1.0, use
`grunt-contrib-uglify` 0.8.x

0.0.11: February 13, 2015 -  work with `node` engine 0.10.x - 0.12.x

0.0.10: January 22, 2015 - update to `grunt-contrib-jshint` 0.11.x; add some
stricter checks

0.0.9: September 18, 2014 - Update to uglify 0.6.0; specify uglify maxLineLen
option; update version

0.0.8: August 19, 2014 - Add OpenInGoogleChrome; update version

0.0.7: August 18, 2014 - Enhance OpenInGoogleMaps; update version

0.0.6: August 18, 2014 - Add OpenInBlogsy; update version

0.0.5: August 12, 2014 - Refactor bookmarklet to use anonymous functions to
facilitate testing; add SearchIn1Password; update version

0.0.4: August 11, 2014 - Remove unneeded http/https checks & add iOS checks in
bookmarklets; Add URL Scheme Notes to README; update version

0.0.3: August 10, 2014 - Refactor Gruntfile.js for efficiency & 'DRY'; add
package.json keywords; add OpenIniOctocat

0.0.2: August 8, 2014 - Bookmarklets have individual version numbers that
update

0.0.1: July 28, 2014 - Bookmarklets build via `grunt`, `grunt deploy` updates
`README.md`, version numbers not updating

0.0.0: July 22, 2014 - Initial commit, smushing together multiple bookmarklet
repos I have; doesn't build yet

<!--- JavaScript links -->
[IsItAws]: javascript:location.href='https://isitonaws.com/discover?name='+location.hostname;void'1.2.0' "IsItAws"
[OpenIn1Password]: javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent))return%20location.href='op'+location.href%7D)();void'1.2.0' "OpenIn1Password"
[OpenInBlogsy]: javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent))return%20location.href='blogsy:'+location.href%7D)();void'1.1.0' "OpenInBlogsy"
[OpenInCodeBucket]: javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent)&&'bitbucket.org'===location.host)return%20location.href='codebucket://'+location.href.split('/').slice(2,5).join('/')%7D)();void'1.0.0' "OpenInCodeBucket"
[OpenInCodeHub]: javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent)&&'github.com'===location.host)return%20location.href='codehub://'+location.href.split('/').slice(2,5).join('/')%7D)();void'1.0.0' "OpenInCodeHub"
[OpenInFirefox]: javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent))return%20location.href='firefox://open-url?url='+location.href%7D)();void'1.1.0' "OpenInFirefox"
[OpenInGoodReader]: javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent)&&/%5C.pdf($%7C%5C?)/.test(location.href))return%20location.href='gr'+location.href%7D)();void'1.2.0' "OpenInGoodReader"
[OpenInGoogleChrome]: javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent))return%20location.href=location.href.replace(/%5Ehttp/,'googlechrome')%7D)();void'1.1.0' "OpenInGoogleChrome"
[OpenInGoogleMaps]: javascript:(function()%7Bif('maps.google.com'===location.hostname&&/iP(.d%7Chone)/.test(navigator.userAgent))%7Bif(location.search)return%20location.href='comgooglemaps://'+location.search;if(/%20-%20Google%20Maps/.test(document.title))return%20location.href='comgooglemaps://?q='+encodeURI(document.title.replace('%20-%20Google%20Maps','').replace(/%20/g,'+'))%7D%7D)();void'1.8.0' "OpenInGoogleMaps"
[OpenIniOctocat]: javascript:(function()%7Bif(/(gist%5C.)?github%5C.com/.test(location.host)&&/iP(.d%7Chone)/.test(navigator.userAgent))return%20location.href=location.href.replace('https:','ioc:')%7D)();void'1.3.0' "OpenIniOctocat"
[OpenInWorkingCopy]: javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent)&&('bitbucket.org'===location.host%7C%7C'github.com'===location.host))return%20location.href='working-copy://show?remote='+location.href.split('/').slice(0,5).join('/')+'.git'%7D)();void'1.1.0' "OpenInWorkingCopy"
[SearchIn1Password]: javascript:location.href='onepassword4://search/'+location.host.split('.').slice(location.host.split('.').length-2).join('.');void'1.3.0' "SearchIn1Password"
<!--- Setup links -->
[Setup IsItAws]: http://mmind.me/_?javascript:location.href='https://isitonaws.com/discover?name='+location.hostname;void'1.2.0' "Setup IsItAws"
[Setup OpenIn1Password]: http://mmind.me/_?javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent))return%20location.href='op'+location.href%7D)();void'1.2.0' "Setup OpenIn1Password"
[Setup OpenInBlogsy]: http://mmind.me/_?javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent))return%20location.href='blogsy:'+location.href%7D)();void'1.1.0' "Setup OpenInBlogsy"
[Setup OpenInCodeBucket]: http://mmind.me/_?javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent)&&'bitbucket.org'===location.host)return%20location.href='codebucket://'+location.href.split('/').slice(2,5).join('/')%7D)();void'1.0.0' "Setup OpenInCodeBucket"
[Setup OpenInCodeHub]: http://mmind.me/_?javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent)&&'github.com'===location.host)return%20location.href='codehub://'+location.href.split('/').slice(2,5).join('/')%7D)();void'1.0.0' "Setup OpenInCodeHub"
[Setup OpenInFirefox]: http://mmind.me/_?javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent))return%20location.href='firefox://open-url?url='+location.href%7D)();void'1.1.0' "Setup OpenInFirefox"
[Setup OpenInGoodReader]: http://mmind.me/_?javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent)&&/%5C.pdf($%7C%5C?)/.test(location.href))return%20location.href='gr'+location.href%7D)();void'1.2.0' "Setup OpenInGoodReader"
[Setup OpenInGoogleChrome]: http://mmind.me/_?javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent))return%20location.href=location.href.replace(/%5Ehttp/,'googlechrome')%7D)();void'1.1.0' "Setup OpenInGoogleChrome"
[Setup OpenInGoogleMaps]: http://mmind.me/_?javascript:(function()%7Bif('maps.google.com'===location.hostname&&/iP(.d%7Chone)/.test(navigator.userAgent))%7Bif(location.search)return%20location.href='comgooglemaps://'+location.search;if(/%20-%20Google%20Maps/.test(document.title))return%20location.href='comgooglemaps://?q='+encodeURI(document.title.replace('%20-%20Google%20Maps','').replace(/%20/g,'+'))%7D%7D)();void'1.8.0' "Setup OpenInGoogleMaps"
[Setup OpenIniOctocat]: http://mmind.me/_?javascript:(function()%7Bif(/(gist%5C.)?github%5C.com/.test(location.host)&&/iP(.d%7Chone)/.test(navigator.userAgent))return%20location.href=location.href.replace('https:','ioc:')%7D)();void'1.3.0' "Setup OpenIniOctocat"
[Setup OpenInWorkingCopy]: http://mmind.me/_?javascript:(function()%7Bif(/iP(.d%7Chone)/.test(navigator.userAgent)&&('bitbucket.org'===location.host%7C%7C'github.com'===location.host))return%20location.href='working-copy://show?remote='+location.href.split('/').slice(0,5).join('/')+'.git'%7D)();void'1.1.0' "Setup OpenInWorkingCopy"
[Setup SearchIn1Password]: http://mmind.me/_?javascript:location.href='onepassword4://search/'+location.host.split('.').slice(location.host.split('.').length-2).join('.');void'1.3.0' "Setup SearchIn1Password"
<!-- Badge links -->
[built-with-grunt-img]: https://cdn.gruntjs.com/builtwith.png
[built-with-grunt-url]: http://gruntjs.com/
[build-image]: https://secure.travis-ci.org/mobilemind/OpenInlets.svg?branch=master
[build-url]: http://travis-ci.org/mobilemind/OpenInlets
[dep-image]: https://david-dm.org/mobilemind/OpenInlets.svg
[dep-url]: https://david-dm.org/mobilemind/OpenInlets
[devDep-image]: https://img.shields.io/david/dev/mobilemind/OpenInlets.svg
[devDep-url]: https://david-dm.org/mobilemind/OpenInlets#info=devDependencies
[Codacy-image]: https://api.codacy.com/project/badge/Grade/1db800475a4744c68fe643a84a4454f4
[Codacy-dash]: https://www.codacy.com/app/mobilemind/OpenInlets

<!-- Reference links -->
[nodejs]: http://nodejs.org/
[npm]: https://npmjs.org/
[grunt]: http://gruntjs.com/
[js2uri]: https://npmjs.org/package/js2uri
[IsItOnAWS.com]: https://isitonaws.com/
[IsItOnAWS Blog Post]: https://aws.amazon.com/blogs/aws/is-it-on-aws-domain-identification-using-aws-lambda/
[OpenInlets page]: http://mobilemind.github.io/OpenInlets/
[1Password URL Scheme]: http://blog.agilebits.com/2013/01/24/developers-heres-how-to-add-a-little-1password-to-your-ios-apps/ "Agile Bits: 1Password URL Scheme"
[Blogsy URL Scheme]: http://blogsyapp.com/developers/ "Blogsy URL Scheme"
[CodeHub URL Scheme]: https://github.com/thedillonb/CodeHub/blob/master/CodeHub.iOS/AppDelegate.cs#L258-L280 "CodeHub URL Scheme"
[GoodReader URL Scheme]: http://www.goodreader.com/gr-man-howto.html#ghttp "GoodReader:How do I save a file from Safari to GoodReader?"
[Google Maps URL Scheme]: https://developers.google.com/maps/documentation/ios/urlscheme "Google Developers:Google Maps URL Scheme"
[iOctocat URL Scheme]: http://ioctocat.com/faq/ "iOctocat FAQs - How to open GitHub URLs in iOctocat?"
[Working Copy URL Scheme]: https://workingcopyapp.com/url-schemes.html "URL Schemes in Working Copy"
