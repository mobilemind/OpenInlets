# OpenInlets

OpenInlets is a collection of bookmarklets to open apps from a web page--
typically from iOS Mobile Safari to an iOS app.

![version](https://img.shields.io/github/package-json/v/mobilemind/OpenInlets.svg)
[![GitHub Super-Linter](https://github.com/mobilemind/OpenInlets/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![CodeQL](https://github.com/mobilemind/OpenInlets/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/mobilemind/OpenInlets/actions/workflows/codeql-analysis.yml)
[![NodeJS with Grunt](https://github.com/mobilemind/OpenInlets/actions/workflows/npm-grunt.yml/badge.svg)](https://github.com/mobilemind/OpenInlets/actions/workflows/npm-grunt.yml)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1db800475a4744c68fe643a84a4454f4)](https://www.codacy.com/app/mobilemind/OpenInlets)

__IsItAws__: Check the current page host to determine if runs on AWS.<br/>
_NOTE:_ This also works with Safari and Firefox on macOS, and most browsers on
desktop platforms.

__KillStickyHeaders__: Find & delete all fixed position elements of body

__ModifySupportUrl__: Checks if current page is an Apple Support page, and if
so it display the de-localized "evergreen" version of the URL and Markdown
links for the page. For links to a subheading, select any text of the
subheading before invoking the bookmarklet.

__OpenIn1Password__: Open 1Password using `onepassword://search` URL scheme
that may be deprecated.

__OpenInBrave__: Open the current web page in the Brave app for iOS.

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
domain of the current web page.<br/>
_NOTE:_ This may be deprecated soon, but also works with Safari and Firefox
on macOS.

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

+ [IsItAws] v1.3.2 ``javascript:location.href='https://isitonaws.com/discover?name='+location.host%3Bvoid'1.3.2'``
+ [KillStickyHeaders] v1.2.0 ``javascript:{let%20e=document.querySelectorAll('body%20%2A')%2Co=0%3Bfor(o=0%3Bo%3Ce.length%3Bo++)'fixed'===getComputedStyle(e%5Bo%5D).position%26%26e%5Bo%5D.parentNode.removeChild(e%5Bo%5D)%3Bvoid%200}void'1.2.0'``
+ [ModifySupportUrl] v1.2.1 ``javascript:var%20i=document.location%3Bif('support.apple.com'===i.host){const%20l=/(%5C/guide%5C/%5B-0-9a-z%5D+%5C/)(%5B-0-9a-z%5D+)%5C//%2Cp=RegExp('/'+navigator.language.toLowerCase()+'/'%2C'i')%2Cr=i.pathname%2Cd=window.getSelection()%2Cs=i.href%3Blet%20e=''%2Ct=document.title.replace(/%20-%20(Official%20)?Apple%20Support%24/%2C'')%2Cn=null%2Co=s%2Ca=''%3Bif(p.test(r))o=s.replace(p%2C'/')%3Belse%20if(!/-/.test(r)%26%26l.test(r)){let%20e=s.indexOf('/toc/')%3B0%3Ce?o=s.substr(0%2Ce+5):0%3C(e=s.indexOf('/welcome/'))%26%26(o=s.substr(0%2Ce+9))}else{if(null!==(n=r.match(l))%26%261%3Cn.length){const%20c=n%5B2%5D.split('-')%3Bo='https://support.apple.com'+n%5B1%5D+c.pop()+'/'}'None'!==d.type%26%260%3Cd.rangeCount%26%26((i=d.getRangeAt(0))%26%26(i=3===(i=i.startContainer).nodeType?i.parentNode:i).parentNode%26%26(a=i.parentNode.id%2C''!==(e=i.innerText)%26%26''!==a%26%26(t=e%2Co+='%23'+a))%2Cd.empty())}alert(%60Page%20title-%0A%24{document.title}%0A%0AOriginal%20URL-%0A%24{s}%0A%24{''!==e%26%26''!==a?'%5CnSelected%20Heading-%5Cn'+e+'%5Cn':''}%0AModified%20URL-%0A%24{o}%0A%0AMarkdown%20link-%0A%5B%24{t}%5D(%24{o})%60)}void%200%3Bvoid'1.2.1'``
+ [OpenIn1Password] v1.6.0 ``javascript:location.href='onepassword://search/'%3Bvoid'1.6.0'``
+ [OpenInBrave] v1.0.1 ``javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent))location.href='brave://open-url?url='+encodeURIComponent(location.href)%3Bvoid'1.0.1'``
+ [OpenInFirefox] v1.5.0 ``javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent))location.href='firefox://open-url?url='+encodeURIComponent(location.href)%3Bvoid'1.5.0'``
+ [OpenInFirefox-Focus] v1.0.0 ``javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent))location.href='firefox-focus://open-url?url='+encodeURIComponent(location.href)+'%26private=true'%3Bvoid'1.0.0'``
+ [OpenInFirefox-Private] v1.0.0 ``javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent))location.href='firefox://open-url?url='+encodeURIComponent(location.href)+'%26private=true'%3Bvoid'1.0.0'``
+ [OpenInGoodReader] v1.5.1 ``javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent)%26%26/%5C.pdf(%24%7C%5C?)/.test(location.href))location.href='gr'+location.href%3Bvoid'1.5.1'``
+ [OpenInGoogleChrome] v1.4.0 ``javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent))location.href=location.href.replace(/%5Ehttp/%2C'googlechrome')%3Bvoid'1.4.0'``
+ [OpenInGoogleMaps] v2.2.0 ``javascript:if(/%5C.google%5C.com/.test(location.host)%26%26/iP(.d%7Chone)/.test(navigator.userAgent)){if(location.search)return%20location.href='comgooglemaps://'+location.search%3Bif(/%20-%20Google%20Maps/.test(document.title))location.href='comgooglemaps://?q='+encodeURI(document.title.replace('%20-%20Google%20Maps'%2C'').replace(/%20/g%2C'+'))}void'2.2.0'``
+ [OpenInTextastic] v1.0.0 ``javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent))location.href=location.href.replace(/%5Ehttps?/%2C'textastic')%3Bvoid'1.0.0'``
+ [OpenInWorkingCopy] v1.5.0 ``javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent)%26%26('bitbucket.org'===location.host%7C%7C'github.com'===location.host))location.href='working-copy://show?remote='+encodeURIComponent(location.href.split('/').slice(0%2C5).join('/'))+'.git'%3Bvoid'1.5.0'``
+ [OpenURLParam] v1.0.0 ``javascript:var%20o=location.search.search('url=')%3Bif(-1%3Co){let%20e=location.search.substr(4+o)%3Bo=e.indexOf('%26')%3Bif(5%3C(e=-1%3Co?e.substr(0%2Co):e).length)location.replace(decodeURIComponent(e))}void'1.0.0'``
+ [SearchIn1Password] v1.5.0 ``javascript:location.href='onepassword://search/'+location.host.split('.').slice(location.host.split('.').length-2).join('.')%3Bvoid'1.5.0'``
+ [UtmStrip] v1.6.1 ``javascript:var%20i=location.search%3Bif(3%3C=i.length){let%20e=i%3Bconst%20a=location.host%3B(~(e=~(e=~(e=(e=~(e=~(e=~a.indexOf('amazon.com')?(e=(e=e.replace(/(%5B?%26%5D)(_encoding%7Cie%7Cpsc%7Cref_%7Ctag)=%5B%5E%26%5D+/gi%2C'%241')).replace(/(%5B?%26%5D)p%5Bdf%5D_rd_.%2A?=%5B%5E%26%5D+/gi%2C'%241')).replace(/(%5B?%26%5D)ascsubtag=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('fb_')?e.replace(/(%5B?%26%5D)fb_(action_ids%7Caction_types%7Cref%7Csource)=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('action_')?e.replace(/(%5B?%26%5D)action_(object%7Cref%7Ctype)_map=%5B%5E%26%5D+/gi%2C'%241'):e).replace(/(%5B?%26%5D)(assetType%7CelqTrack%7CoriginalReferer%7Creferrer%7Cterminal_id%7Ctrk%7CtrkInfo)=%5B%5E%26%5D+/gi%2C'%241')).indexOf('aff_')?e.replace(/(%5B?%26%5D)aff_(platform%7Ctrace_key)=%5B%5E%26%5D+/gi%2C'%241'):e).toLowerCase().indexOf('id=')?e.replace(/(%5B?%26%5D)(an%7Casset%7Ccampaign%7Ce%7Cgcl%7Crecipient%7Csite)id=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('ga_')%7C%7C~e.indexOf('utm_'))%26%26(e=e.replace(/(%5B?%26%5D)(ga%7Cutm)_(campaign%7Ccid%7Ccontent%7Cdesign%7Cmedium%7Cname%7Cplace%7Cpubreferrer%7Creader%7Csource%7Cswu%7Cterm%7Cuserid%7Cviz_id)=%5B%5E%26%5D+/gi%2C'%241'))%2Ci!==(e=(e=(e='?'!=((e='%26'==((e=(e=~(e=~(e=~(e=~(e=~(e=~(e=~a.indexOf('youtu')%7C%7C~a.indexOf('googlevideo.com')?e.replace(/(%5B?%26%5D)(ac%7Cannotation_id%7Capp%7Cfeature%7Cgclid%7Ckw%7Csrc_vid)=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('_hsenc')%7C%7C~e.indexOf('_hsmi')?e.replace(/(%5B?%26%5D)_hs(enc%7Cmi)=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('hmb_')?e.replace(/(%5B?%26%5D)hmb_(campaign%7Cmedium%7Csource)=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('cm_')?(e=e.replace(/(%5B?%26%5D)cm_(mmc%7Cmmca%5Cd+%7Cre%7Csp)=%5B%5E%26%5D+/gi%2C'%241')).replace(/(%5B?%26%5D)manual_cm_mmc=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('mc_cid')%7C%7C~e.indexOf('mc_eid')?e.replace(/(%5B?%26%5D)mc_%5Bce%5Did=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('iesrc')%7C%7C~e.indexOf('mkt_tok')?e.replace(/(%5B?%26%5D)(iesrc%7Cmkt_tok)=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('pk_')?e.replace(/(%5B?%26%5D)pk_(campaign%7Ccontent%7Ckwd%7Cmedium%7Csource)=%5B%5E%26%5D+/gi%2C'%241'):e).replace(/%26%26+/g%2C'%26'))%5B0%7Ce.length-1%5D%7C%7C'')?e.substr(0%2Ce.length-1):e)%5B0%5D%7C%7C'')?'?'+e:e).indexOf('?%26')?e:'?'+e.substr(2)).length%3C3?'':e)%26%26history.replaceState(null%2Cnull%2Clocation.origin+location.pathname+e)}void%200%3Bvoid'1.6.1'``

_NOTE:_ The `javascript:` bookmarks above will _not_ work from the Github
repository page, due to Github security precautions.

### Mobile browser

Tap a link below. Follow the instructions on the resulting page to turn the
followed link into a bookmark for JavaScript bookmarklet.

+ __Mobile Safari setup link__ -- [Setup IsItAws] v1.3.2
+ __Mobile Safari setup link__ -- [Setup KillStickyHeaders] v1.2.0
+ __Mobile Safari setup link__ -- [Setup ModifySupportUrl] v1.2.1
+ __Mobile Safari setup link__ -- [Setup OpenIn1Password] v1.6.0
+ __Mobile Safari setup link__ -- [Setup OpenInBrave] v1.0.1
+ __Mobile Safari setup link__ -- [Setup OpenInFirefox] v1.5.0
+ __Mobile Safari setup link__ -- [Setup OpenInFirefox-Focus] v1.0.0
+ __Mobile Safari setup link__ -- [Setup OpenInFirefox-Private] v1.0.0
+ __Mobile Safari setup link__ -- [Setup OpenInGoodReader] v1.5.1
+ __Mobile Safari setup link__ -- [Setup OpenInGoogleChrome] v1.4.0
+ __Mobile Safari setup link__ -- [Setup OpenInGoogleMaps] v2.2.0
+ __Mobile Safari setup link__ -- [Setup OpenInTextastic] v1.0.0
+ __Mobile Safari setup link__ -- [Setup OpenInWorkingCopy] v1.5.0
+ __Mobile Safari setup link__ -- [Setup OpenURLParam] v1.0.0
+ __Mobile Safari setup link__ -- [Setup SearchIn1Password] v1.5.0
+ __Mobile Safari setup link__ -- [Setup UtmStrip] v1.6.1

## Use

While viewing web page in Mobile Safari, activate the corresponding
bookmarklet (tap it on the bookmark bar or use the Bookmarks/Favorites menu).
If installed the corresponding iOS app will open to the same document or
location.

## Requirements

+ Mobile Safari 7.x or higher (v2.2.0 tested with iOS 11)
+ Corresponding iOS app (_except_ for "IsItAws" and "ModifySupportUrl"
bookmarklet)

### Notes

1. Bookmarklets do _not_ work in Google Chrome, Ghostery and DuckDuckGo iOS
   apps due to restrictions of those apps on `javascript:` URL bookmarks.
2. SearchIn1Password _does_ work on macOS with Safari or Firefox.

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

+ __IsItAws__ - Does _not_ use a URL protocol scheme. Rather it uses the
  lambda [IsItOnAWS.com] functions created by Tim Bray. For details, see
  [Is it on AWS? Domain Identification Using AWS Lambda][IsItOnAWS Blog Post].
+ __KillStickyHeaders__ - Does _not_ use a URL protocol scheme. Removes HTML
  child elements of `<body>` that have a fixed position. See
  [Kill sticky headers][Kill sticky headers].
+ __ModifySupportUrl__ - Does _not_ use a URL protocol scheme. Displays an
alert with a transformed Apple SUpport page URL and Markdown links.
+ __OpenIn1Password__ - Uses the ~~`ophttps://`~~  `onepassword://` URL
  protocol scheme for 1Password. As of August 2022, this seems deprecated and
  may not continue to work.
+ __OpenInBrave__ - Uses the `brave://open-url?url=` scheme for the Brave app
  on iOS.
+ __OpenInFirefox__ _and_ __OpenInFirefox-Private__ - Uses the
  `firefox://open-url?url=` scheme for the Firefox app on iOS. The "Private"
  version appends `&private=true` after the target url for private browsing.
+ __OpenInFirefox-Focus__ - Uses the `firefox-focus://open-url?url=` scheme
  for the Firefox Focus app on iOS, with `&private=true` appended to the
  target url for private browsing.
+ __OpenInGoodReader__ - Uses the `grhttp://` or `grhttps://` URL protocol
  scheme for GoodReader. See [GoodReader URL Scheme][GoodReader URL Scheme].
+ __OpenInGoogleChrome__ - Uses the `googlechrome://` or `googlechromes://`
  scheme for the Google Chrome app on iOS. Formerly documented at
  `https://developer.chrome.com/multidevice/ios/links`.
+ __OpenInGoogleMaps__ - Uses the `comgooglemaps://` protocol scheme for the
  Google Maps app on iOS. See [Google Maps URL Scheme][Google Maps URL Scheme]
  for details.
+ __OpenInTextastic__ - Uses the `textastic://` protocol scheme of the
  Textastic app on iOS. For details, see
  [Textastic x-callback-url API][Textastic x-callback-url API].
+ __OpenInWorkingCopy__ - Uses the `working-copy://show?remote=/` ("show")
  URL protocol scheme for Working Copy. See the subheading
  [URL Schemes in Working Copy][Working Copy URL Scheme] for details.
+ __OpenURLParam__ - Work-around for blocked navigation from certain ad or
  tracking blockers. If the current URL contains a parameter in the form of
  `url=...` this bookmarklet will parse the `url` parameter and navigate to
  that URL.
+ __SearchIn1Password__ - Uses `onepassword://search/` with the current
  domain appended to trigger a 1Password search. As of August 2022, this seems
  deprecated and may not continue to work.
+ __UtmStrip__ -  Strips off the UTM query string elements of the current URL.
  Based on [safari-utm-stripper Bookmarklet][kiding-gist 589242021df49eb17be3].
  NOTE: UtmStrip now borrows heavily from patterns provided by [Firefox
  Extension Neat URL][Neat URL]

## Version Notes

2.7.9 Update 1Password bookmarklets and Mobile browser install links.

2.7.7 Drop OpenInDolphin, OpenInOpera

2.7.5 Drop Url2DocLink, WindowResize, WindowSize; Tighten UrlEncoding

2.7.0 Remove bookmarklets for discontinued apps (Blogsy, CodeBucket, CodeHub,
iOctocat)

2.6.1 bump to node 16.7+

2.6.0 switch to node 16

2.4.3 Create `preflight` script for build & move static checks there; bump
version

2.4.2 UtmStrip updated to remove common email hash (eid) parameter

2.4.1 UtmStrip streamlined for Google Analytics & Youtube; added Matomo

2.3.2 adds "OpenURLParam"

2.3.1 drops "LoginESA"

2.3.0  significant updates to utmstrip; update utmstrip & overall version

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

1.7.0  use arrow-functions closures where needed & remove other closures; new
build process and encoding; Bump version

1.6.0  Add KillStickyHeaders bookmarklet; Bump version

1.5.1  Update OpenIniOctcat to work with Github gists; cleanup eslint warnings
and uglify-js option

1.5.0  Add OpenInCodeBucket & OpenInCodeHub; bump version of OpenInWorkingCopy
and overall version

1.4.1  Added OpenInWorkingCopy and bumped overall version

1.3.1: Added OpenInFirefox and bumped version

1.3.0: Added IsItAws and bumped overall version as this is significant change

1.2.0: overall package # bumped due to significant ES6/eslint driven changes

1.1.1: update package.json to use- node: >6.0, grunt: >1.0,
grunt-contrib-uglify >=2.0 (reduces size of output); bump semver

1.1.0: update to LTS versions of `node`; use `grunt-contrib-...` >= 1.0.0;
bump semver

1.0.0: September 19, 2015 - update package.json to use `node: ">=0.12.0"`;
baseline semver to 1.0.0

0.0.15: August 2, 2015 - update build dependencies and README, no functional
changes

0.0.10: January 22, 2015 - update to `grunt-contrib-jshint` 0.11.x; add some
stricter checks

0.0.8: August 19, 2014 - Add OpenInGoogleChrome; update version

0.0.7: August 18, 2014 - Enhance OpenInGoogleMaps; update version

0.0.6: August 18, 2014 - Add OpenInBlogsy; update version

0.0.3: August 10, 2014 - Refactor Gruntfile.js for efficiency & 'DRY'; add
package.json keywords; add OpenIniOctocat

0.0.2: August 8, 2014 - Bookmarklets have individual version numbers that
update

0.0.1: July 28, 2014 - Bookmarklets build via `grunt`, `grunt deploy` updates
`README.md`, version numbers not updating

0.0.0: July 22, 2014 - Initial commit, smushing together multiple bookmarklet
repos I had; doesn't build yet

<!--- JavaScript links -->

[IsItAws]: javascript:location.href='https://isitonaws.com/discover?name='+location.host%3Bvoid'1.3.2' "IsItAws"
[KillStickyHeaders]: javascript:{let%20e=document.querySelectorAll('body%20%2A')%2Co=0%3Bfor(o=0%3Bo%3Ce.length%3Bo++)'fixed'===getComputedStyle(e%5Bo%5D).position%26%26e%5Bo%5D.parentNode.removeChild(e%5Bo%5D)%3Bvoid%200}void'1.2.0' "KillStickyHeaders"
[ModifySupportUrl]: javascript:var%20i=document.location%3Bif('support.apple.com'===i.host){const%20l=/(%5C/guide%5C/%5B-0-9a-z%5D+%5C/)(%5B-0-9a-z%5D+)%5C//%2Cp=RegExp('/'+navigator.language.toLowerCase()+'/'%2C'i')%2Cr=i.pathname%2Cd=window.getSelection()%2Cs=i.href%3Blet%20e=''%2Ct=document.title.replace(/%20-%20(Official%20)?Apple%20Support%24/%2C'')%2Cn=null%2Co=s%2Ca=''%3Bif(p.test(r))o=s.replace(p%2C'/')%3Belse%20if(!/-/.test(r)%26%26l.test(r)){let%20e=s.indexOf('/toc/')%3B0%3Ce?o=s.substr(0%2Ce+5):0%3C(e=s.indexOf('/welcome/'))%26%26(o=s.substr(0%2Ce+9))}else{if(null!==(n=r.match(l))%26%261%3Cn.length){const%20c=n%5B2%5D.split('-')%3Bo='https://support.apple.com'+n%5B1%5D+c.pop()+'/'}'None'!==d.type%26%260%3Cd.rangeCount%26%26((i=d.getRangeAt(0))%26%26(i=3===(i=i.startContainer).nodeType?i.parentNode:i).parentNode%26%26(a=i.parentNode.id%2C''!==(e=i.innerText)%26%26''!==a%26%26(t=e%2Co+='%23'+a))%2Cd.empty())}alert(%60Page%20title-%0A%24{document.title}%0A%0AOriginal%20URL-%0A%24{s}%0A%24{''!==e%26%26''!==a?'%5CnSelected%20Heading-%5Cn'+e+'%5Cn':''}%0AModified%20URL-%0A%24{o}%0A%0AMarkdown%20link-%0A%5B%24{t}%5D(%24{o})%60)}void%200%3Bvoid'1.2.1' "ModifySupportUrl"
[OpenIn1Password]: javascript:location.href='onepassword://search/'%3Bvoid'1.6.0' "OpenIn1Password"
[OpenInBrave]: javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent))location.href='brave://open-url?url='+encodeURIComponent(location.href)%3Bvoid'1.0.1' "OpenInBrave"
[OpenInFirefox]: javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent))location.href='firefox://open-url?url='+encodeURIComponent(location.href)%3Bvoid'1.5.0' "OpenInFirefox"
[OpenInFirefox-Focus]: javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent))location.href='firefox-focus://open-url?url='+encodeURIComponent(location.href)+'%26private=true'%3Bvoid'1.0.0' "OpenInFirefox-Focus"
[OpenInFirefox-Private]: javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent))location.href='firefox://open-url?url='+encodeURIComponent(location.href)+'%26private=true'%3Bvoid'1.0.0' "OpenInFirefox-Private"
[OpenInGoodReader]: javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent)%26%26/%5C.pdf(%24%7C%5C?)/.test(location.href))location.href='gr'+location.href%3Bvoid'1.5.1' "OpenInGoodReader"
[OpenInGoogleChrome]: javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent))location.href=location.href.replace(/%5Ehttp/%2C'googlechrome')%3Bvoid'1.4.0' "OpenInGoogleChrome"
[OpenInGoogleMaps]: javascript:if(/%5C.google%5C.com/.test(location.host)%26%26/iP(.d%7Chone)/.test(navigator.userAgent)){if(location.search)return%20location.href='comgooglemaps://'+location.search%3Bif(/%20-%20Google%20Maps/.test(document.title))location.href='comgooglemaps://?q='+encodeURI(document.title.replace('%20-%20Google%20Maps'%2C'').replace(/%20/g%2C'+'))}void'2.2.0' "OpenInGoogleMaps"
[OpenInTextastic]: javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent))location.href=location.href.replace(/%5Ehttps?/%2C'textastic')%3Bvoid'1.0.0' "OpenInTextastic"
[OpenInWorkingCopy]: javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent)%26%26('bitbucket.org'===location.host%7C%7C'github.com'===location.host))location.href='working-copy://show?remote='+encodeURIComponent(location.href.split('/').slice(0%2C5).join('/'))+'.git'%3Bvoid'1.5.0' "OpenInWorkingCopy"
[OpenURLParam]: javascript:var%20o=location.search.search('url=')%3Bif(-1%3Co){let%20e=location.search.substr(4+o)%3Bo=e.indexOf('%26')%3Bif(5%3C(e=-1%3Co?e.substr(0%2Co):e).length)location.replace(decodeURIComponent(e))}void'1.0.0' "OpenURLParam"
[SearchIn1Password]: javascript:location.href='onepassword://search/'+location.host.split('.').slice(location.host.split('.').length-2).join('.')%3Bvoid'1.5.0' "SearchIn1Password"
[UtmStrip]: javascript:var%20i=location.search%3Bif(3%3C=i.length){let%20e=i%3Bconst%20a=location.host%3B(~(e=~(e=~(e=(e=~(e=~(e=~a.indexOf('amazon.com')?(e=(e=e.replace(/(%5B?%26%5D)(_encoding%7Cie%7Cpsc%7Cref_%7Ctag)=%5B%5E%26%5D+/gi%2C'%241')).replace(/(%5B?%26%5D)p%5Bdf%5D_rd_.%2A?=%5B%5E%26%5D+/gi%2C'%241')).replace(/(%5B?%26%5D)ascsubtag=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('fb_')?e.replace(/(%5B?%26%5D)fb_(action_ids%7Caction_types%7Cref%7Csource)=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('action_')?e.replace(/(%5B?%26%5D)action_(object%7Cref%7Ctype)_map=%5B%5E%26%5D+/gi%2C'%241'):e).replace(/(%5B?%26%5D)(assetType%7CelqTrack%7CoriginalReferer%7Creferrer%7Cterminal_id%7Ctrk%7CtrkInfo)=%5B%5E%26%5D+/gi%2C'%241')).indexOf('aff_')?e.replace(/(%5B?%26%5D)aff_(platform%7Ctrace_key)=%5B%5E%26%5D+/gi%2C'%241'):e).toLowerCase().indexOf('id=')?e.replace(/(%5B?%26%5D)(an%7Casset%7Ccampaign%7Ce%7Cgcl%7Crecipient%7Csite)id=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('ga_')%7C%7C~e.indexOf('utm_'))%26%26(e=e.replace(/(%5B?%26%5D)(ga%7Cutm)_(campaign%7Ccid%7Ccontent%7Cdesign%7Cmedium%7Cname%7Cplace%7Cpubreferrer%7Creader%7Csource%7Cswu%7Cterm%7Cuserid%7Cviz_id)=%5B%5E%26%5D+/gi%2C'%241'))%2Ci!==(e=(e=(e='?'!=((e='%26'==((e=(e=~(e=~(e=~(e=~(e=~(e=~(e=~a.indexOf('youtu')%7C%7C~a.indexOf('googlevideo.com')?e.replace(/(%5B?%26%5D)(ac%7Cannotation_id%7Capp%7Cfeature%7Cgclid%7Ckw%7Csrc_vid)=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('_hsenc')%7C%7C~e.indexOf('_hsmi')?e.replace(/(%5B?%26%5D)_hs(enc%7Cmi)=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('hmb_')?e.replace(/(%5B?%26%5D)hmb_(campaign%7Cmedium%7Csource)=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('cm_')?(e=e.replace(/(%5B?%26%5D)cm_(mmc%7Cmmca%5Cd+%7Cre%7Csp)=%5B%5E%26%5D+/gi%2C'%241')).replace(/(%5B?%26%5D)manual_cm_mmc=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('mc_cid')%7C%7C~e.indexOf('mc_eid')?e.replace(/(%5B?%26%5D)mc_%5Bce%5Did=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('iesrc')%7C%7C~e.indexOf('mkt_tok')?e.replace(/(%5B?%26%5D)(iesrc%7Cmkt_tok)=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('pk_')?e.replace(/(%5B?%26%5D)pk_(campaign%7Ccontent%7Ckwd%7Cmedium%7Csource)=%5B%5E%26%5D+/gi%2C'%241'):e).replace(/%26%26+/g%2C'%26'))%5B0%7Ce.length-1%5D%7C%7C'')?e.substr(0%2Ce.length-1):e)%5B0%5D%7C%7C'')?'?'+e:e).indexOf('?%26')?e:'?'+e.substr(2)).length%3C3?'':e)%26%26history.replaceState(null%2Cnull%2Clocation.origin+location.pathname+e)}void%200%3Bvoid'1.6.1' "UtmStrip"

<!--- Setup links -->

[Setup IsItAws]: https://mobilemind.github.io/OpenInlets/x/#javascript:location.href='https://isitonaws.com/discover?name='+location.host%3Bvoid'1.3.2' "Setup IsItAws"
[Setup KillStickyHeaders]: https://mobilemind.github.io/OpenInlets/x/#javascript:{let%20e=document.querySelectorAll('body%20%2A')%2Co=0%3Bfor(o=0%3Bo%3Ce.length%3Bo++)'fixed'===getComputedStyle(e%5Bo%5D).position%26%26e%5Bo%5D.parentNode.removeChild(e%5Bo%5D)%3Bvoid%200}void'1.2.0' "Setup KillStickyHeaders"
[Setup ModifySupportUrl]: https://mobilemind.github.io/OpenInlets/x/#javascript:var%20i=document.location%3Bif('support.apple.com'===i.host){const%20l=/(%5C/guide%5C/%5B-0-9a-z%5D+%5C/)(%5B-0-9a-z%5D+)%5C//%2Cp=RegExp('/'+navigator.language.toLowerCase()+'/'%2C'i')%2Cr=i.pathname%2Cd=window.getSelection()%2Cs=i.href%3Blet%20e=''%2Ct=document.title.replace(/%20-%20(Official%20)?Apple%20Support%24/%2C'')%2Cn=null%2Co=s%2Ca=''%3Bif(p.test(r))o=s.replace(p%2C'/')%3Belse%20if(!/-/.test(r)%26%26l.test(r)){let%20e=s.indexOf('/toc/')%3B0%3Ce?o=s.substr(0%2Ce+5):0%3C(e=s.indexOf('/welcome/'))%26%26(o=s.substr(0%2Ce+9))}else{if(null!==(n=r.match(l))%26%261%3Cn.length){const%20c=n%5B2%5D.split('-')%3Bo='https://support.apple.com'+n%5B1%5D+c.pop()+'/'}'None'!==d.type%26%260%3Cd.rangeCount%26%26((i=d.getRangeAt(0))%26%26(i=3===(i=i.startContainer).nodeType?i.parentNode:i).parentNode%26%26(a=i.parentNode.id%2C''!==(e=i.innerText)%26%26''!==a%26%26(t=e%2Co+='%23'+a))%2Cd.empty())}alert(%60Page%20title-%0A%24{document.title}%0A%0AOriginal%20URL-%0A%24{s}%0A%24{''!==e%26%26''!==a?'%5CnSelected%20Heading-%5Cn'+e+'%5Cn':''}%0AModified%20URL-%0A%24{o}%0A%0AMarkdown%20link-%0A%5B%24{t}%5D(%24{o})%60)}void%200%3Bvoid'1.2.1' "Setup ModifySupportUrl"
[Setup OpenIn1Password]: https://mobilemind.github.io/OpenInlets/x/#javascript:location.href='onepassword://search/'%3Bvoid'1.6.0' "Setup OpenIn1Password"
[Setup OpenInBrave]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent))location.href='brave://open-url?url='+encodeURIComponent(location.href)%3Bvoid'1.0.1' "Setup OpenInBrave"
[Setup OpenInFirefox]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent))location.href='firefox://open-url?url='+encodeURIComponent(location.href)%3Bvoid'1.5.0' "Setup OpenInFirefox"
[Setup OpenInFirefox-Focus]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent))location.href='firefox-focus://open-url?url='+encodeURIComponent(location.href)+'%26private=true'%3Bvoid'1.0.0' "Setup OpenInFirefox-Focus"
[Setup OpenInFirefox-Private]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent))location.href='firefox://open-url?url='+encodeURIComponent(location.href)+'%26private=true'%3Bvoid'1.0.0' "Setup OpenInFirefox-Private"
[Setup OpenInGoodReader]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent)%26%26/%5C.pdf(%24%7C%5C?)/.test(location.href))location.href='gr'+location.href%3Bvoid'1.5.1' "Setup OpenInGoodReader"
[Setup OpenInGoogleChrome]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent))location.href=location.href.replace(/%5Ehttp/%2C'googlechrome')%3Bvoid'1.4.0' "Setup OpenInGoogleChrome"
[Setup OpenInGoogleMaps]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(/%5C.google%5C.com/.test(location.host)%26%26/iP(.d%7Chone)/.test(navigator.userAgent)){if(location.search)return%20location.href='comgooglemaps://'+location.search%3Bif(/%20-%20Google%20Maps/.test(document.title))location.href='comgooglemaps://?q='+encodeURI(document.title.replace('%20-%20Google%20Maps'%2C'').replace(/%20/g%2C'+'))}void'2.2.0' "Setup OpenInGoogleMaps"
[Setup OpenInTextastic]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent))location.href=location.href.replace(/%5Ehttps?/%2C'textastic')%3Bvoid'1.0.0' "Setup OpenInTextastic"
[Setup OpenInWorkingCopy]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(/iP(.d%7Chone)/.test(navigator.userAgent)%26%26('bitbucket.org'===location.host%7C%7C'github.com'===location.host))location.href='working-copy://show?remote='+encodeURIComponent(location.href.split('/').slice(0%2C5).join('/'))+'.git'%3Bvoid'1.5.0' "Setup OpenInWorkingCopy"
[Setup OpenURLParam]: https://mobilemind.github.io/OpenInlets/x/#javascript:var%20o=location.search.search('url=')%3Bif(-1%3Co){let%20e=location.search.substr(4+o)%3Bo=e.indexOf('%26')%3Bif(5%3C(e=-1%3Co?e.substr(0%2Co):e).length)location.replace(decodeURIComponent(e))}void'1.0.0' "Setup OpenURLParam"
[Setup SearchIn1Password]: https://mobilemind.github.io/OpenInlets/x/#javascript:location.href='onepassword://search/'+location.host.split('.').slice(location.host.split('.').length-2).join('.')%3Bvoid'1.5.0' "Setup SearchIn1Password"
[Setup UtmStrip]: https://mobilemind.github.io/OpenInlets/x/#javascript:var%20i=location.search%3Bif(3%3C=i.length){let%20e=i%3Bconst%20a=location.host%3B(~(e=~(e=~(e=(e=~(e=~(e=~a.indexOf('amazon.com')?(e=(e=e.replace(/(%5B?%26%5D)(_encoding%7Cie%7Cpsc%7Cref_%7Ctag)=%5B%5E%26%5D+/gi%2C'%241')).replace(/(%5B?%26%5D)p%5Bdf%5D_rd_.%2A?=%5B%5E%26%5D+/gi%2C'%241')).replace(/(%5B?%26%5D)ascsubtag=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('fb_')?e.replace(/(%5B?%26%5D)fb_(action_ids%7Caction_types%7Cref%7Csource)=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('action_')?e.replace(/(%5B?%26%5D)action_(object%7Cref%7Ctype)_map=%5B%5E%26%5D+/gi%2C'%241'):e).replace(/(%5B?%26%5D)(assetType%7CelqTrack%7CoriginalReferer%7Creferrer%7Cterminal_id%7Ctrk%7CtrkInfo)=%5B%5E%26%5D+/gi%2C'%241')).indexOf('aff_')?e.replace(/(%5B?%26%5D)aff_(platform%7Ctrace_key)=%5B%5E%26%5D+/gi%2C'%241'):e).toLowerCase().indexOf('id=')?e.replace(/(%5B?%26%5D)(an%7Casset%7Ccampaign%7Ce%7Cgcl%7Crecipient%7Csite)id=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('ga_')%7C%7C~e.indexOf('utm_'))%26%26(e=e.replace(/(%5B?%26%5D)(ga%7Cutm)_(campaign%7Ccid%7Ccontent%7Cdesign%7Cmedium%7Cname%7Cplace%7Cpubreferrer%7Creader%7Csource%7Cswu%7Cterm%7Cuserid%7Cviz_id)=%5B%5E%26%5D+/gi%2C'%241'))%2Ci!==(e=(e=(e='?'!=((e='%26'==((e=(e=~(e=~(e=~(e=~(e=~(e=~(e=~a.indexOf('youtu')%7C%7C~a.indexOf('googlevideo.com')?e.replace(/(%5B?%26%5D)(ac%7Cannotation_id%7Capp%7Cfeature%7Cgclid%7Ckw%7Csrc_vid)=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('_hsenc')%7C%7C~e.indexOf('_hsmi')?e.replace(/(%5B?%26%5D)_hs(enc%7Cmi)=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('hmb_')?e.replace(/(%5B?%26%5D)hmb_(campaign%7Cmedium%7Csource)=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('cm_')?(e=e.replace(/(%5B?%26%5D)cm_(mmc%7Cmmca%5Cd+%7Cre%7Csp)=%5B%5E%26%5D+/gi%2C'%241')).replace(/(%5B?%26%5D)manual_cm_mmc=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('mc_cid')%7C%7C~e.indexOf('mc_eid')?e.replace(/(%5B?%26%5D)mc_%5Bce%5Did=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('iesrc')%7C%7C~e.indexOf('mkt_tok')?e.replace(/(%5B?%26%5D)(iesrc%7Cmkt_tok)=%5B%5E%26%5D+/gi%2C'%241'):e).indexOf('pk_')?e.replace(/(%5B?%26%5D)pk_(campaign%7Ccontent%7Ckwd%7Cmedium%7Csource)=%5B%5E%26%5D+/gi%2C'%241'):e).replace(/%26%26+/g%2C'%26'))%5B0%7Ce.length-1%5D%7C%7C'')?e.substr(0%2Ce.length-1):e)%5B0%5D%7C%7C'')?'?'+e:e).indexOf('?%26')?e:'?'+e.substr(2)).length%3C3?'':e)%26%26history.replaceState(null%2Cnull%2Clocation.origin+location.pathname+e)}void%200%3Bvoid'1.6.1' "Setup UtmStrip"

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
[GoodReader URL Scheme]: http://www.goodreader.com/gr-man-howto.html#ghttp
"GoodReader:How do I save a file from Safari to GoodReader?"
[Google Maps URL Scheme]: https://developers.google.com/maps/documentation/ios/urlscheme
"Google Developers:Google Maps URL Scheme"
[Textastic x-callback-url API]: https://www.textasticapp.com/v4/manual/x-callback-url.html#downloadusingthetextastic:scheme
"Download using the textastic:// scheme"
[Working Copy URL Scheme]: https://workingcopyapp.com/url-schemes.html
"URL Schemes in Working Copy"
