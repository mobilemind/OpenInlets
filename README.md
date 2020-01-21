# OpenInlets

OpenInlets is a collection of bookmarklets to open apps from a web page--
typically from iOS Mobile Safari to an iOS app.

[![Build Status][build-image]][build-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devDep-image]][devDep-url]
[![Codacy Badge][Codacy-image]][Codacy-dash]

__IsItAws__: Check the current page host to determine if runs on AWS.
 _NOTE:_ This also works with Safari and Firefox on macOS.

__KillStickyHeaders__: Find & delete all fixed position elements of body

__OpenIn1Password__: Open the current web page with the Webview in 1Password
4.1+. Handy for login/form completion, or to quickly add a new entry with
login credentials.

__OpenInBrave__: Open the current web page in the Brave app for iOS.

__OpenInDolphin__: Open the current web page in the Dolphin app for iOS.

__OpenInFirefox__: Open the current web page in the Firefox app for iOS.

__OpenInFirefox-Focus__: Open the current web page in the Firefox Focus app
for iOS.

__OpenInFirefox-Private__: Open the current web page in private mode of the
Firefox app for iOS.

__OpenInGoodReader__: When viewing a PDF in Mobile Safari, open/download the
same PDF in GoodReader 4.

__OpenInGoogleChrome__: Open the current web page in the Google Chrome app for
iOS.

__OpenInGoogleMaps__: Open the current web page in the Google Maps application
on iOS. Handy when an app opens a Google Maps page in Mobile Safari, but you'd
prefer the Google Maps _app_. If the current URL does NOT contain an address
or location, it will search in the Google Maps app using the page title.

__OpenInOpera__: Open the current web page in the Opera app for iOS.

__OpenInTextastic__: Open the current web page in the Textastic app on iOS.
Download the server response of the current HTTP URL, save it in the root
directory of the local (Textastic) file system, and then open it in the
editor. Handy to view the source code of a web page or download a raw file.

__OpenIniOctocat__: When viewing a Github repository in Mobile Safari, open
the same repository in the iOctocat iOS app.

__OpenInWorkingCopy__: When viewing a BitBucket _or_ Github repository in
Mobile Safari, show the same repo in the Working Copy iOS app (cloning the
repo locally if necessary).

__SearchIn1Password__: Open 1Password and search for entries containing the
domain of the current web page. _NOTE:_ This also works with Safari and
Firefox on Mac OS X Mavericks (and macOS Sierra).

__UtmStrip__: Strips off the UTM query string elements of the current URL to
remove common "urchin" tracking information from youtube, etc. _NOTE:_ This
also works with Safari and Firefox on macOS.

__OpenURLParam__: Work-around for blocked navigation from certain ad or
tracking blockers. If the current URL contains a parameter in the form of
`url=...` this bookmarklet will parse the `url` parameter and navigate to that
URL.

## Install

### Desktop browser

Visit the [OpenInlets page] (this README.md file as a hosted HTML page).

Drag a __JavaScript__ __bookmark__ to the bookmark bar or select it and add
bookmark/favorite. Optionally edit or rename the bookmark/favorite. iTunes or
iCloud will sync the bookmarklet to iOS.

#### JavaScript bookmarks

