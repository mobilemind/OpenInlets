# OpenInlets

OpenInlets is a collection of bookmarklets to open apps from a web page--
typically from iOS Mobile Safari to an iOS app.

![version](https://img.shields.io/github/package-json/v/mobilemind/OpenInlets.svg)
[![GitHub Super-Linter](https://github.com/mobilemind/OpenInlets/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![CodeQL](https://github.com/mobilemind/OpenInlets/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/mobilemind/OpenInlets/actions/workflows/codeql-analysis.yml)
[![NodeJS with Grunt](https://github.com/mobilemind/OpenInlets/actions/workflows/npm-grunt.yml/badge.svg)](https://github.com/mobilemind/OpenInlets/actions/workflows/npm-grunt.yml)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/1db800475a4744c68fe643a84a4454f4)](https://www.codacy.com/gh/mobilemind/OpenInlets/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=mobilemind/OpenInlets&amp;utm_campaign=Badge_Grade)

__deLighter__: Effectively de-highlights any highlighted text fragment on the
current page. If the current URL includes a hash, which can imply a text
fragment highlight, then reload the page to de-highlight it.
(Companion to Linklighter bookmarklet, below.)

__IsItAws__: Check the current page host to determine if it runs on AWS.

_NOTE:_ This also works with Safari and Firefox on macOS, and most browsers on
desktop platforms.

__KillStickyHeaders__: Find & delete all fixed position elements of body

__Linklighter__: Use the current text selection on the active web page to
generate a URL that will highlight the selected text when opened in a modern
browser. If a new URL is generated, Linklighter ask to open it in a new window
to preview the highlight, and copy the new URL to the clipboard. (See
deLighter above, as a companion bookmarklet that un-highlights the newly
opened window.) Linklighter also works with recent releases of Firefox and
Google Chrome on desktop platforms.

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

__OpenInWorkingCopy__: When viewing a BitBucket _or_ Github repository in
Mobile Safari, show the same repo in the Working Copy iOS app (cloning the
repo locally if necessary).

__OpenURLParam__: Work-around for blocked navigation from certain ad or
tracking blockers. If the current URL contains a parameter in the form of
`url=...` this bookmarklet will parse the `url` parameter and navigate to that
URL.

__SearchIn1Password__: Open 1Password and search for entries containing the
domain of the current web page.

_NOTE:_ This may be deprecated soon, but also works with Safari and Firefox
on macOS.

__UtmStrip__: Strips off the UTM query string elements of the current URL to
remove common "urchin" tracking information from youtube, etc. Also asks to
copy the new URL to the clipboard. _NOTE:_ This bookmarklet also works with
Safari and Firefox on macOS.

__x-man__: Using the selected text in browser, ask to open the corresponding
man page with yellow highlighting in Terminal.app by using Safari and the
`x-man-page://` URL scheme. The URL scheme only works using Safari on macOS.
However, the x-man bookmarklet will copy the `x-man-page://` to the clipboard
on any platform where the bookmarklet runs.

## Install

### Desktop browser

Visit the [OpenInlets page] (this README.md file as a hosted HTML page).

Drag a __JavaScript__ __bookmark__ to the bookmark bar or select it and add
bookmark/favorite. Optionally edit or rename the bookmark/favorite. iTunes or
iCloud will sync the bookmarklet to iOS.

#### JavaScript bookmarks

+ [deLighter] v1.0.1 ``javascript:if(~document.location.href.indexOf('#'))document.location.reload();void'1.0.1'``
+ [IsItAws] v1.3.3 ``javascript:location.href='https:%2F%2Fisitonaws.com%2Fdiscover%3Fname='%2Blocation.host%3Bvoid'1.3.3'``
+ [KillStickyHeaders] v1.2.1 ``javascript:%7Blet%20e=document.querySelectorAll('body%20%2A')%2Co=0%3Bfor(o=0%3Bo%3Ce.length%3Bo%2B%2B)'fixed'==getComputedStyle(e%5Bo%5D).position%26%26e%5Bo%5D.parentNode.removeChild(e%5Bo%5D)%3Bvoid%200%7Dvoid'1.2.1'``
+ [Linklighter] v1.1.0 ``javascript:%7Bvar%20i=window.getSelection().toString()%2Cl=i.length%2Ce=document.location.href%3Blet%20n=e%2Ct=e.indexOf('%23')%2Co=''%3Bif(window.getSelection().empty()%2Ci%26%26''!=i)%7Bif(-1%3Ct%26%26(n=n.substring(0%2Ct))%2Cn%2B='%23:~:text='%2Cl%3C80)o=i%2Cn%2B=encodeURIComponent(i)%3Belse%7Blet%20e=~~(l%2F2-2)%3B150%3Cl%3Fe=48:100%3Cl%26%26(e=~~(l%2F3))%3Bi=%5BencodeURIComponent(o=i.substring(0%2Ce))%2CencodeURIComponent(i.substr(l-e))%5D%3Bo%2B='%E2%80%A6'%2C-1%3C(t=i%5B0%5D.lastIndexOf('%2520'))%26%26(i%5B0%5D=i%5B0%5D.substring(0%2Ct))%2C-1%3C(t=i%5B1%5D.indexOf('%2520'))%26%26(i%5B1%5D=i%5B1%5D.substr(3%2Bt))%2Cn%2B=i.join()%7Dn=(n=(n=n.replace(%2F%250A%24%2F%2C'')).replace(%2F%2520%24%2F%2C'')).replace('%23%23:~:text='%2C'%23:~:text=')%7Dvoid(n!=e%26%26confirm('Open%20URL%20with%20highlight%20on%20%22'%2Bo%2B'%22%20and%20copy%20URL%20to%20clipboard%3F%5Cn%5CnNote:%20If%20text%20isn%E2%80%99t%20highlighted%20in%20new%20tab%2C%20you%20can%20try%20again%20with%20a%20smaller%20selection.')%26%26(navigator.clipboard.writeText(n)%2Cwindow.open(n%2C'_blank').opener=null))%7Dvoid'1.1.0'``
+ [OpenIn1Password] v1.6.1 ``javascript:location.href='onepassword:%2F%2Fsearch%2F'%3Bvoid'1.6.1'``
+ [OpenInBrave] v1.0.2 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href='brave:%2F%2Fopen-url%3Furl='%2BencodeURIComponent(location.href)%3Bvoid'1.0.2'``
+ [OpenInFirefox] v1.5.1 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href='firefox:%2F%2Fopen-url%3Furl='%2BencodeURIComponent(location.href)%3Bvoid'1.5.1'``
+ [OpenInFirefox-Focus] v1.0.1 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href='firefox-focus:%2F%2Fopen-url%3Furl='%2BencodeURIComponent(location.href)%2B'%26private=true'%3Bvoid'1.0.1'``
+ [OpenInFirefox-Private] v1.0.1 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href='firefox:%2F%2Fopen-url%3Furl='%2BencodeURIComponent(location.href)%2B'%26private=true'%3Bvoid'1.0.1'``
+ [OpenInGoodReader] v1.5.2 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26%2F%5C.pdf(%24%7C%5C%3F)%2F.test(location.href))location.href='gr'%2Blocation.href%3Bvoid'1.5.2'``
+ [OpenInGoogleChrome] v1.4.1 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href=location.href.replace(%2F%5Ehttp%2F%2C'googlechrome')%3Bvoid'1.4.1'``
+ [OpenInGoogleMaps] v2.2.1 ``javascript:if(%2F%5C.google%5C.com%2F.test(location.host)%26%26%2FiP(.d%7Chone)%2F.test(navigator.userAgent))%7Bif(location.search)return%20location.href='comgooglemaps:%2F%2F'%2Blocation.search%3Bif(%2F%20-%20Google%20Maps%2F.test(document.title))location.href='comgooglemaps:%2F%2F%3Fq='%2BencodeURI(document.title.replace('%20-%20Google%20Maps'%2C'').replace(%2F%20%2Fg%2C'%2B'))%7Dvoid'2.2.1'``
+ [OpenInTextastic] v1.0.1 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href=location.href.replace(%2F%5Ehttps%3F%2F%2C'textastic')%3Bvoid'1.0.1'``
+ [OpenInWorkingCopy] v1.5.1 ``javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26('bitbucket.org'==location.host%7C%7C'github.com'==location.host))location.href='working-copy:%2F%2Fshow%3Fremote='%2BencodeURIComponent(location.href.split('%2F').slice(0%2C5).join('%2F'))%2B'.git'%3Bvoid'1.5.1'``
+ [OpenURLParam] v1.0.1 ``javascript:var%20o=location.search.search('url=')%3Bif(-1%3Co)%7Blet%20e=location.search.substr(4%2Bo)%3Bo=e.indexOf('%26')%3Bif(5%3C(e=-1%3Co%3Fe.substr(0%2Co):e).length)location.replace(decodeURIComponent(e))%7Dvoid'1.0.1'``
+ [SearchIn1Password] v1.5.1 ``javascript:location.href='onepassword:%2F%2Fsearch%2F'%2Blocation.host.split('.').slice(location.host.split('.').length-2).join('.')%3Bvoid'1.5.1'``
+ [UtmStrip] v1.7.0 ``javascript:var%20i=location.search%3Bif(3%3C=i.length)%7Blet%20e=i%3Bvar%20a=location.host%3B(~(e=~(e=~(e=(e=~(e=~(e=~a.indexOf('amazon.com')%3F(e=(e=e.replace(%2F(%5B%3F%26%5D)(_encoding%7Cie%7Cpsc%7Cref_%7Ctag)=%5B%5E%26%5D%2B%2Fgi%2C'%241')).replace(%2F(%5B%3F%26%5D)p%5Bdf%5D_rd_.%2A%3F=%5B%5E%26%5D%2B%2Fgi%2C'%241')).replace(%2F(%5B%3F%26%5D)ascsubtag=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('fb_')%3Fe.replace(%2F(%5B%3F%26%5D)fb_(action_ids%7Caction_types%7Cref%7Csource)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('action_')%3Fe.replace(%2F(%5B%3F%26%5D)action_(object%7Cref%7Ctype)_map=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).replace(%2F(%5B%3F%26%5D)(assetType%7CelqTrack%7CoriginalReferer%7Creferrer%7Cterminal_id%7Ctrk%7CtrkInfo)=%5B%5E%26%5D%2B%2Fgi%2C'%241')).indexOf('aff_')%3Fe.replace(%2F(%5B%3F%26%5D)aff_(platform%7Ctrace_key)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).toLowerCase().indexOf('id=')%3Fe.replace(%2F(%5B%3F%26%5D)(an%7Casset%7Ccampaign%7Ce%7Cgcl%7Crecipient%7Csite)id=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('ga_')%7C%7C~e.indexOf('utm_'))%26%26(e=e.replace(%2F(%5B%3F%26%5D)(ga%7Cutm)_(campaign%7Ccid%7Ccontent%7Cdesign%7Cmedium%7Cname%7Cplace%7Cpubreferrer%7Creader%7Csource%7Cswu%7Cterm%7Cuserid%7Cviz_id)=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci!==(e=(e=(e='%3F'!=((e='%26'==((e=(e=~(e=~(e=~(e=~(e=~(e=~(e=~a.indexOf('youtu')%7C%7C~a.indexOf('googlevideo.com')%3Fe.replace(%2F(%5B%3F%26%5D)(ac%7Cannotation_id%7Capp%7Cfeature%7Cgclid%7Ckw%7Csrc_vid)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('_hsenc')%7C%7C~e.indexOf('_hsmi')%3Fe.replace(%2F(%5B%3F%26%5D)_hs(enc%7Cmi)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('hmb_')%3Fe.replace(%2F(%5B%3F%26%5D)hmb_(campaign%7Cmedium%7Csource)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('cm_')%3F(e=e.replace(%2F(%5B%3F%26%5D)cm_(mmc%7Cmmca%5Cd%2B%7Cre%7Csp)=%5B%5E%26%5D%2B%2Fgi%2C'%241')).replace(%2F(%5B%3F%26%5D)manual_cm_mmc=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('mc_cid')%7C%7C~e.indexOf('mc_eid')%3Fe.replace(%2F(%5B%3F%26%5D)mc_%5Bce%5Did=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('iesrc')%7C%7C~e.indexOf('mkt_tok')%3Fe.replace(%2F(%5B%3F%26%5D)(iesrc%7Cmkt_tok)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('pk_')%3Fe.replace(%2F(%5B%3F%26%5D)pk_(campaign%7Ccontent%7Ckwd%7Cmedium%7Csource)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).replace(%2F%26%26%2B%2Fg%2C'%26'))%5B0%7Ce.length-1%5D%7C%7C'')%3Fe.substr(0%2Ce.length-1):e)%5B0%5D%7C%7C'')%3F'%3F'%2Be:e).indexOf('%3F%26')%3Fe:'%3F'%2Be.substr(2)).length%3C3%3F'':e)%26%26(i=location.origin%2Blocation.pathname%2Be%2Chistory.replaceState(null%2Cnull%2Ci)%2Cconfirm('Copy%20cleaned%20URL%20to%20clipboard%3F'))%26%26navigator.clipboard.writeText(i)%7Dvoid%200%3Bvoid'1.7.0'``
+ [x-man] v1.1.0 ``javascript:o='x-man-page:%2F%2F'%2B(n=window.getSelection().toString())%2Cvoid(n%26%26(confirm('x-man-page%20for:%20%22'%2Bn%2B'%22%3F')%26%26(navigator.clipboard%26%26navigator.clipboard.writeText(o)%2Cwindow.open(o%2C'_blank').opener=null)%2Cwindow.getSelection().empty()))%3Bvar%20n%2Co%3Bvoid'1.1.0'``

_NOTE:_ The `javascript:` bookmarks above will _not_ work from the Github
repository page, due to Github security precautions.

### Mobile browser

Tap a link below. Follow the instructions on the resulting page to turn the
followed link into a bookmark for JavaScript bookmarklet.

+ __Mobile Safari setup link__ -- [Setup deLighter] v1.0.1
+ __Mobile Safari setup link__ -- [Setup IsItAws] v1.3.3
+ __Mobile Safari setup link__ -- [Setup KillStickyHeaders] v1.2.1
+ __Mobile Safari setup link__ -- [Setup Linklighter] v1.1.0
+ __Mobile Safari setup link__ -- [Setup OpenIn1Password] v1.6.1
+ __Mobile Safari setup link__ -- [Setup OpenInBrave] v1.0.2
+ __Mobile Safari setup link__ -- [Setup OpenInFirefox] v1.5.1
+ __Mobile Safari setup link__ -- [Setup OpenInFirefox-Focus] v1.0.1
+ __Mobile Safari setup link__ -- [Setup OpenInFirefox-Private] v1.0.1
+ __Mobile Safari setup link__ -- [Setup OpenInGoodReader] v1.5.2
+ __Mobile Safari setup link__ -- [Setup OpenInGoogleChrome] v1.4.1
+ __Mobile Safari setup link__ -- [Setup OpenInGoogleMaps] v2.2.1
+ __Mobile Safari setup link__ -- [Setup OpenInTextastic] v1.0.1
+ __Mobile Safari setup link__ -- [Setup OpenInWorkingCopy] v1.5.1
+ __Mobile Safari setup link__ -- [Setup OpenURLParam] v1.0.1
+ __Mobile Safari setup link__ -- [Setup SearchIn1Password] v1.5.1
+ __Mobile Safari setup link__ -- [Setup UtmStrip] v1.7.0
+ __Mobile Safari setup link__ -- [Setup x-man] v1.1.0

## Use

While viewing web page in Mobile Safari, activate the corresponding
bookmarklet (tap it on the bookmark bar or use the Bookmarks/Favorites menu).
If installed the corresponding iOS app will open to the same document or
location.

## Requirements

+ Mobile Safari 7.x or higher (last tested with iOS 17, macOS 14 Safari 17)
+ Corresponding iOS app (_except_ for "delighter", "IsItAws", "Linklighter",
  "UTMStrip", and "x-man" bookmarklets).

### Notes

1. Bookmarklets do _not_ work in Google Chrome, Ghostery and DuckDuckGo _iOS_
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
the dependencies into the project before invoking `npx grunt`.

```bash
git clone https://github.com/mobilemind/OpenInlets.git
cd OpenInlets
npm install && npm audit fix
npx grunt
```

Note that [nodejs] and [npm] are required. The lines above will install
[grunt] and other dependencies defined in `package.json`. You can
update dependencies using `npm update` at any time or just invoke `npx grunt` to
re-build OpenInlets `web/` directory.

## URL Scheme Notes (References)

Each bookmarklet does some rudimentary check and then redirects to an app
using a URL protocol scheme.

+ __deLighter__: Does _not_ use a URL protocol scheme. Checks the current URL
  for a '#' and if found, reloads the page to clear the highlight.
+ __IsItAws__ - Does _not_ use a URL protocol scheme. Rather it uses the
  lambda [IsItOnAWS.com] functions created by Tim Bray. For details, see
  [Is it on AWS? Domain Identification Using AWS Lambda][IsItOnAWS Blog Post].
+ __KillStickyHeaders__ - Does _not_ use a URL protocol scheme. Removes HTML
  child elements of `<body>` that have a fixed position. See
  [Kill sticky headers][Kill sticky headers].
+ __Linklighter__: Does _not_ use a URL protocol scheme. Uses JavaScript to
  get the current selection and append a `#:~:text=…` string to the current
  URL. Modern browsers interpret this and when opening such a URL, the browser
  scroll to the first matching selection and highlight that text. Logic will
  automatically use the full selection when its less than 80 characters, or
  algorithmically split the text into a shorter "start" fragment and "end"
  fragment. In that case the browser highlights from the first match of the
  start fragment to the last character of the next match of the "end" fragment.
  To learn more about text fragment highlighting and security considerations,
  refer to [Text fragments][Text fragments].
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
+ __x-man__ - Uses the current selection in the browser to create and open a
  link that uses the `x-man-page://` URL scheme supported by Safari and
  Terminal.app. There doesn't seem to be any official documentation for this
  scheme which has been around for 20 years. However, you can find
  documentation on GitHub at
  [x-man-page: URL handler studied for the OSX Terminal.app][x-man-page URL handler]

## Version Notes

3.3.0 updates Linklighter 1.1.0, UtmStrip 1.7.0, and x-man 1.10 to ask to copy
their results to the clipboard

3.2.0 adds x-man bookmarklet for `x-man-page://` URL scheme

3.1.0 add deLighter and Linklighter bookmarklets; bump to node 21.0+

3.0.0 Switch to node 20 LTS release

2.9.1 Regex & HTML safe URL encoding, drop deprecated utils

2.8.2 add docLinker

2.8.1 update .uglifyjs3.json for latest uglifyjs republish w/new compresion

2.8.0 bump to node 18.8+

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

[deLighter]: javascript:if(~document.location.href.indexOf('%23'))document.location.reload()%3Bvoid'1.0.1' "deLighter"
[IsItAws]: javascript:location.href='https:%2F%2Fisitonaws.com%2Fdiscover%3Fname='%2Blocation.host%3Bvoid'1.3.3' "IsItAws"
[KillStickyHeaders]: javascript:%7Blet%20e=document.querySelectorAll('body%20%2A')%2Co=0%3Bfor(o=0%3Bo%3Ce.length%3Bo%2B%2B)'fixed'==getComputedStyle(e%5Bo%5D).position%26%26e%5Bo%5D.parentNode.removeChild(e%5Bo%5D)%3Bvoid%200%7Dvoid'1.2.1' "KillStickyHeaders"
[Linklighter]: href%3Blet%20n=e%2Ct=e.indexOf('%23')%3Bif(window.getSelection().empty()%2Co%26%26''!=o)%7Bif(-1%3Ct%26%26(n=n.substring(0%2Ct))%2Cn%2B='%23:~:text='%2Ci%3C80)n%2B=encodeURIComponent(o)%3Belse%7Blet%20e=~~(i%2F2-2)%3B150%3Ci%3Fe=48:100%3Ci%26%26(e=~~(i%2F3))%3Bo=%5BencodeURIComponent(o.substring(0%2Ce))%2CencodeURIComponent(o.substr(i-e))%5D%3B-1%3C(t=o%5B0%5D.lastIndexOf('%2520'))%26%26(o%5B0%5D=o%5B0%5D.substring(0%2Ct))%2C-1%3C(t=o%5B1%5D.indexOf('%2520'))%26%26(o%5B1%5D=o%5B1%5D.substr(3%2Bt))%2Cn%2B=o.join()%7Dn=(n=(n=n.replace(%2F%250A%24%2F%2C'')).replace(%2F%2520%24%2F%2C'')).replace('%23%23:~:text='%2C'%23:~:text=')%7Dvoid(n!=e%26%26(window.open(n%2C'_blank').opener=null))%7Dvoid'1.0.0' "Linklighter"
[OpenIn1Password]: javascript:location.href='onepassword:%2F%2Fsearch%2F'%3Bvoid'1.6.1' "OpenIn1Password"
[OpenInBrave]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href='brave:%2F%2Fopen-url%3Furl='%2BencodeURIComponent(location.href)%3Bvoid'1.0.2' "OpenInBrave"
[OpenInFirefox]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href='firefox:%2F%2Fopen-url%3Furl='%2BencodeURIComponent(location.href)%3Bvoid'1.5.1' "OpenInFirefox"
[OpenInFirefox-Focus]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href='firefox-focus:%2F%2Fopen-url%3Furl='%2BencodeURIComponent(location.href)%2B'%26private=true'%3Bvoid'1.0.1' "OpenInFirefox-Focus"
[OpenInFirefox-Private]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href='firefox:%2F%2Fopen-url%3Furl='%2BencodeURIComponent(location.href)%2B'%26private=true'%3Bvoid'1.0.1' "OpenInFirefox-Private"
[OpenInGoodReader]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26%2F%5C.pdf(%24%7C%5C%3F)%2F.test(location.href))location.href='gr'%2Blocation.href%3Bvoid'1.5.2' "OpenInGoodReader"
[OpenInGoogleChrome]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href=location.href.replace(%2F%5Ehttp%2F%2C'googlechrome')%3Bvoid'1.4.1' "OpenInGoogleChrome"
[OpenInGoogleMaps]: javascript:if(%2F%5C.google%5C.com%2F.test(location.host)%26%26%2FiP(.d%7Chone)%2F.test(navigator.userAgent))%7Bif(location.search)return%20location.href='comgooglemaps:%2F%2F'%2Blocation.search%3Bif(%2F%20-%20Google%20Maps%2F.test(document.title))location.href='comgooglemaps:%2F%2F%3Fq='%2BencodeURI(document.title.replace('%20-%20Google%20Maps'%2C'').replace(%2F%20%2Fg%2C'%2B'))%7Dvoid'2.2.1' "OpenInGoogleMaps"
[OpenInTextastic]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href=location.href.replace(%2F%5Ehttps%3F%2F%2C'textastic')%3Bvoid'1.0.1' "OpenInTextastic"
[OpenInWorkingCopy]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26('bitbucket.org'==location.host%7C%7C'github.com'==location.host))location.href='working-copy:%2F%2Fshow%3Fremote='%2BencodeURIComponent(location.href.split('%2F').slice(0%2C5).join('%2F'))%2B'.git'%3Bvoid'1.5.1' "OpenInWorkingCopy"
[OpenURLParam]: javascript:var%20o=location.search.search('url=')%3Bif(-1%3Co)%7Blet%20e=location.search.substr(4%2Bo)%3Bo=e.indexOf('%26')%3Bif(5%3C(e=-1%3Co%3Fe.substr(0%2Co):e).length)location.replace(decodeURIComponent(e))%7Dvoid'1.0.1' "OpenURLParam"
[SearchIn1Password]: javascript:location.href='onepassword:%2F%2Fsearch%2F'%2Blocation.host.split('.').slice(location.host.split('.').length-2).join('.')%3Bvoid'1.5.1' "SearchIn1Password"
[UtmStrip]: javascript:var%20i=location.search%3Bif(3%3C=i.length)%7Blet%20e=i%3Bvar%20a=location.host%3B(~(e=~(e=~(e=(e=~(e=~(e=~a.indexOf('amazon.com')%3F(e=(e=e.replace(%2F(%5B%3F%26%5D)(_encoding%7Cie%7Cpsc%7Cref_%7Ctag)=%5B%5E%26%5D%2B%2Fgi%2C'%241')).replace(%2F(%5B%3F%26%5D)p%5Bdf%5D_rd_.%2A%3F=%5B%5E%26%5D%2B%2Fgi%2C'%241')).replace(%2F(%5B%3F%26%5D)ascsubtag=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('fb_')%3Fe.replace(%2F(%5B%3F%26%5D)fb_(action_ids%7Caction_types%7Cref%7Csource)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('action_')%3Fe.replace(%2F(%5B%3F%26%5D)action_(object%7Cref%7Ctype)_map=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).replace(%2F(%5B%3F%26%5D)(assetType%7CelqTrack%7CoriginalReferer%7Creferrer%7Cterminal_id%7Ctrk%7CtrkInfo)=%5B%5E%26%5D%2B%2Fgi%2C'%241')).indexOf('aff_')%3Fe.replace(%2F(%5B%3F%26%5D)aff_(platform%7Ctrace_key)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).toLowerCase().indexOf('id=')%3Fe.replace(%2F(%5B%3F%26%5D)(an%7Casset%7Ccampaign%7Ce%7Cgcl%7Crecipient%7Csite)id=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('ga_')%7C%7C~e.indexOf('utm_'))%26%26(e=e.replace(%2F(%5B%3F%26%5D)(ga%7Cutm)_(campaign%7Ccid%7Ccontent%7Cdesign%7Cmedium%7Cname%7Cplace%7Cpubreferrer%7Creader%7Csource%7Cswu%7Cterm%7Cuserid%7Cviz_id)=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci!==(e=(e=(e='%3F'!=((e='%26'==((e=(e=~(e=~(e=~(e=~(e=~(e=~(e=~a.indexOf('youtu')%7C%7C~a.indexOf('googlevideo.com')%3Fe.replace(%2F(%5B%3F%26%5D)(ac%7Cannotation_id%7Capp%7Cfeature%7Cgclid%7Ckw%7Csrc_vid)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('_hsenc')%7C%7C~e.indexOf('_hsmi')%3Fe.replace(%2F(%5B%3F%26%5D)_hs(enc%7Cmi)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('hmb_')%3Fe.replace(%2F(%5B%3F%26%5D)hmb_(campaign%7Cmedium%7Csource)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('cm_')%3F(e=e.replace(%2F(%5B%3F%26%5D)cm_(mmc%7Cmmca%5Cd%2B%7Cre%7Csp)=%5B%5E%26%5D%2B%2Fgi%2C'%241')).replace(%2F(%5B%3F%26%5D)manual_cm_mmc=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('mc_cid')%7C%7C~e.indexOf('mc_eid')%3Fe.replace(%2F(%5B%3F%26%5D)mc_%5Bce%5Did=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('iesrc')%7C%7C~e.indexOf('mkt_tok')%3Fe.replace(%2F(%5B%3F%26%5D)(iesrc%7Cmkt_tok)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('pk_')%3Fe.replace(%2F(%5B%3F%26%5D)pk_(campaign%7Ccontent%7Ckwd%7Cmedium%7Csource)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).replace(%2F%26%26%2B%2Fg%2C'%26'))%5B0%7Ce.length-1%5D%7C%7C'')%3Fe.substr(0%2Ce.length-1):e)%5B0%5D%7C%7C'')%3F'%3F'%2Be:e).indexOf('%3F%26')%3Fe:'%3F'%2Be.substr(2)).length%3C3%3F'':e)%26%26history.replaceState(null%2Cnull%2Clocation.origin%2Blocation.pathname%2Be)%7Dvoid%200%3Bvoid'1.6.2' "UtmStrip"
[x-man]: javascript:window.getSelection().toString()%3Fwindow.open('x-man-page:%2F%2F'%2Bwindow.getSelection().toString()%2C'_blank').opener=null:0%3Bvoid'1.0.0' "x-man"

<!--- Setup links -->

[Setup deLighter]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(~document.location.href.indexOf('%23'))document.location.reload()%3Bvoid'1.0.1' "Setup deLighter"
[Setup IsItAws]: https://mobilemind.github.io/OpenInlets/x/#javascript:location.href='https:%2F%2Fisitonaws.com%2Fdiscover%3Fname='%2Blocation.host%3Bvoid'1.3.3' "Setup IsItAws"
[Setup KillStickyHeaders]: https://mobilemind.github.io/OpenInlets/x/#javascript:%7Blet%20e=document.querySelectorAll('body%20%2A')%2Co=0%3Bfor(o=0%3Bo%3Ce.length%3Bo%2B%2B)'fixed'==getComputedStyle(e%5Bo%5D).position%26%26e%5Bo%5D.parentNode.removeChild(e%5Bo%5D)%3Bvoid%200%7Dvoid'1.2.1' "Setup KillStickyHeaders"
[Setup Linklighter]: https://mobilemind.github.io/OpenInlets/x/#javascript:%7Bvar%20i=window.getSelection().toString()%2Cl=i.length%2Ce=document.location.href%3Blet%20n=e%2Ct=e.indexOf('%23')%2Co=''%3Bif(window.getSelection().empty()%2Ci%26%26''!=i)%7Bif(-1%3Ct%26%26(n=n.substring(0%2Ct))%2Cn%2B='%23:~:text='%2Cl%3C80)o=i%2Cn%2B=encodeURIComponent(i)%3Belse%7Blet%20e=~~(l%2F2-2)%3B150%3Cl%3Fe=48:100%3Cl%26%26(e=~~(l%2F3))%3Bi=%5BencodeURIComponent(o=i.substring(0%2Ce))%2CencodeURIComponent(i.substr(l-e))%5D%3Bo%2B='%E2%80%A6'%2C-1%3C(t=i%5B0%5D.lastIndexOf('%2520'))%26%26(i%5B0%5D=i%5B0%5D.substring(0%2Ct))%2C-1%3C(t=i%5B1%5D.indexOf('%2520'))%26%26(i%5B1%5D=i%5B1%5D.substr(3%2Bt))%2Cn%2B=i.join()%7Dn=(n=(n=n.replace(%2F%250A%24%2F%2C'')).replace(%2F%2520%24%2F%2C'')).replace('%23%23:~:text='%2C'%23:~:text=')%7Dvoid(n!=e%26%26confirm('Open%20URL%20with%20highlight%20on%20%22'%2Bo%2B'%22%20and%20copy%20URL%20to%20clipboard%3F%5Cn%5CnNote:%20If%20text%20isn%E2%80%99t%20highlighted%20in%20new%20tab%2C%20you%20can%20try%20again%20with%20a%20smaller%20selection.')%26%26(navigator.clipboard.writeText(n)%2Cwindow.open(n%2C'_blank').opener=null))%7Dvoid'1.1.0' "Setup Linklighter"
[Setup OpenIn1Password]: https://mobilemind.github.io/OpenInlets/x/#javascript:location.href='onepassword:%2F%2Fsearch%2F'%3Bvoid'1.6.1' "Setup OpenIn1Password"
[Setup OpenInBrave]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href='brave:%2F%2Fopen-url%3Furl='%2BencodeURIComponent(location.href)%3Bvoid'1.0.2' "Setup OpenInBrave"
[Setup OpenInFirefox]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href='firefox:%2F%2Fopen-url%3Furl='%2BencodeURIComponent(location.href)%3Bvoid'1.5.1' "Setup OpenInFirefox"
[Setup OpenInFirefox-Focus]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href='firefox-focus:%2F%2Fopen-url%3Furl='%2BencodeURIComponent(location.href)%2B'%26private=true'%3Bvoid'1.0.1' "Setup OpenInFirefox-Focus"
[Setup OpenInFirefox-Private]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href='firefox:%2F%2Fopen-url%3Furl='%2BencodeURIComponent(location.href)%2B'%26private=true'%3Bvoid'1.0.1' "Setup OpenInFirefox-Private"
[Setup OpenInGoodReader]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26%2F%5C.pdf(%24%7C%5C%3F)%2F.test(location.href))location.href='gr'%2Blocation.href%3Bvoid'1.5.2' "Setup OpenInGoodReader"
[Setup OpenInGoogleChrome]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href=location.href.replace(%2F%5Ehttp%2F%2C'googlechrome')%3Bvoid'1.4.1' "Setup OpenInGoogleChrome"
[Setup OpenInGoogleMaps]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(%2F%5C.google%5C.com%2F.test(location.host)%26%26%2FiP(.d%7Chone)%2F.test(navigator.userAgent))%7Bif(location.search)return%20location.href='comgooglemaps:%2F%2F'%2Blocation.search%3Bif(%2F%20-%20Google%20Maps%2F.test(document.title))location.href='comgooglemaps:%2F%2F%3Fq='%2BencodeURI(document.title.replace('%20-%20Google%20Maps'%2C'').replace(%2F%20%2Fg%2C'%2B'))%7Dvoid'2.2.1' "Setup OpenInGoogleMaps"
[Setup OpenInTextastic]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href=location.href.replace(%2F%5Ehttps%3F%2F%2C'textastic')%3Bvoid'1.0.1' "Setup OpenInTextastic"
[Setup OpenInWorkingCopy]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26('bitbucket.org'==location.host%7C%7C'github.com'==location.host))location.href='working-copy:%2F%2Fshow%3Fremote='%2BencodeURIComponent(location.href.split('%2F').slice(0%2C5).join('%2F'))%2B'.git'%3Bvoid'1.5.1' "Setup OpenInWorkingCopy"
[Setup OpenURLParam]: https://mobilemind.github.io/OpenInlets/x/#javascript:var%20o=location.search.search('url=')%3Bif(-1%3Co)%7Blet%20e=location.search.substr(4%2Bo)%3Bo=e.indexOf('%26')%3Bif(5%3C(e=-1%3Co%3Fe.substr(0%2Co):e).length)location.replace(decodeURIComponent(e))%7Dvoid'1.0.1' "Setup OpenURLParam"
[Setup SearchIn1Password]: https://mobilemind.github.io/OpenInlets/x/#javascript:location.href='onepassword:%2F%2Fsearch%2F'%2Blocation.host.split('.').slice(location.host.split('.').length-2).join('.')%3Bvoid'1.5.1' "Setup SearchIn1Password"
[Setup UtmStrip]: https://mobilemind.github.io/OpenInlets/x/#javascript:var%20i=location.search%3Bif(3%3C=i.length)%7Blet%20e=i%3Bvar%20a=location.host%3B(~(e=~(e=~(e=(e=~(e=~(e=~a.indexOf('amazon.com')%3F(e=(e=e.replace(%2F(%5B%3F%26%5D)(_encoding%7Cie%7Cpsc%7Cref_%7Ctag)=%5B%5E%26%5D%2B%2Fgi%2C'%241')).replace(%2F(%5B%3F%26%5D)p%5Bdf%5D_rd_.%2A%3F=%5B%5E%26%5D%2B%2Fgi%2C'%241')).replace(%2F(%5B%3F%26%5D)ascsubtag=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('fb_')%3Fe.replace(%2F(%5B%3F%26%5D)fb_(action_ids%7Caction_types%7Cref%7Csource)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('action_')%3Fe.replace(%2F(%5B%3F%26%5D)action_(object%7Cref%7Ctype)_map=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).replace(%2F(%5B%3F%26%5D)(assetType%7CelqTrack%7CoriginalReferer%7Creferrer%7Cterminal_id%7Ctrk%7CtrkInfo)=%5B%5E%26%5D%2B%2Fgi%2C'%241')).indexOf('aff_')%3Fe.replace(%2F(%5B%3F%26%5D)aff_(platform%7Ctrace_key)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).toLowerCase().indexOf('id=')%3Fe.replace(%2F(%5B%3F%26%5D)(an%7Casset%7Ccampaign%7Ce%7Cgcl%7Crecipient%7Csite)id=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('ga_')%7C%7C~e.indexOf('utm_'))%26%26(e=e.replace(%2F(%5B%3F%26%5D)(ga%7Cutm)_(campaign%7Ccid%7Ccontent%7Cdesign%7Cmedium%7Cname%7Cplace%7Cpubreferrer%7Creader%7Csource%7Cswu%7Cterm%7Cuserid%7Cviz_id)=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ci!==(e=(e=(e='%3F'!=((e='%26'==((e=(e=~(e=~(e=~(e=~(e=~(e=~(e=~a.indexOf('youtu')%7C%7C~a.indexOf('googlevideo.com')%3Fe.replace(%2F(%5B%3F%26%5D)(ac%7Cannotation_id%7Capp%7Cfeature%7Cgclid%7Ckw%7Csrc_vid)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('_hsenc')%7C%7C~e.indexOf('_hsmi')%3Fe.replace(%2F(%5B%3F%26%5D)_hs(enc%7Cmi)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('hmb_')%3Fe.replace(%2F(%5B%3F%26%5D)hmb_(campaign%7Cmedium%7Csource)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('cm_')%3F(e=e.replace(%2F(%5B%3F%26%5D)cm_(mmc%7Cmmca%5Cd%2B%7Cre%7Csp)=%5B%5E%26%5D%2B%2Fgi%2C'%241')).replace(%2F(%5B%3F%26%5D)manual_cm_mmc=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('mc_cid')%7C%7C~e.indexOf('mc_eid')%3Fe.replace(%2F(%5B%3F%26%5D)mc_%5Bce%5Did=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('iesrc')%7C%7C~e.indexOf('mkt_tok')%3Fe.replace(%2F(%5B%3F%26%5D)(iesrc%7Cmkt_tok)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).indexOf('pk_')%3Fe.replace(%2F(%5B%3F%26%5D)pk_(campaign%7Ccontent%7Ckwd%7Cmedium%7Csource)=%5B%5E%26%5D%2B%2Fgi%2C'%241'):e).replace(%2F%26%26%2B%2Fg%2C'%26'))%5B0%7Ce.length-1%5D%7C%7C'')%3Fe.substr(0%2Ce.length-1):e)%5B0%5D%7C%7C'')%3F'%3F'%2Be:e).indexOf('%3F%26')%3Fe:'%3F'%2Be.substr(2)).length%3C3%3F'':e)%26%26(i=location.origin%2Blocation.pathname%2Be%2Chistory.replaceState(null%2Cnull%2Ci)%2Cconfirm('Copy%20cleaned%20URL%20to%20clipboard%3F'))%26%26navigator.clipboard.writeText(i)%7Dvoid%200%3Bvoid'1.7.0' "Setup UtmStrip"
[Setup x-man]: https://mobilemind.github.io/OpenInlets/x/#javascript:o='x-man-page:%2F%2F'%2B(n=window.getSelection().toString())%2Cvoid(n%26%26(confirm('x-man-page%20for:%20%22'%2Bn%2B'%22%3F')%26%26(navigator.clipboard%26%26navigator.clipboard.writeText(o)%2Cwindow.open(o%2C'_blank').opener=null)%2Cwindow.getSelection().empty()))%3Bvar%20n%2Co%3Bvoid'1.1.0' "Setup x-man"

<!-- Reference links -->

[nodejs]: http://nodejs.org/
[npm]: https://npmjs.org/
[grunt]: http://gruntjs.com/
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
[Text fragments]: https://developer.mozilla.org/en-US/docs/Web/Text_fragments
[Working Copy URL Scheme]: https://workingcopyapp.com/url-schemes.html
"URL Schemes in Working Copy"
[x-man-page URL handler]: https://github.com/ouspg/urlhandlers/blob/master/cases/x-man-page.md "x-man-page: URL handler studied for the OSX Terminal.app"