+ [IsItAws] v1.3.2 ``javascript:location.href%3D'https%3A%2F%2Fisitonaws.com%2Fdiscover%3Fname%3D'%2Blocation.host%3Bvoid'1.3.2'``
+ [KillStickyHeaders] v1.2.0 ``javascript:(()%3D%3E%7Blet%20e%3Ddocument.querySelectorAll('body%20%2A')%2Co%3D0%3Bfor(o%3D0%3Bo%3Ce.length%3Bo%2B%2B)'fixed'%3D%3D%3DgetComputedStyle(e%5Bo%5D).position%26%26e%5Bo%5D.parentNode.removeChild(e%5Bo%5D)%7D)()%3Bvoid'1.2.0'``
+ [OpenIn1Password] v1.5.1 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3D'op'%2Blocation.href%3Bvoid'1.5.1'``
+ [OpenInBrave] v1.0.1 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3D'brave%3A%2F%2Fopen-url%3Furl%3D'%2BencodeURIComponent(location.href)%3Bvoid'1.0.1'``
+ [OpenInCodeBucket] v1.3.1 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26'bitbucket.org'%3D%3D%3Dlocation.host)location.href%3D'codebucket%3A%2F%2F'%2Blocation.href.split('%2F').slice(2%2C5).join('%2F')%3Bvoid'1.3.1'``
+ [OpenInCodeHub] v1.3.1 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26'github.com'%3D%3D%3Dlocation.host)location.href%3D'codehub%3A%2F%2F'%2Blocation.href.split('%2F').slice(2%2C5).join('%2F')%3Bvoid'1.3.1'``
+ [OpenInDolphin] v1.0.0 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3Dlocation.href.replace(%2F%5Ehttps%3F%2F%2C'dolphin')%3Bvoid'1.0.0'``
+ [OpenInFirefox] v1.5.0 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3D'firefox%3A%2F%2Fopen-url%3Furl%3D'%2BencodeURIComponent(location.href)%3Bvoid'1.5.0'``
+ [OpenInFirefox-Focus] v1.0.0 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3D'firefox-focus%3A%2F%2Fopen-url%3Furl%3D'%2BencodeURIComponent(location.href)%2B'%26private%3Dtrue'%3Bvoid'1.0.0'``
+ [OpenInFirefox-Private] v1.0.0 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3D'firefox%3A%2F%2Fopen-url%3Furl%3D'%2BencodeURIComponent(location.href)%2B'%26private%3Dtrue'%3Bvoid'1.0.0'``
+ [OpenInGoodReader] v1.5.1 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26%2F%5C.pdf(%24%7C%5C%3F)%2F.test(location.href))location.href%3D'gr'%2Blocation.href%3Bvoid'1.5.1'``
+ [OpenInGoogleChrome] v1.4.0 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3Dlocation.href.replace(%2F%5Ehttp%2F%2C'googlechrome')%3Bvoid'1.4.0'``
+ [OpenInGoogleMaps] v2.2.0 ``javascript:if(%2F%5C.google%5C.com%2F.test(location.host)%26%26%2FiP(.d%7Chone)%2F.test(navigator.userAgent))%7Bif(location.search)return%20location.href%3D'comgooglemaps%3A%2F%2F'%2Blocation.search%3Bif(%2F%20-%20Google%20Maps%2F.test(document.title))location.href%3D'comgooglemaps%3A%2F%2F%3Fq%3D'%2BencodeURI(document.title.replace('%20-%20Google%20Maps'%2C'').replace(%2F%20%2Fg%2C'%2B'))%7Dvoid'2.2.0'``
+ [OpenInOpera] v1.0.0 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3D'opera%3A%2F%2Fopen-url%3Furl%3D'%2BencodeURIComponent(location.href)%3Bvoid'1.0.0'``
+ [OpenInTextastic] v1.0.0 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3Dlocation.href.replace(%2F%5Ehttps%3F%2F%2C'textastic')%3Bvoid'1.0.0'``
+ [OpenIniOctocat] v1.6.0 ``javascript:if(%2F(gist%5C.)%3Fgithub%5C.com%2F.test(location.host)%26%26%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3Dlocation.href.replace('https%3A'%2C'ioc%3A')%3Bvoid'1.6.0'``
+ [OpenInWorkingCopy] v1.5.0 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26('bitbucket.org'%3D%3D%3Dlocation.host%7C%7C'github.com'%3D%3D%3Dlocation.host))location.href%3D'working-copy%3A%2F%2Fshow%3Fremote%3D'%2BencodeURIComponent(location.href.split('%2F').slice(0%2C5).join('%2F'))%2B'.git'%3Bvoid'1.5.0'``
+ [OpenURLParam] v1.0.0 ``javascript:const%20e%3Dlocation.search.search('url%3D')%3Bif(e%3E-1)%7Blet%20o%3Dlocation.search.substr(4%2Be)%3Bconst%20c%3Do.indexOf('%26')%3Bif(c%3E-1%26%26(o%3Do.substr(0%2Cc))%2C5%3Co.length)location.replace(decodeURIComponent(o))%7Dvoid'1.0.0'``
+ [SearchIn1Password] v1.4.2 ``javascript:location.href%3D'onepassword4%3A%2F%2Fsearch%2F'%2Blocation.host.split('.').slice(location.host.split('.').length-2).join('.')%3Bvoid'1.4.2'``
+ [UtmStrip] v1.6.1 ``javascript:(()%3D%3E%7Bconst%20e%3Dlocation.search%3Bif(e.length%3C3)return%3Blet%20i%3De%3Bconst%20c%3Dlocation.host%3Bc.indexOf('amazon.com')%3E-1%26%26(i%3D(i%3D(i%3Di.replace(%2F(%5B%3F%26%5D)(_encoding%7Cie%7Cpsc%7Cref_%7Ctag)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241')).replace(%2F(%5B%3F%26%5D)p%5Bdf%5D_rd_.%2A%3F%3D%5B%5E%26%5D%2B%2Fgi%2C'%241')).replace(%2F(%5B%3F%26%5D)ascsubtag%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci.indexOf('fb_')%3E-1%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)fb_(action_ids%7Caction_types%7Cref%7Csource)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci.indexOf('action_')%3E-1%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)action_(object%7Cref%7Ctype)_map%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(i%3Di.replace(%2F(%5B%3F%26%5D)(assetType%7CelqTrack%7CoriginalReferer%7Creferrer%7Cterminal_id%7Ctrk%7CtrkInfo)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241')).indexOf('aff_')%3E-1%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)aff_(platform%7Ctrace_key)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci.toLowerCase().indexOf('id%3D')%3E-1%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)(an%7Casset%7Ccampaign%7Ce%7Cgcl%7Crecipient%7Csite)id%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(i.indexOf('ga_')%3E-1%7C%7Ci.indexOf('utm_')%3E-1)%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)(ga%7Cutm)_(campaign%7Ccid%7Ccontent%7Cdesign%7Cmedium%7Cname%7Cplace%7Cpubreferrer%7Creader%7Csource%7Cswu%7Cterm%7Cuserid%7Cviz_id)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(c.indexOf('youtu')%3E-1%7C%7Cc.indexOf('googlevideo.com')%3E-1)%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)(ac%7Cannotation_id%7Capp%7Cfeature%7Cgclid%7Ckw%7Csrc_vid)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(i.indexOf('_hsenc')%3E-1%7C%7Ci.indexOf('_hsmi')%3E-1)%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)_hs(enc%7Cmi)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci.indexOf('hmb_')%3E-1%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)hmb_(campaign%7Cmedium%7Csource)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci.indexOf('cm_')%3E-1%26%26(i%3D(i%3Di.replace(%2F(%5B%3F%26%5D)cm_(mmc%7Cmmca%5Cd%2B%7Cre%7Csp)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241')).replace(%2F(%5B%3F%26%5D)manual_cm_mmc%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(i.indexOf('mc_cid')%3E-1%7C%7Ci.indexOf('mc_eid')%3E-1)%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)mc_%5Bce%5Did%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(i.indexOf('iesrc')%3E-1%7C%7Ci.indexOf('mkt_tok')%3E-1)%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)(iesrc%7Cmkt_tok)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci.indexOf('pk_')%3E-1%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)pk_(campaign%7Ccontent%7Ckwd%7Cmedium%7Csource)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C'%26'%3D%3D%3D(i%3Di.replace(%2F%26%26%2B%2Fg%2C'%26')).charAt(i.length-1)%26%26(i%3Di.substr(0%2Ci.length-1))%2C'%3F'!%3D%3Di.charAt(0)%26%26(i%3D'%3F'%2Bi)%2C0%3D%3Di.indexOf('%3F%26')%26%26(i%3D'%3F'%2Bi.substr(2))%2Ci.length%3C3%26%26(i%3D'')%2Ce!%3D%3Di%26%26history.replaceState(null%2Cnull%2Clocation.origin%2Blocation.pathname%2Bi)%7D)()%3Bvoid'1.6.1'``

_NOTE:_ The `javascript:` bookmarks above will __not__ work from the Github
repository page, due to Github security precautions.

### Mobile browser

Visit the [OpenInlets page] and tap a link below. Follow the instructions on
the resulting page to turn the followed bookmark into a JavaScript
bookmarklet.

+ **Mobile Safari setup link** -- [Setup IsItAws] v1.3.2
+ **Mobile Safari setup link** -- [Setup KillStickyHeaders] v1.2.0
+ **Mobile Safari setup link** -- [Setup OpenIn1Password] v1.5.1
+ **Mobile Safari setup link** -- [Setup OpenInBrave] v1.0.1
+ **Mobile Safari setup link** -- [Setup OpenInCodeBucket] v1.3.1
+ **Mobile Safari setup link** -- [Setup OpenInCodeHub] v1.3.1
+ **Mobile Safari setup link** -- [Setup OpenInDolphin] v1.0.0
+ **Mobile Safari setup link** -- [Setup OpenInFirefox] v1.5.0
+ **Mobile Safari setup link** -- [Setup OpenInFirefox-Focus] v1.0.0
+ **Mobile Safari setup link** -- [Setup OpenInFirefox-Private] v1.0.0
+ **Mobile Safari setup link** -- [Setup OpenInGoodReader] v1.5.1
+ **Mobile Safari setup link** -- [Setup OpenInGoogleChrome] v1.4.0
+ **Mobile Safari setup link** -- [Setup OpenInGoogleMaps] v2.2.0
+ **Mobile Safari setup link** -- [Setup OpenInOpera] v1.0.0
+ **Mobile Safari setup link** -- [Setup OpenInTextastic] v1.0.0
+ **Mobile Safari setup link** -- [Setup OpenIniOctocat] v1.6.0
+ **Mobile Safari setup link** -- [Setup OpenInWorkingCopy] v1.5.0
+ **Mobile Safari setup link** -- [Setup OpenURLParam] v1.0.0
+ **Mobile Safari setup link** -- [Setup SearchIn1Password] v1.4.2
+ **Mobile Safari setup link** -- [Setup UtmStrip] v1.6.1

## Use

While viewing web page in Mobile Safari, activate the corresponding
bookmarklet (tap it on the bookmark bar or use the Bookmarks/Favorites menu).
If installed the corresponding iOS app will open to the same document or
location.

## Requirements

+ Mobile Safari 7.x or higher (v2.2.0 tested with iOS 11)
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
+ **KillStickyHeaders** - Does _not_ use a URL protocol scheme. Removes HTML
  child elements of `<body>` that have a fixed position. See
  [Kill sticky headers][Kill sticky headers].
+ **OpenIn1Password** - Uses the `ophttp://` or `ophttps://` URL protocol
  scheme for 1Password. See the subheading
  [Open URLs externally][1Password URL Scheme] for details.
+ **OpenInBrave** - Uses the `brave://open-url?url=` scheme for the Brave app
  on iOS.
+ **OpenInCodeBucket** _and_ **OpenInCodeBucket**- Uses the `codebucket://`
  and `codehub://` URL protocol schemes, respectively. See
  [CodeHub URL Scheme][CodeHub URL Scheme]. Note that the source code seems to
  be the only documentation for the scheme; look for `codehub://`.
+ **OpenInDolphin** - Uses the `dolphin://` scheme for the Dolphin app on iOS.
+ **OpenInFirefox** _and_ **OpenInFirefox-Private** - Uses the
  `firefox://open-url?url=` scheme for the Firefox app on iOS. The "Private"
  version appends `&private=true` after the target url for private browsing.
+ **OpenInFirefox-Focus** - Uses the `firefox-focus://open-url?url=` scheme
  for the Firefox Focus app on iOS, with `&private=true` appended to the
  target url for private browsing.
+ **OpenInGoodReader** - Uses the `grhttp://` or `grhttps://` URL protocol
  scheme for GoodReader. See [GoodReader URL Scheme][GoodReader URL Scheme].
+ **OpenInGoogleChrome** - Uses the `googlechrome://` or `googlechromes://`
  scheme for the Google Chrome app on iOS. Formerly documented at
  `https://developer.chrome.com/multidevice/ios/links`.
+ **OpenInGoogleMaps** - Uses the `comgooglemaps://` protocol scheme for the
  Google Maps app on iOS. See [Google Maps URL Scheme][Google Maps URL Scheme]
  for details.
+ **OpenInOpera** - Uses the `opera://open-url?url=` scheme for the
  Opera app on iOS.
+ **OpenInTextastic** - Uses the `textastic://` protocol scheme of the
  Textastic app on iOS. For details, see
  [Textastic x-callback-url API][Textastic x-callback-url API].
+ **OpenIniOctocat** - Uses the `ioc://` URL protocol scheme for iOctocat. See
  the subheading [How to open GitHub URLs in iOctocat][iOctocat URL Scheme]
  for details.
+ **OpenInWorkingCopy** - Uses the `working-copy://show?remote=/` ("show")
  URL protocol scheme for Working Copy. See the subheading
  [URL Schemes in Working Copy][Working Copy URL Scheme] for details.
+ **OpenURLParam** - Work-around for blocked navigation from certain ad or
  tracking blockers. If the current URL contains a parameter in the form of
  `url=...` this bookmarklet will parse the `url` parameter and navigate to
  that URL.
+ **SearchIn1Password** - Uses `onepassword4://search/` with the current
  domain appended to trigger a 1Password search. See the subheading
  [Open URLs externally][1Password URL Scheme] for details.
+ **UtmStrip** -  Strips off the UTM query string elements of the current URL.
  Based on [safari-utm-stripper Bookmarklet][kiding-gist 589242021df49eb17be3].
  NOTE: UtmStrip now borrows heavily from patterns provided by [Firefox
  Extension Neat URL][Neat URL]

## Version Notes

2.5.1 `UtmStrip` now removes `ascsubtag` param from Amazon URLs; bump version

2.4.3 Create `preflight` script for build & move static checks there; bump version

2.4.2 UtmStrip updated to remove common email hash (eid) parameter

2.4.1 UtmStrip streamlined for Google Analytics & Youtube; added Matomo

2.4.0 significant changes to UtmStrip

2.3.2 adds "OpenURLParam"

2.3.1 drops "LoginESA"

2.3.0  significant updates to utmstrip; update utmstrip & overall version

2.2.5  unify/merge changes from different local repos & bump version

2.2.4  Update semver of devDependencies; use eslint-plugin-compat recommended

2.2.0  Adds "LoginESA" for WiFi login; Updates source indent to 4 spaces.

2.1.5  Adds "OpenIn.." for Firefox in Private mode and for the Firefox Focus
iOS app.

2.1.0  Adds "OpenIn.." for Brave, Dolphin, Opera, and Textastic. Use
encodeURIComponent for parameters to Firefox, Opera and WorkingCopy URLs.

2.0.0  Remove Blogsy; Enhance OpenInGoogleMaps; Prefer concatenation; Bump
version

1.9.0  Add UtmStrip as new bookmarklet; Bump version

1.8.1  restore curly brackets in bookmarklet source; improve URI encoding;
automate updates to `README.md` links/bookmarks; Bump version

1.8.0  refactor build process again to pre-optimize src and use a only mangle
approach with uglify-es; Bump version

1.7.0  use arrow-functions closures where needed & remove other closures; new
build process and encoding; Bump version

1.6.0  Add KillStickyHeaders bookmarklet; Bump version

1.5.3  Bump version so `git tag` & `package.json` match

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
[IsItAws]: javascript:location.href%3D'https%3A%2F%2Fisitonaws.com%2Fdiscover%3Fname%3D'%2Blocation.host%3Bvoid'1.3.2' "IsItAws"
[KillStickyHeaders]: javascript:(()%3D%3E%7Blet%20e%3Ddocument.querySelectorAll('body%20%2A')%2Co%3D0%3Bfor(o%3D0%3Bo%3Ce.length%3Bo%2B%2B)'fixed'%3D%3D%3DgetComputedStyle(e%5Bo%5D).position%26%26e%5Bo%5D.parentNode.removeChild(e%5Bo%5D)%7D)()%3Bvoid'1.2.0' "KillStickyHeaders"
[OpenIn1Password]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3D'op'%2Blocation.href%3Bvoid'1.5.1' "OpenIn1Password"
[OpenInBrave]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3D'brave%3A%2F%2Fopen-url%3Furl%3D'%2BencodeURIComponent(location.href)%3Bvoid'1.0.1' "OpenInBrave"
[OpenInCodeBucket]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26'bitbucket.org'%3D%3D%3Dlocation.host)location.href%3D'codebucket%3A%2F%2F'%2Blocation.href.split('%2F').slice(2%2C5).join('%2F')%3Bvoid'1.3.1' "OpenInCodeBucket"
[OpenInCodeHub]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26'github.com'%3D%3D%3Dlocation.host)location.href%3D'codehub%3A%2F%2F'%2Blocation.href.split('%2F').slice(2%2C5).join('%2F')%3Bvoid'1.3.1' "OpenInCodeHub"
[OpenInDolphin]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3Dlocation.href.replace(%2F%5Ehttps%3F%2F%2C'dolphin')%3Bvoid'1.0.0' "OpenInDolphin"
[OpenInFirefox]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3D'firefox%3A%2F%2Fopen-url%3Furl%3D'%2BencodeURIComponent(location.href)%3Bvoid'1.5.0' "OpenInFirefox"
[OpenInFirefox-Focus]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3D'firefox-focus%3A%2F%2Fopen-url%3Furl%3D'%2BencodeURIComponent(location.href)%2B'%26private%3Dtrue'%3Bvoid'1.0.0' "OpenInFirefox-Focus"
[OpenInFirefox-Private]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3D'firefox%3A%2F%2Fopen-url%3Furl%3D'%2BencodeURIComponent(location.href)%2B'%26private%3Dtrue'%3Bvoid'1.0.0' "OpenInFirefox-Private"
[OpenInGoodReader]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26%2F%5C.pdf(%24%7C%5C%3F)%2F.test(location.href))location.href%3D'gr'%2Blocation.href%3Bvoid'1.5.1' "OpenInGoodReader"
[OpenInGoogleChrome]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3Dlocation.href.replace(%2F%5Ehttp%2F%2C'googlechrome')%3Bvoid'1.4.0' "OpenInGoogleChrome"
[OpenInGoogleMaps]: javascript:if(%2F%5C.google%5C.com%2F.test(location.host)%26%26%2FiP(.d%7Chone)%2F.test(navigator.userAgent))%7Bif(location.search)return%20location.href%3D'comgooglemaps%3A%2F%2F'%2Blocation.search%3Bif(%2F%20-%20Google%20Maps%2F.test(document.title))location.href%3D'comgooglemaps%3A%2F%2F%3Fq%3D'%2BencodeURI(document.title.replace('%20-%20Google%20Maps'%2C'').replace(%2F%20%2Fg%2C'%2B'))%7Dvoid'2.2.0' "OpenInGoogleMaps"
[OpenInOpera]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3D'opera%3A%2F%2Fopen-url%3Furl%3D'%2BencodeURIComponent(location.href)%3Bvoid'1.0.0' "OpenInOpera"
[OpenInTextastic]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3Dlocation.href.replace(%2F%5Ehttps%3F%2F%2C'textastic')%3Bvoid'1.0.0' "OpenInTextastic"
[OpenIniOctocat]: javascript:if(%2F(gist%5C.)%3Fgithub%5C.com%2F.test(location.host)%26%26%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3Dlocation.href.replace('https%3A'%2C'ioc%3A')%3Bvoid'1.6.0' "OpenIniOctocat"
[OpenInWorkingCopy]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26('bitbucket.org'%3D%3D%3Dlocation.host%7C%7C'github.com'%3D%3D%3Dlocation.host))location.href%3D'working-copy%3A%2F%2Fshow%3Fremote%3D'%2BencodeURIComponent(location.href.split('%2F').slice(0%2C5).join('%2F'))%2B'.git'%3Bvoid'1.5.0' "OpenInWorkingCopy"
[OpenURLParam]: javascript:const%20e%3Dlocation.search.search('url%3D')%3Bif(e%3E-1)%7Blet%20o%3Dlocation.search.substr(4%2Be)%3Bconst%20c%3Do.indexOf('%26')%3Bif(c%3E-1%26%26(o%3Do.substr(0%2Cc))%2C5%3Co.length)location.replace(decodeURIComponent(o))%7Dvoid'1.0.0' "OpenURLParam"
[SearchIn1Password]: javascript:location.href%3D'onepassword4%3A%2F%2Fsearch%2F'%2Blocation.host.split('.').slice(location.host.split('.').length-2).join('.')%3Bvoid'1.4.2' "SearchIn1Password"
[UtmStrip]: javascript:(()%3D%3E%7Bconst%20e%3Dlocation.search%3Bif(e.length%3C3)return%3Blet%20i%3De%3Bconst%20c%3Dlocation.host%3Bc.indexOf('amazon.com')%3E-1%26%26(i%3D(i%3D(i%3Di.replace(%2F(%5B%3F%26%5D)(_encoding%7Cie%7Cpsc%7Cref_%7Ctag)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241')).replace(%2F(%5B%3F%26%5D)p%5Bdf%5D_rd_.%2A%3F%3D%5B%5E%26%5D%2B%2Fgi%2C'%241')).replace(%2F(%5B%3F%26%5D)ascsubtag%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci.indexOf('fb_')%3E-1%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)fb_(action_ids%7Caction_types%7Cref%7Csource)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci.indexOf('action_')%3E-1%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)action_(object%7Cref%7Ctype)_map%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(i%3Di.replace(%2F(%5B%3F%26%5D)(assetType%7CelqTrack%7CoriginalReferer%7Creferrer%7Cterminal_id%7Ctrk%7CtrkInfo)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241')).indexOf('aff_')%3E-1%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)aff_(platform%7Ctrace_key)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci.toLowerCase().indexOf('id%3D')%3E-1%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)(an%7Casset%7Ccampaign%7Ce%7Cgcl%7Crecipient%7Csite)id%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(i.indexOf('ga_')%3E-1%7C%7Ci.indexOf('utm_')%3E-1)%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)(ga%7Cutm)_(campaign%7Ccid%7Ccontent%7Cdesign%7Cmedium%7Cname%7Cplace%7Cpubreferrer%7Creader%7Csource%7Cswu%7Cterm%7Cuserid%7Cviz_id)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(c.indexOf('youtu')%3E-1%7C%7Cc.indexOf('googlevideo.com')%3E-1)%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)(ac%7Cannotation_id%7Capp%7Cfeature%7Cgclid%7Ckw%7Csrc_vid)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(i.indexOf('_hsenc')%3E-1%7C%7Ci.indexOf('_hsmi')%3E-1)%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)_hs(enc%7Cmi)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci.indexOf('hmb_')%3E-1%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)hmb_(campaign%7Cmedium%7Csource)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci.indexOf('cm_')%3E-1%26%26(i%3D(i%3Di.replace(%2F(%5B%3F%26%5D)cm_(mmc%7Cmmca%5Cd%2B%7Cre%7Csp)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241')).replace(%2F(%5B%3F%26%5D)manual_cm_mmc%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(i.indexOf('mc_cid')%3E-1%7C%7Ci.indexOf('mc_eid')%3E-1)%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)mc_%5Bce%5Did%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(i.indexOf('iesrc')%3E-1%7C%7Ci.indexOf('mkt_tok')%3E-1)%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)(iesrc%7Cmkt_tok)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci.indexOf('pk_')%3E-1%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)pk_(campaign%7Ccontent%7Ckwd%7Cmedium%7Csource)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C'%26'%3D%3D%3D(i%3Di.replace(%2F%26%26%2B%2Fg%2C'%26')).charAt(i.length-1)%26%26(i%3Di.substr(0%2Ci.length-1))%2C'%3F'!%3D%3Di.charAt(0)%26%26(i%3D'%3F'%2Bi)%2C0%3D%3Di.indexOf('%3F%26')%26%26(i%3D'%3F'%2Bi.substr(2))%2Ci.length%3C3%26%26(i%3D'')%2Ce!%3D%3Di%26%26history.replaceState(null%2Cnull%2Clocation.origin%2Blocation.pathname%2Bi)%7D)()%3Bvoid'1.6.1' "UtmStrip"

<!--- Setup links -->
[Setup IsItAws]: http://mmind.me/x/#javascript:location.href%3D'https%3A%2F%2Fisitonaws.com%2Fdiscover%3Fname%3D'%2Blocation.host%3Bvoid'1.3.2' "Setup IsItAws"
[Setup KillStickyHeaders]: http://mmind.me/x/#javascript:(()%3D%3E%7Blet%20e%3Ddocument.querySelectorAll('body%20%2A')%2Co%3D0%3Bfor(o%3D0%3Bo%3Ce.length%3Bo%2B%2B)'fixed'%3D%3D%3DgetComputedStyle(e%5Bo%5D).position%26%26e%5Bo%5D.parentNode.removeChild(e%5Bo%5D)%7D)()%3Bvoid'1.2.0' "Setup KillStickyHeaders"
[Setup OpenIn1Password]: http://mmind.me/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3D'op'%2Blocation.href%3Bvoid'1.5.1' "Setup OpenIn1Password"
[Setup OpenInBrave]: http://mmind.me/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3D'brave%3A%2F%2Fopen-url%3Furl%3D'%2BencodeURIComponent(location.href)%3Bvoid'1.0.1' "Setup OpenInBrave"
[Setup OpenInCodeBucket]: http://mmind.me/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26'bitbucket.org'%3D%3D%3Dlocation.host)location.href%3D'codebucket%3A%2F%2F'%2Blocation.href.split('%2F').slice(2%2C5).join('%2F')%3Bvoid'1.3.1' "Setup OpenInCodeBucket"
[Setup OpenInCodeHub]: http://mmind.me/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26'github.com'%3D%3D%3Dlocation.host)location.href%3D'codehub%3A%2F%2F'%2Blocation.href.split('%2F').slice(2%2C5).join('%2F')%3Bvoid'1.3.1' "Setup OpenInCodeHub"
[Setup OpenInDolphin]: http://mmind.me/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3Dlocation.href.replace(%2F%5Ehttps%3F%2F%2C'dolphin')%3Bvoid'1.0.0' "Setup OpenInDolphin"
[Setup OpenInFirefox]: http://mmind.me/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3D'firefox%3A%2F%2Fopen-url%3Furl%3D'%2BencodeURIComponent(location.href)%3Bvoid'1.5.0' "Setup OpenInFirefox"
[Setup OpenInFirefox-Focus]: http://mmind.me/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3D'firefox-focus%3A%2F%2Fopen-url%3Furl%3D'%2BencodeURIComponent(location.href)%2B'%26private%3Dtrue'%3Bvoid'1.0.0' "Setup OpenInFirefox-Focus"
[Setup OpenInFirefox-Private]: http://mmind.me/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3D'firefox%3A%2F%2Fopen-url%3Furl%3D'%2BencodeURIComponent(location.href)%2B'%26private%3Dtrue'%3Bvoid'1.0.0' "Setup OpenInFirefox-Private"
[Setup OpenInGoodReader]: http://mmind.me/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26%2F%5C.pdf(%24%7C%5C%3F)%2F.test(location.href))location.href%3D'gr'%2Blocation.href%3Bvoid'1.5.1' "Setup OpenInGoodReader"
[Setup OpenInGoogleChrome]: http://mmind.me/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3Dlocation.href.replace(%2F%5Ehttp%2F%2C'googlechrome')%3Bvoid'1.4.0' "Setup OpenInGoogleChrome"
[Setup OpenInGoogleMaps]: http://mmind.me/x/#javascript:if(%2F%5C.google%5C.com%2F.test(location.host)%26%26%2FiP(.d%7Chone)%2F.test(navigator.userAgent))%7Bif(location.search)return%20location.href%3D'comgooglemaps%3A%2F%2F'%2Blocation.search%3Bif(%2F%20-%20Google%20Maps%2F.test(document.title))location.href%3D'comgooglemaps%3A%2F%2F%3Fq%3D'%2BencodeURI(document.title.replace('%20-%20Google%20Maps'%2C'').replace(%2F%20%2Fg%2C'%2B'))%7Dvoid'2.2.0' "Setup OpenInGoogleMaps"
[Setup OpenInOpera]: http://mmind.me/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3D'opera%3A%2F%2Fopen-url%3Furl%3D'%2BencodeURIComponent(location.href)%3Bvoid'1.0.0' "Setup OpenInOpera"
[Setup OpenInTextastic]: http://mmind.me/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3Dlocation.href.replace(%2F%5Ehttps%3F%2F%2C'textastic')%3Bvoid'1.0.0' "Setup OpenInTextastic"
[Setup OpenIniOctocat]: http://mmind.me/x/#javascript:if(%2F(gist%5C.)%3Fgithub%5C.com%2F.test(location.host)%26%26%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href%3Dlocation.href.replace('https%3A'%2C'ioc%3A')%3Bvoid'1.6.0' "Setup OpenIniOctocat"
[Setup OpenInWorkingCopy]: http://mmind.me/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26('bitbucket.org'%3D%3D%3Dlocation.host%7C%7C'github.com'%3D%3D%3Dlocation.host))location.href%3D'working-copy%3A%2F%2Fshow%3Fremote%3D'%2BencodeURIComponent(location.href.split('%2F').slice(0%2C5).join('%2F'))%2B'.git'%3Bvoid'1.5.0' "Setup OpenInWorkingCopy"
[Setup OpenURLParam]: http://mmind.me/x/#javascript:const%20e%3Dlocation.search.search('url%3D')%3Bif(e%3E-1)%7Blet%20o%3Dlocation.search.substr(4%2Be)%3Bconst%20c%3Do.indexOf('%26')%3Bif(c%3E-1%26%26(o%3Do.substr(0%2Cc))%2C5%3Co.length)location.replace(decodeURIComponent(o))%7Dvoid'1.0.0' "Setup OpenURLParam"
[Setup SearchIn1Password]: http://mmind.me/x/#javascript:location.href%3D'onepassword4%3A%2F%2Fsearch%2F'%2Blocation.host.split('.').slice(location.host.split('.').length-2).join('.')%3Bvoid'1.4.2' "Setup SearchIn1Password"
[Setup UtmStrip]: http://mmind.me/x/#javascript:(()%3D%3E%7Bconst%20e%3Dlocation.search%3Bif(e.length%3C3)return%3Blet%20i%3De%3Bconst%20c%3Dlocation.host%3Bc.indexOf('amazon.com')%3E-1%26%26(i%3D(i%3D(i%3Di.replace(%2F(%5B%3F%26%5D)(_encoding%7Cie%7Cpsc%7Cref_%7Ctag)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241')).replace(%2F(%5B%3F%26%5D)p%5Bdf%5D_rd_.%2A%3F%3D%5B%5E%26%5D%2B%2Fgi%2C'%241')).replace(%2F(%5B%3F%26%5D)ascsubtag%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci.indexOf('fb_')%3E-1%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)fb_(action_ids%7Caction_types%7Cref%7Csource)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci.indexOf('action_')%3E-1%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)action_(object%7Cref%7Ctype)_map%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(i%3Di.replace(%2F(%5B%3F%26%5D)(assetType%7CelqTrack%7CoriginalReferer%7Creferrer%7Cterminal_id%7Ctrk%7CtrkInfo)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241')).indexOf('aff_')%3E-1%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)aff_(platform%7Ctrace_key)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci.toLowerCase().indexOf('id%3D')%3E-1%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)(an%7Casset%7Ccampaign%7Ce%7Cgcl%7Crecipient%7Csite)id%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(i.indexOf('ga_')%3E-1%7C%7Ci.indexOf('utm_')%3E-1)%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)(ga%7Cutm)_(campaign%7Ccid%7Ccontent%7Cdesign%7Cmedium%7Cname%7Cplace%7Cpubreferrer%7Creader%7Csource%7Cswu%7Cterm%7Cuserid%7Cviz_id)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(c.indexOf('youtu')%3E-1%7C%7Cc.indexOf('googlevideo.com')%3E-1)%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)(ac%7Cannotation_id%7Capp%7Cfeature%7Cgclid%7Ckw%7Csrc_vid)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(i.indexOf('_hsenc')%3E-1%7C%7Ci.indexOf('_hsmi')%3E-1)%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)_hs(enc%7Cmi)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci.indexOf('hmb_')%3E-1%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)hmb_(campaign%7Cmedium%7Csource)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci.indexOf('cm_')%3E-1%26%26(i%3D(i%3Di.replace(%2F(%5B%3F%26%5D)cm_(mmc%7Cmmca%5Cd%2B%7Cre%7Csp)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241')).replace(%2F(%5B%3F%26%5D)manual_cm_mmc%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(i.indexOf('mc_cid')%3E-1%7C%7Ci.indexOf('mc_eid')%3E-1)%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)mc_%5Bce%5Did%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(i.indexOf('iesrc')%3E-1%7C%7Ci.indexOf('mkt_tok')%3E-1)%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)(iesrc%7Cmkt_tok)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci.indexOf('pk_')%3E-1%26%26(i%3Di.replace(%2F(%5B%3F%26%5D)pk_(campaign%7Ccontent%7Ckwd%7Cmedium%7Csource)%3D%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C'%26'%3D%3D%3D(i%3Di.replace(%2F%26%26%2B%2Fg%2C'%26')).charAt(i.length-1)%26%26(i%3Di.substr(0%2Ci.length-1))%2C'%3F'!%3D%3Di.charAt(0)%26%26(i%3D'%3F'%2Bi)%2C0%3D%3Di.indexOf('%3F%26')%26%26(i%3D'%3F'%2Bi.substr(2))%2Ci.length%3C3%26%26(i%3D'')%2Ce!%3D%3Di%26%26history.replaceState(null%2Cnull%2Clocation.origin%2Blocation.pathname%2Bi)%7D)()%3Bvoid'1.6.1' "Setup UtmStrip"

<!-- Badge links -->
[build-image]: https://travis-ci.com/mobilemind/OpenInlets.svg?branch=master
[build-url]: http://travis-ci.com/mobilemind/OpenInlets
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
[kiding-gist 589242021df49eb17be3]: https://gist.github.com/kiding/589242021df49eb17be3/
"safari-utm-stripper Bookmarklet"
[IsItOnAWS.com]: https://isitonaws.com/
[IsItOnAWS Blog Post]: https://aws.amazon.com/blogs/aws/is-it-on-aws-domain-identification-using-aws-lambda/
[Kill sticky headers]: https://alisdair.mcdiarmid.org/kill-sticky-headers/
[Neat URL]: https://github.com/Smile4ever/Neat-URL/
[OpenInlets page]: http://mobilemind.github.io/OpenInlets/
[1Password URL Scheme]: http://blog.agilebits.com/2013/01/24/developers-heres-how-to-add-a-little-1password-to-your-ios-apps/
"Agile Bits: 1Password URL Scheme"
[CodeHub URL Scheme]: https://github.com/thedillonb/CodeHub/blob/master/CodeHub.iOS/AppDelegate.cs#L258-L280
"CodeHub URL Scheme"
[GoodReader URL Scheme]: http://www.goodreader.com/gr-man-howto.html#ghttp
"GoodReader:How do I save a file from Safari to GoodReader?"
[Google Maps URL Scheme]: https://developers.google.com/maps/documentation/ios/urlscheme
"Google Developers:Google Maps URL Scheme"
[iOctocat URL Scheme]: http://ioctocat.com/faq/
"iOctocat FAQs - How to open GitHub URLs in iOctocat?"
[Textastic x-callback-url API]: https://www.textasticapp.com/v4/manual/x-callback-url.html#downloadusingthetextastic:scheme
"Download using the textastic:// scheme"
[Working Copy URL Scheme]: https://workingcopyapp.com/url-schemes.html
"URL Schemes in Working Copy"
