# OpenInlets

OpenInlets is a collection of bookmarklet utilities for your browser.
Originally they opened an iOS app from a web page in a specific way.
Now some make or modify URLs, or determine if a site is hosted on AWS.

![version](https://img.shields.io/github/package-json/v/mobilemind/OpenInlets.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/1db800475a4744c68fe643a84a4454f4)](https://www.codacy.com/gh/mobilemind/OpenInlets/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=mobilemind/OpenInlets&amp;utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://github.com/mobilemind/OpenInlets/actions/workflows/linter.yml/badge.svg)](https://github.com/mobilemind/OpenInlets/actions/workflows/linter.yml)
[![CodeQL](https://github.com/mobilemind/OpenInlets/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/mobilemind/OpenInlets/actions/workflows/codeql-analysis.yml)
[![NodeJS Build](https://github.com/mobilemind/OpenInlets/actions/workflows/ci.yml/badge.svg)](https://github.com/mobilemind/OpenInlets/actions/workflows/ci.yml)

## Installation

To easily install a bookmarklet using a desktop browser, first visit the
[OpenInlets page] (this README.md file as a hosted HTML page). Then drag one
of the __[JavaScript Bookmarks](#javascript-bookmarks)__ below to the
Favorites bar or right-click and add it as bookmark favorite.

For mobile platforms, it may be easiest to add bookmarks using a desktop
browser and then sync to a mobile device. On platforms that don't allow drag
and drop bookmark installation, you can also try using the alternative
__[URL-based Setup](#url-based-setup)__.

### JavaScript Bookmarks

GitHub infrastructure prevents "drag & drop" install directly from the
README.md preview. Use the [OpenInlets page] to drag & drop the bookmarklet
links below on your desktop browser's favorites bar.

+ __[deLighter] v1.3.0__: Effectively de-highlights any highlighted text
fragment on the current page. Uses `document.location.reload()` to reload the
page to de-highlight it. (It's a cross-platform companion to the
__Linklighter__ bookmarklet, below.)

+ __[FYI] v3.3.0__: Select text on a web page and fire off an email that
quotes the selection and includes the page title and URL. "FYI" opens a new
email with the page title in the subject line, the page title repeated again
in the body, along with the selected text (if any text was selected), and the
URL of the original page.

+ __[IsItAws] v1.3.4__: Check the current page host to determine if it runs on
AWS. This bookmarklet works with most browsers on most platforms.

+ __[KillStickyHeaders] v2.0.0__: Find & delete all fixed position elements of
HTML body element. Cross-platform.

+ __[Linklighter] v2.1.0__: Use the current text selection on the active web
page to generate a URL that will highlight the selected text when opened in a
modern browser. If a new URL is generated, Linklighter ask to open it in a new
window to preview the highlight, and copy the new URL to the clipboard. (See
deLighter above, as a companion bookmarklet that un-highlights the newly
opened window.) Linklighter works with recent releases of Safari on iPhone,
iPad, and Mac, and also works with Google Chrome on desktops.

+ __[OpenInBrave] v1.1.0__: Open the current web page in the Brave app on iOS.

+ __[OpenInFirefox] v1.6.0__: Open the current web page in the Firefox app for
iOS.

+ __[OpenInFirefox-Focus] v1.1.0__: Open the current web page in the Firefox
Focus app for iOS.

+ __[OpenInFirefox-Private] v1.1.0__: Open the current web page in private
mode of the Firefox app for iOS.

+ __[OpenInGoodReader] v1.5.0__: When viewing a PDF in Mobile Safari, open or
download the same PDF in GoodReader.

+ __[OpenInTextastic] v1.1.0__: Open the current web page in the Textastic app
on iOS. Download the server response of the current HTTP URL, save it in the
root directory of the local (Textastic) file system, and then open it in the
editor. Handy to view the source code of a web page or download a raw file.

+ __[OpenInWorkingCopy] v1.6.0__: When viewing a BitBucket _or_ Github
repository in Mobile Safari, show the same repo in the Working Copy iOS app
(cloning the repo locally if necessary).

+ __[OpenURLParam] v1.1.0__: Work-around for blocked navigation from certain
ad or tracking blockers. If the current URL contains a parameter in the form
of `url=...` this bookmarklet will parse the `url` parameter and navigate to
that URL.

+ __[UtmStrip] v2.1.0__: Strips off the UTM query string elements of the
current URL to remove common "urchin" tracking information from youtube, etc.
Also removes Google `/amp/` suffix from URL path. Asks to copy the new URL
to the clipboard. Finally, replaces history & reloads the page. _NOTE:_ This
bookmarklet also works with Safari and Firefox on macOS.

+ __[unskim] v2.0.1__: Bypass redirect and affiliate link wrappers by
detecting common URL parameters (like `url=`, `destination=`, `redirect=`,
etc.) and navigating directly to the target URL. Also handles Safari DNS error
pages when a redirect service is blocked, extracting the intended destination
from the error message.

+ __[x-man] v1.3.1__: Using the selected text in browser, create a
`x-man-page://` link to the corresponding man page and offer to place that
link on the clipboard. When using Safari on Mac, the bookmarklet will use
Safari to open the corresponding man page with yellow highlighting in
Terminal.app using the `x-man-page://` link. __That URL scheme only works__
__using Safari on macOS__ and the bookmarklet requires that block Pop-ups is
turned off for the corresponding web site. The bookmarklet recognizes manual
sections and will turn a selection like "printf(3)" into a link like
`x-man-page://3/printf`. However a selection of "printf" or "printf(1)" will
result in a streamlined link of `x-man-page://printf` (that implies "1" or the
first entry found). The bookmarklet will post an alert if pop-ups are blocked
or warn when using a browser where the link can't be used to open Terminal.
So far it's known to open Terminal from Safari 17 and Orion 0.99. It creates
formatted links when using Microsoft Edge, Mozilla Firefox, Google Chrome,
and Safari (Mac, iPhone, & iPad).

### URL-based Setup

Tap a link below. Follow the instructions on the resulting page to turn the
followed link into a bookmark for JavaScript bookmarklet.

+ __Mobile Safari setup link__ -- [Setup deLighter] v1.3.0
+ __Mobile Safari setup link__ -- [Setup FYI] v3.3.0
+ __Mobile Safari setup link__ -- [Setup IsItAws] v1.3.4
+ __Mobile Safari setup link__ -- [Setup KillStickyHeaders] v2.0.0
+ __Mobile Safari setup link__ -- [Setup Linklighter] v2.1.0
+ __Mobile Safari setup link__ -- [Setup OpenInBrave] v1.1.0
+ __Mobile Safari setup link__ -- [Setup OpenInFirefox] v1.6.0
+ __Mobile Safari setup link__ -- [Setup OpenInFirefox-Focus] v1.1.0
+ __Mobile Safari setup link__ -- [Setup OpenInFirefox-Private] v1.1.0
+ __Mobile Safari setup link__ -- [Setup OpenInGoodReader] v1.5.0
+ __Mobile Safari setup link__ -- [Setup OpenInTextastic] v1.1.0
+ __Mobile Safari setup link__ -- [Setup OpenInWorkingCopy] v1.6.0
+ __Mobile Safari setup link__ -- [Setup OpenURLParam] v1.1.0
+ __Mobile Safari setup link__ -- [Setup UtmStrip] v2.1.0
+ __Mobile Safari setup link__ -- [Setup unskim] v2.0.1
+ __Mobile Safari setup link__ -- [Setup x-man] v1.3.1

## Requirements

+ Mobile Safari 11.x or higher (last tested with iOS 26, macOS 26 Safari 26)
+ Corresponding iOS app (_except_ for "delighter", "FYI", "IsItAws",
"Linklighter", "unskim", "UTMStrip", and "x-man" bookmarklets).

### Notes

Bookmarklets do _not_ work in Google Chrome, Ghostery and DuckDuckGo _iOS_
apps due to restrictions of those apps on `javascript:` URL bookmarks.

## License

MIT License - <http://opensource.org/licenses/mit-license.php>

## Source Code Notes

The `src/` directory has human readable TypeScript, written in a way to
facilitate testing. The `dist/` directory has minified code that has a
`javascript:` URL protocol prefix and should be shorter. The `void'x.y.z'` at
the end the bookmarklet URL code serves two purposes.

1. It prevents the browser from navigating to another page when the bookmark
   is used.
2. It is a convenient place to embed a string indicating the `semver` version
   of the bookmark.

## Build

Clone the repository. If `node` is not installed go get it from
[nodejs.org][nodejs]. Finally change to the `OpenInlets` directory and install
the dependencies into the project before building.

```bash
git clone https://github.com/mobilemind/OpenInlets.git
cd OpenInlets
npm install
npm run build
```

Note that [nodejs] and [npm] are required. The lines above will install
dependencies defined in `package.json`. You can update dependencies using
`npm update` at any time or just invoke `npm run build` to re-build the
OpenInlets `dist/` directory.

## URL Scheme Notes (References)

Each bookmarklet does some rudimentary check and then redirects to an app
using a URL protocol scheme.

+ __deLighter__: Does _not_ use a URL protocol scheme. Checks the current URL
  for a '#' and if found, reloads the page to clear the highlight.
+ __FYI__: Uses the `mailto:` protocol scheme to open a new email with the
  page title in the subject line, the page title repeated again in the body,
  along with the selected text (if any text was selected), and the URL of the
  original page. Based on [fyi-bookmarklets](https://github.com/mobilemind/fyi-bookmarklets)
  this is the webkit version from that repo.
+ __IsItAws__ - Does _not_ use a URL protocol scheme. Rather it uses the
  lambda [IsItOnAWS.com] functions created by Tim Bray. For details, see
  [Is it on AWS? Domain Identification Using AWS Lambda][IsItOnAWS Blog Post].
+ __KillStickyHeaders__ - Does _not_ use a URL protocol scheme. Removes HTML
  child elements of `<body>` that have a fixed position. See
  [Kill sticky headers][Kill sticky headers].
+ __Linklighter__: Does _not_ use a URL protocol scheme. Gets the current
  selection and uses it to create a "Text Fragment" URL (e.g., appends `#:~:text=…`
  to the current URL. Browsers interpret this and when opening such a URL, they
  scroll to the first matching selection and highlight that text. Bookmarklet
  logic optimizes fragment. Depending on the selection, it will use the whole
  selection, a start/end fragment pair, and/or a prefix or suffix. Browsers
  will highlight the first "best" match. To learn more about text fragment
  highlighting, refer to [Text fragments][Text fragments]. Works with Safari
  on Apple platforms, and Google Chrome for desktops.
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

4.0.0 MAJOR RELEASE - Migrated to TypeScript for type safety & more, updated
entire build system with more thorough checks, refined CI/CD. No more `grunt`
for build process. Switched from Uglify-js to Terser for JavaScript compression.

3.7.0 adds "unskim" bookmarklet to bypass redirect and affiliate link wrappers

3.6.2 add some supply chain hardening and a release process.

3.6.1 switch to for node >=24.11.0 (LTS), and npm >=11.6.1

3.5.9 uses engineStrict=true in package.json for node >=24.0, npm >=11.4

3.5.0 drop "OpenInGoogleChrome" & "OpenInGoogleMaps" bookmarklets

3.4.0 adds "FYI" bookmarklet, removes deprecated 1Password bookmarklets,
updates deploy task

3.3.0 updates Linklighter 1.1.0, UtmStrip 1.7.0, and x-man 1.10 to ask to copy
their results to the clipboard

3.2.0 adds x-man bookmarklet for `x-man-page://` URL scheme

3.1.0 add deLighter and Linklighter bookmarklets; bump to node 21.0+

3.0.0 Switch to node 20 LTS release

2.9.1 Regex & HTML safe URL encoding, drop deprecated utils

2.8.0 bump to node 18.8+

2.7.5 Drop Url2DocLink, WindowResize, WindowSize; Tighten UrlEncoding

2.7.0 Remove bookmarklets for discontinued apps (Blogsy, CodeBucket, CodeHub,
iOctocat)

2.6.0 switch to node 16

2.4.1 UtmStrip streamlined for Google Analytics & Youtube; added Matomo

2.3.0  significant updates to utmstrip; update utmstrip & overall version

2.2.0  Adds "LoginESA" for WiFi login; Updates source indent to 4 spaces.

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

1.5.0  Add OpenInCodeBucket & OpenInCodeHub; bump version of OpenInWorkingCopy
and overall version

1.4.1  Added OpenInWorkingCopy and bumped overall version

1.3.0: Added IsItAws and bumped overall version as this is significant change

1.2.0: overall package # bumped due to significant ES6/eslint driven changes

1.1.0: update to LTS versions of `node`; use `grunt-contrib-...` >= 1.0.0;
bump semver

1.0.0: September 19, 2015 - update package.json to use `node: ">=0.12.0"`;
baseline semver to 1.0.0

0.0.15: August 2, 2015 - update build dependencies and README, no functional
changes

0.0.10: January 22, 2015 - update to `grunt-contrib-jshint` 0.11.x; add some
stricter checks

0.0.8: August 19, 2014 - Add OpenInGoogleChrome; update version

0.0.6: August 18, 2014 - Add OpenInBlogsy; update version

0.0.1: July 28, 2014 - Bookmarklets build via `grunt`, `grunt deploy` updates
`README.md`, version numbers not updating

0.0.0: July 22, 2014 - Initial commit, smushing together multiple bookmarklet
repos I had; doesn't build yet

<!--- JavaScript links -->

[deLighter]: javascript:'use%20strict'%3Bdocument.location.reload()%3Bvoid'1.3.0' "deLighter"
[FYI]: javascript:'use%20strict'%3B(()=%3E%7Bconst%20e=encodeURIComponent(document.title)%2Ct='%250A'%2Cn=window.getSelection()%2Co=n%26%26'Range'===n.type%26%26n.rangeCount%3E0%3Fn.getRangeAt(0).toString():''%3Blocation.href=%60mailto:%3Fsubject=fyi:%24%7Be%7D%26body=%24%7Be%7D%24%7Bt%7D%24%7BencodeURIComponent(document.URL)%7D%24%7Bt%7D---%24%7Bt%7D%24%7BencodeURIComponent(o)%7D%24%7Bt%7D%24%7Bt%7D%60%7D)()%3Bvoid'3.3.0' "FYI"
[IsItAws]: javascript:'use%20strict'%3Blocation.href='https:%2F%2Fisitonaws.com%2Fdiscover%3Fname='%2Blocation.host%3Bvoid'1.3.4' "IsItAws"
[KillStickyHeaders]: javascript:'use%20strict'%3B(()=%3E%7Bconst%20o=document.querySelectorAll('body%20%2A')%3Bfor(const%20e%20of%20Array.from(o))if('fixed'===getComputedStyle(e).position)%7Bconst%20o=e.parentNode%3Bo%26%26o.removeChild(e)%7D%7D)()%3Bvoid'2.0.0' "KillStickyHeaders"
[Linklighter]: javascript:'use%20strict'%3B(()=%3E%7Bconst%20t=encodeURIComponent%2Ce=window.getSelection()%3Bif(!e)return%3Bconst%20n=e.toString()%2Co=n.length%2Ci=document.URL%2Cs=i.indexOf('%23')%3Blet%20r=i%2Cc=''%2Cl=''%2Ca=''%3Bif(e.rangeCount%3E0%26%26n%26%26(document.body.textContent%7C%7C'').split(n).length-1%3E1)%7Bconst%20t=e.getRangeAt(0)%2Cn=t.commonAncestorContainer.textContent%7C%7C''%2C%7BstartOffset:o%2CendOffset:i%7D=t%2Cs=Math.max(0%2Co-20)%3Bif(l=n.substring(s%2Co).trim()%2Cs%3E0%26%26'%20'!==n.charAt(s-1))%7Bconst%20t=l.indexOf('%20')%3Bt%3E0%26%26(l=l.substring(t%2B1))%7Dconst%20r=Math.min(n.length%2Ci%2B20)%3Bif(a=n.substring(i%2Cr).trim()%2Cr%3Cn.length%26%26'%20'!==n.charAt(r))%7Bconst%20t=a.lastIndexOf('%20')%3Bt%3E0%26%26(a=a.substring(0%2Ct))%7D%7Dif(e.removeAllRanges()%2Cn%26%26''!==n)%7Bs%3E-1%26%26(r=r.substring(0%2Cs))%3Blet%20e=''%3Bif(l%26%26(e=t(l)%2B'-%2C')%2C80%3Eo)c=n%2Ce%2B=t(n)%3Belse%7Blet%20i=~~(o%2F2-2)%3Bo%3E150%3Fi=48:o%3E100%26%26(i=~~(o%2F3))%3Blet%20s=n.substring(0%2Ci)%2Cr=n.slice(o-i)%3Bconst%20l=s.lastIndexOf('%20')%3Bl%3Ei%2F2%26%26(s=s.substring(0%2Cl))%3Bconst%20a=r.indexOf('%20')%3Ba%3E-1%26%26i%2F2%3Ea%26%26(r=r.substring(a%2B1))%2Cc=s%2B'%E2%80%A6'%2Ce%2B=%60%24%7Bt(s)%7D%2C%24%7Bt(r)%7D%60%7Da%26%26(e%2B='%2C-'%2Bt(a))%2Cr%2B='%23:~:text='%2Be%2Cr=r.replace(%2F(%250A%7C%250D%7C%2509%7C%2520)%2B%24%2F%2C'')%2Cr=r.replace(%2F(%2520)%7B2%2C%7D%2Fg%2C'%2520')%2Cr=r.replace(%2F%23%23%2B:~:text=%2F%2C'%23:~:text=')%7Dif(r!==i%26%26confirm(%60Open%20URL%20with%20highlight%20on%20%22%24%7Bc%7D%22%20and%20copy%20URL%20to%20clipboard%3F%60))%7Bnavigator.clipboard.writeText(r).catch(()=%3E%7Balert('Could%20not%20copy%20to%20clipboard.%20URL%20is%20in%20the%20new%20tab.')%7D)%3Bconst%20t=window.open(r%2C'%5Fblank')%3Bt%3Ft.opener=null:alert('Popup%20blocked.%20URL%20copied%20to%20clipboard.')%7D%7D)()%3Bvoid'2.1.0' "Linklighter"
[OpenInBrave]: javascript:'use%20strict'%3Bif(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href='brave:%2F%2Fopen-url%3Furl='%2BencodeURIComponent(location.href)%3Bvoid'1.1.0' "OpenInBrave"
[OpenInFirefox]: javascript:'use%20strict'%3Bif(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href='firefox:%2F%2Fopen-url%3Furl='%2BencodeURIComponent(location.href)%3Bvoid'1.6.0' "OpenInFirefox"
[OpenInFirefox-Focus]: javascript:'use%20strict'%3Bif(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href=%60firefox-focus:%2F%2Fopen-url%3Furl=%24%7BencodeURIComponent(location.href)%7D%26private=true%60%3Bvoid'1.1.0' "OpenInFirefox-Focus"
[OpenInFirefox-Private]: javascript:'use%20strict'%3Bif(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href=%60firefox:%2F%2Fopen-url%3Furl=%24%7BencodeURIComponent(location.href)%7D%26private=true%60%3Bvoid'1.1.0' "OpenInFirefox-Private"
[OpenInGoodReader]: javascript:'use%20strict'%3Bif(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26%2F%5C.pdf(%24%7C%5C%3F)%2F.test(location.href))location.href='gr'%2Blocation.href%3Bvoid'1.5.0' "OpenInGoodReader"
[OpenInTextastic]: javascript:'use%20strict'%3Bif(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href=location.href.replace(%2F%5Ehttps%3F%2F%2C'textastic')%3Bvoid'1.1.0' "OpenInTextastic"
[OpenInWorkingCopy]: javascript:'use%20strict'%3Bif(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26('bitbucket.org'===location.host%7C%7C'github.com'===location.host))location.href=%60working-copy:%2F%2Fshow%3Fremote=%24%7BencodeURIComponent(location.href.split('%2F').slice(0%2C5).join('%2F'))%7D.git%60%3Bvoid'1.6.0' "OpenInWorkingCopy"
[OpenURLParam]: javascript:'use%20strict'%3Bconst%20c=location.search.search('url=')%3Bif(c%3E-1)%7Blet%20o=location.search.slice(4%2Bc)%3Bconst%20t=o.indexOf('%26')%3Bif(t%3E-1%26%26(o=o.slice(0%2Ct))%2Co.length%3E5)%7Bconst%20c=decodeURIComponent(o)%3Btry%7Bconst%20o=new%20URL(c%2Clocation.href)%3B'https:'===o.protocol%26%26location.replace(o.href)%7Dcatch%7B%7D%7D%7Dvoid'1.1.0' "OpenURLParam"
[UtmStrip]: javascript:'use%20strict'%3B(()=%3E%7Bconst%20e=location.pathname%2Ci=location.search%3Bif(3%3Ei.length%26%26!e.includes('%2Famp'))return%3Blet%20c=e%2Ct=i%3Bconst%20a=location.hostname%2Cn=(e%2Ci)=%3Ee.replace(i%2C'%241')%3Bif(a.includes('aliexpress.')%26%26(t=n(t%2C%2F(%5B%3F%26%5D)aff%5F(platform%7Ctrace%5Fkey)=%5B%5E%26%5D%2B%2Fgi)%2Ct=n(t%2C%2F(%5B%3F%26%5D)algo%5F%5Bep%5Dvid=%5B%5E%26%5D%2B%2Fg)%2Ct=n(t%2C%2F(%5B%3F%26%5D)(btsid%7Cws%5Fab%5Ftest)=%5B%5E%26%5D%2B%2Fg)%2Ct=n(t%2C%2F(%5B%3F%26%5D)s%5Bcp%5Dm=%5B%5E%26%5D%2B%2Fg))%2C%2F(%7C%5C.)amazon%5C.com%24%2F.test(a)%26%26(t=n(t%2C%2F(%5B%3F%26%5D)(%5Fencoding%7Cie%7ClinkCode%7ClinkId%7Cpf%7Cpsc%7Cref%5F%7Ctag)=%5B%5E%26%5D%2B%2Fgi)%2Ct=n(t%2C%2F(%5B%3F%26%5D)p%5Bdf%5D%5Frd%5F.%2A%3F=%5B%5E%26%5D%2B%2Fgi)%2Ct=n(t%2C%2F(%5B%3F%26%5D)(content-id%7Ccrid%7Ccv%5Fct%5Fcx%7Clanguage%7Cqid%7Csprefix%7Csr%7Cth)=%5B%5E%26%5D%2B%2Fg)%2Ct=n(t%2C%2F(%5B%3F%26%5D)asc(%5Fcampaign%7C%5Frefurl%7C%5Fsource%7Csubtag)=%5B%5E%26%5D%2B%2Fg)%2Ct=n(t%2C%2F(%5B%3F%26%5D)dib(%5Ftag)%3F=%5B%5E%26%5D%2B%2Fg))%2Ct.includes('fb%5F')%26%26(t=n(t%2C%2F(%5B%3F%26%5D)fb%5F(action%5Fids%7Caction%5Ftypes%7Cref%7Csource)=%5B%5E%26%5D%2B%2Fgi)%2Ct=n(t%2C%2F(%5B%3F%26%5D)(fbclid%7Chrc%7Crefsrc)=%5B%5E%26%5D%2B%2Fgi))%2Ct.includes('action%5F')%26%26(t=n(t%2C%2F(%5B%3F%26%5D)action%5F(object%7Cref%7Ctype)%5Fmap=%5B%5E%26%5D%2B%2Fgi))%2Ct=n(t%2C%2F(%5B%3F%26%5D)(assetType%7CelqTrack%7Cmkt%5Ftok%7CoriginalReferer%7Creferrer%7Cterminal%5Fid%7Ctrk%7CtrkCampaign%7CtrkInfo)=%5B%5E%26%5D%2B%2Fgi)%2Ct.toLowerCase().includes('id=')%26%26(t=n(t%2C%2F(%5B%3F%26%5D)(an%7Casset%7Ccampaign%7Ce%7Cgcl%7Crecipient%7Csite)id=%5B%5E%26%5D%2B%2Fgi))%2C(t.includes('ga%5F')%7C%7Ct.includes('utm%5F'))%26%26(t=n(t%2C%2F(%5B%3F%26%5D)(ga%7Cutm)%5F(campaign%7Ccid%7Ccontent%7Cdesign%7Cmedium%7Cname%7Cplace%7Cpubreferrer%7Creader%7Csource%7Cswu%7Cterm%7Cuserid%7Cviz%5Fid)=%5B%5E%26%5D%2B%2Fgi)%2Ct=n(t%2C%2F(%5B%3F%26%5D)gcl(id%7Csrc)=%5B%5E%26%5D%2B%2Fgi))%2C(%2F(m%7Cwww)%5C.youtube%5C.com%24%2F.test(a)%7C%7C'youtu.be'===a%7C%7C'www.youtube-nocookie.com'===a)%26%26(t=n(t%2C%2F(%5B%3F%26%5D)(ac%7Cannotation%5Fid%7Capp%7Cfeature%7Cgclid%7Ckw%7Csrc%5Fvid)=%5B%5E%26%5D%2B%2Fgi))%2C%2F%5B%3F%26%5D%5Fhs(enc%7Cmi)=%2F.test(t)%26%26(t=n(t%2C%2F(%5B%3F%26%5D)%5Fhs(enc%7Cmi)=%5B%5E%26%5D%2B%2Fgi))%2Ct.includes('hmb%5F')%26%26(t=n(t%2C%2F(%5B%3F%26%5D)hmb%5F(campaign%7Cmedium%7Csource)=%5B%5E%26%5D%2B%2Fgi))%2Ct.includes('cm%5F')%26%26(t=n(t%2C%2F(%5B%3F%26%5D)cm%5F(mmc%7Cmmca%5Cd%2B%7Cre%7Csp)=%5B%5E%26%5D%2B%2Fgi)%2Ct=n(t%2C%2F(%5B%3F%26%5D)manual%5Fcm%5Fmmc=%5B%5E%26%5D%2B%2Fgi))%2C%2F%5B%3F%26%5Dmc%5F%5Bce%5Did=%2F.test(t)%26%26(t=n(t%2C%2F(%5B%3F%26%5D)mc%5F%5Bce%5Did=%5B%5E%26%5D%2B%2Fgi))%2C%2F%5B%3F%26%5D(iesrc%7Cmkt%5Ftok)=%2F.test(t)%26%26(t=n(t%2C%2F(%5B%3F%26%5D)(iesrc%7Cmkt%5Ftok)=%5B%5E%26%5D%2B%2Fgi))%2Ct.includes('pk%5F')%26%26(t=n(t%2C%2F(%5B%3F%26%5D)pk%5F(campaign%7Ccontent%7Ckwd%7Cmedium%7Csource)=%5B%5E%26%5D%2B%2Fgi))%2Ct=t.replace(%2F%26%26%2B%2Fg%2C'%26').replace(%2F%26%24%2F%2C'')%2Ct='%3F'===t%5B0%5D%3Ft.replace(%2F%5E%5C%3F%26%2F%2C'%3F'):'%3F'%2Bt%2Ct=3%3Et.length%3F'':t%2Cc=c.replace(%2F%5C%2Famp%5C%2F%3F%24%2F%2C'')%2C(i!==t%7C%7Ce!==c)%26%26confirm('Update%20history%20and%20copy%20cleaned%20URL%20to%20clipboard%3F'))%7Bconst%20e=%60%24%7Blocation.protocol%7D%2F%2F%24%7Blocation.host%7D%24%7Bc%7D%24%7Bt%7D%24%7Blocation.hash%7D%60%3Bnavigator.clipboard.writeText(e)%2Chistory.replaceState(null%2C''%2Ce)%3Bconst%20i=window.open(e%2C'%5Fself'%2C'noreferrer')%3Bi%26%26(i.opener=null)%7D%7D)()%3Bvoid'2.1.0' "UtmStrip"
[unskim]: javascript:'use%20strict'%3B(()=%3E%7Blet%20e=new%20URL(document.location.href)%3Bif('safari-resource:%2FErrorPage.html'===e.href)%7Bconst%20t=document.querySelector('p.error-message')%3F.textContent%3F.match(%2FSafari%20can't%20open%20the%20page%20%22(https%3F:%5B%5E%22%5D%2B)%22%2F)%3F.%5B1%5D%3Bt%26%26(e=new%20URL(t))%7Dif(''===e.search)return%3Bconst%20t=new%20URLSearchParams(e.search)%2Cr=%5B'url'%2C'destination'%2C'redirect'%2C'target'%2C'goto'%2C'u'%2C'dest'%2C'link'%2C'out'%5D.filter(e=%3Et.has(e)).map(e=%3E%7Bconst%20r=t.get(e)%3Breturn%20r%3FdecodeURIComponent(r):''%7D).find(e=%3Ee.match(%2F%5Ehttps%3F:%2F))%3Br%26%26window.location.replace(new%20URL(r))%7D)()%3Bvoid'2.0.1' "unskim"
[x-man]: javascript:'use%20strict'%3B(()=%3E%7Bconst%20i=navigator.userAgent%2Cn=i.includes('Chrome%2F')%7C%7Ci.includes('Firefox%2F')%7C%7Ci.includes('Brave%2F')%7C%7Ci.includes('Edg%2F')%2Co=i.includes('Safari%2F')%2Ct=!n%26%26!o%2Ca=navigator.platform.startsWith('Mac')%26%26o%26%26!n%26%26!t%26%26!navigator.maxTouchPoints%26%262%3Enavigator.maxTouchPoints%2Ce=window.getSelection()%3Bif(!e)return%3Bconst%20l=e.toString().split('%5Cn')%5B0%5D.trim()%3Blet%20r='x-man-page:%2F%2F'%3Bconst%20c=l.match(%2F%5E(.%2A%3F)%5C((%5Cd)%5C)%24%2F)%3Bif(r%2B=c%3F'1'===c%5B2%5D%3Fc%5B1%5D:%60%24%7Bc%5B2%5D%7D%2F%24%7Bc%5B1%5D%7D%60:l%2Cl)%7Bif(confirm(%60Link%20for%20%22%24%7Bl%7D%22%20is:%20%24%7Br%7D%5Cn%5CnCopy%20to%20clipboard%3F%60))%7Blet%20i=''%3Bif(navigator.clipboard%3Fnavigator.clipboard.writeText(r):(i=%60Unable%20to%20copy%20%22%24%7Br%7D%22%20to%20clipboard.%60%2Cr='')%2Ca%26%26''!==r)%7Blet%20n=null%3Btry%7Bn=window.open(r)%2Cn%26%26(n.opener=null)%7Dcatch(n)%7Bi=%60Popup%20window%20blocked.%20Clipboard%20contains%20%22%24%7Br%7D%22%60%7Dfinally%7Bwindow.focus()%2Cnull!==n%26%26setTimeout(()=%3E%7Bn%26%26n.close()%7D%2C3333)%7D%7Delse''!==r%26%26(i=%60Unable%20to%20open%20new%20link%20with%20Terminal.%20Clipboard%20contains%20%22%24%7Br%7D%22%60)%3B''!==i%26%26alert(i)%7De.empty()%7D%7D)()%3Bvoid'1.3.1' "x-man"

<!--- Setup links -->

[Setup deLighter]: https://mobilemind.github.io/OpenInlets/x/#javascript:'use%20strict'%3Bdocument.location.reload()%3Bvoid'1.3.0' "Setup deLighter"
[Setup FYI]: https://mobilemind.github.io/OpenInlets/x/#javascript:'use%20strict'%3B(()=%3E%7Bconst%20e=encodeURIComponent(document.title)%2Ct='%250A'%2Cn=window.getSelection()%2Co=n%26%26'Range'===n.type%26%26n.rangeCount%3E0%3Fn.getRangeAt(0).toString():''%3Blocation.href=%60mailto:%3Fsubject=fyi:%24%7Be%7D%26body=%24%7Be%7D%24%7Bt%7D%24%7BencodeURIComponent(document.URL)%7D%24%7Bt%7D---%24%7Bt%7D%24%7BencodeURIComponent(o)%7D%24%7Bt%7D%24%7Bt%7D%60%7D)()%3Bvoid'3.3.0' "Setup FYI"
[Setup IsItAws]: https://mobilemind.github.io/OpenInlets/x/#javascript:'use%20strict'%3Blocation.href='https:%2F%2Fisitonaws.com%2Fdiscover%3Fname='%2Blocation.host%3Bvoid'1.3.4' "Setup IsItAws"
[Setup KillStickyHeaders]: https://mobilemind.github.io/OpenInlets/x/#javascript:'use%20strict'%3B(()=%3E%7Bconst%20o=document.querySelectorAll('body%20%2A')%3Bfor(const%20e%20of%20Array.from(o))if('fixed'===getComputedStyle(e).position)%7Bconst%20o=e.parentNode%3Bo%26%26o.removeChild(e)%7D%7D)()%3Bvoid'2.0.0' "Setup KillStickyHeaders"
[Setup Linklighter]: https://mobilemind.github.io/OpenInlets/x/#javascript:'use%20strict'%3B(()=%3E%7Bconst%20t=encodeURIComponent%2Ce=window.getSelection()%3Bif(!e)return%3Bconst%20n=e.toString()%2Co=n.length%2Ci=document.URL%2Cs=i.indexOf('%23')%3Blet%20r=i%2Cc=''%2Cl=''%2Ca=''%3Bif(e.rangeCount%3E0%26%26n%26%26(document.body.textContent%7C%7C'').split(n).length-1%3E1)%7Bconst%20t=e.getRangeAt(0)%2Cn=t.commonAncestorContainer.textContent%7C%7C''%2C%7BstartOffset:o%2CendOffset:i%7D=t%2Cs=Math.max(0%2Co-20)%3Bif(l=n.substring(s%2Co).trim()%2Cs%3E0%26%26'%20'!==n.charAt(s-1))%7Bconst%20t=l.indexOf('%20')%3Bt%3E0%26%26(l=l.substring(t%2B1))%7Dconst%20r=Math.min(n.length%2Ci%2B20)%3Bif(a=n.substring(i%2Cr).trim()%2Cr%3Cn.length%26%26'%20'!==n.charAt(r))%7Bconst%20t=a.lastIndexOf('%20')%3Bt%3E0%26%26(a=a.substring(0%2Ct))%7D%7Dif(e.removeAllRanges()%2Cn%26%26''!==n)%7Bs%3E-1%26%26(r=r.substring(0%2Cs))%3Blet%20e=''%3Bif(l%26%26(e=t(l)%2B'-%2C')%2C80%3Eo)c=n%2Ce%2B=t(n)%3Belse%7Blet%20i=~~(o%2F2-2)%3Bo%3E150%3Fi=48:o%3E100%26%26(i=~~(o%2F3))%3Blet%20s=n.substring(0%2Ci)%2Cr=n.slice(o-i)%3Bconst%20l=s.lastIndexOf('%20')%3Bl%3Ei%2F2%26%26(s=s.substring(0%2Cl))%3Bconst%20a=r.indexOf('%20')%3Ba%3E-1%26%26i%2F2%3Ea%26%26(r=r.substring(a%2B1))%2Cc=s%2B'%E2%80%A6'%2Ce%2B=%60%24%7Bt(s)%7D%2C%24%7Bt(r)%7D%60%7Da%26%26(e%2B='%2C-'%2Bt(a))%2Cr%2B='%23:~:text='%2Be%2Cr=r.replace(%2F(%250A%7C%250D%7C%2509%7C%2520)%2B%24%2F%2C'')%2Cr=r.replace(%2F(%2520)%7B2%2C%7D%2Fg%2C'%2520')%2Cr=r.replace(%2F%23%23%2B:~:text=%2F%2C'%23:~:text=')%7Dif(r!==i%26%26confirm(%60Open%20URL%20with%20highlight%20on%20%22%24%7Bc%7D%22%20and%20copy%20URL%20to%20clipboard%3F%60))%7Bnavigator.clipboard.writeText(r).catch(()=%3E%7Balert('Could%20not%20copy%20to%20clipboard.%20URL%20is%20in%20the%20new%20tab.')%7D)%3Bconst%20t=window.open(r%2C'%5Fblank')%3Bt%3Ft.opener=null:alert('Popup%20blocked.%20URL%20copied%20to%20clipboard.')%7D%7D)()%3Bvoid'2.1.0' "Setup Linklighter"
[Setup OpenInBrave]: https://mobilemind.github.io/OpenInlets/x/#javascript:'use%20strict'%3Bif(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href='brave:%2F%2Fopen-url%3Furl='%2BencodeURIComponent(location.href)%3Bvoid'1.1.0' "Setup OpenInBrave"
[Setup OpenInFirefox]: https://mobilemind.github.io/OpenInlets/x/#javascript:'use%20strict'%3Bif(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href='firefox:%2F%2Fopen-url%3Furl='%2BencodeURIComponent(location.href)%3Bvoid'1.6.0' "Setup OpenInFirefox"
[Setup OpenInFirefox-Focus]: https://mobilemind.github.io/OpenInlets/x/#javascript:'use%20strict'%3Bif(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href=%60firefox-focus:%2F%2Fopen-url%3Furl=%24%7BencodeURIComponent(location.href)%7D%26private=true%60%3Bvoid'1.1.0' "Setup OpenInFirefox-Focus"
[Setup OpenInFirefox-Private]: https://mobilemind.github.io/OpenInlets/x/#javascript:'use%20strict'%3Bif(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href=%60firefox:%2F%2Fopen-url%3Furl=%24%7BencodeURIComponent(location.href)%7D%26private=true%60%3Bvoid'1.1.0' "Setup OpenInFirefox-Private"
[Setup OpenInGoodReader]: https://mobilemind.github.io/OpenInlets/x/#javascript:'use%20strict'%3Bif(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26%2F%5C.pdf(%24%7C%5C%3F)%2F.test(location.href))location.href='gr'%2Blocation.href%3Bvoid'1.5.0' "Setup OpenInGoodReader"
[Setup OpenInTextastic]: https://mobilemind.github.io/OpenInlets/x/#javascript:'use%20strict'%3Bif(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href=location.href.replace(%2F%5Ehttps%3F%2F%2C'textastic')%3Bvoid'1.1.0' "Setup OpenInTextastic"
[Setup OpenInWorkingCopy]: https://mobilemind.github.io/OpenInlets/x/#javascript:'use%20strict'%3Bif(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26('bitbucket.org'===location.host%7C%7C'github.com'===location.host))location.href=%60working-copy:%2F%2Fshow%3Fremote=%24%7BencodeURIComponent(location.href.split('%2F').slice(0%2C5).join('%2F'))%7D.git%60%3Bvoid'1.6.0' "Setup OpenInWorkingCopy"
[Setup OpenURLParam]: https://mobilemind.github.io/OpenInlets/x/#javascript:'use%20strict'%3Bconst%20c=location.search.search('url=')%3Bif(c%3E-1)%7Blet%20o=location.search.slice(4%2Bc)%3Bconst%20t=o.indexOf('%26')%3Bif(t%3E-1%26%26(o=o.slice(0%2Ct))%2Co.length%3E5)%7Bconst%20c=decodeURIComponent(o)%3Btry%7Bconst%20o=new%20URL(c%2Clocation.href)%3B'https:'===o.protocol%26%26location.replace(o.href)%7Dcatch%7B%7D%7D%7Dvoid'1.1.0' "Setup OpenURLParam"
[Setup UtmStrip]: https://mobilemind.github.io/OpenInlets/x/#javascript:'use%20strict'%3B(()=%3E%7Bconst%20e=location.pathname%2Ci=location.search%3Bif(3%3Ei.length%26%26!e.includes('%2Famp'))return%3Blet%20c=e%2Ct=i%3Bconst%20a=location.hostname%2Cn=(e%2Ci)=%3Ee.replace(i%2C'%241')%3Bif(a.includes('aliexpress.')%26%26(t=n(t%2C%2F(%5B%3F%26%5D)aff%5F(platform%7Ctrace%5Fkey)=%5B%5E%26%5D%2B%2Fgi)%2Ct=n(t%2C%2F(%5B%3F%26%5D)algo%5F%5Bep%5Dvid=%5B%5E%26%5D%2B%2Fg)%2Ct=n(t%2C%2F(%5B%3F%26%5D)(btsid%7Cws%5Fab%5Ftest)=%5B%5E%26%5D%2B%2Fg)%2Ct=n(t%2C%2F(%5B%3F%26%5D)s%5Bcp%5Dm=%5B%5E%26%5D%2B%2Fg))%2C%2F(%7C%5C.)amazon%5C.com%24%2F.test(a)%26%26(t=n(t%2C%2F(%5B%3F%26%5D)(%5Fencoding%7Cie%7ClinkCode%7ClinkId%7Cpf%7Cpsc%7Cref%5F%7Ctag)=%5B%5E%26%5D%2B%2Fgi)%2Ct=n(t%2C%2F(%5B%3F%26%5D)p%5Bdf%5D%5Frd%5F.%2A%3F=%5B%5E%26%5D%2B%2Fgi)%2Ct=n(t%2C%2F(%5B%3F%26%5D)(content-id%7Ccrid%7Ccv%5Fct%5Fcx%7Clanguage%7Cqid%7Csprefix%7Csr%7Cth)=%5B%5E%26%5D%2B%2Fg)%2Ct=n(t%2C%2F(%5B%3F%26%5D)asc(%5Fcampaign%7C%5Frefurl%7C%5Fsource%7Csubtag)=%5B%5E%26%5D%2B%2Fg)%2Ct=n(t%2C%2F(%5B%3F%26%5D)dib(%5Ftag)%3F=%5B%5E%26%5D%2B%2Fg))%2Ct.includes('fb%5F')%26%26(t=n(t%2C%2F(%5B%3F%26%5D)fb%5F(action%5Fids%7Caction%5Ftypes%7Cref%7Csource)=%5B%5E%26%5D%2B%2Fgi)%2Ct=n(t%2C%2F(%5B%3F%26%5D)(fbclid%7Chrc%7Crefsrc)=%5B%5E%26%5D%2B%2Fgi))%2Ct.includes('action%5F')%26%26(t=n(t%2C%2F(%5B%3F%26%5D)action%5F(object%7Cref%7Ctype)%5Fmap=%5B%5E%26%5D%2B%2Fgi))%2Ct=n(t%2C%2F(%5B%3F%26%5D)(assetType%7CelqTrack%7Cmkt%5Ftok%7CoriginalReferer%7Creferrer%7Cterminal%5Fid%7Ctrk%7CtrkCampaign%7CtrkInfo)=%5B%5E%26%5D%2B%2Fgi)%2Ct.toLowerCase().includes('id=')%26%26(t=n(t%2C%2F(%5B%3F%26%5D)(an%7Casset%7Ccampaign%7Ce%7Cgcl%7Crecipient%7Csite)id=%5B%5E%26%5D%2B%2Fgi))%2C(t.includes('ga%5F')%7C%7Ct.includes('utm%5F'))%26%26(t=n(t%2C%2F(%5B%3F%26%5D)(ga%7Cutm)%5F(campaign%7Ccid%7Ccontent%7Cdesign%7Cmedium%7Cname%7Cplace%7Cpubreferrer%7Creader%7Csource%7Cswu%7Cterm%7Cuserid%7Cviz%5Fid)=%5B%5E%26%5D%2B%2Fgi)%2Ct=n(t%2C%2F(%5B%3F%26%5D)gcl(id%7Csrc)=%5B%5E%26%5D%2B%2Fgi))%2C(%2F(m%7Cwww)%5C.youtube%5C.com%24%2F.test(a)%7C%7C'youtu.be'===a%7C%7C'www.youtube-nocookie.com'===a)%26%26(t=n(t%2C%2F(%5B%3F%26%5D)(ac%7Cannotation%5Fid%7Capp%7Cfeature%7Cgclid%7Ckw%7Csrc%5Fvid)=%5B%5E%26%5D%2B%2Fgi))%2C%2F%5B%3F%26%5D%5Fhs(enc%7Cmi)=%2F.test(t)%26%26(t=n(t%2C%2F(%5B%3F%26%5D)%5Fhs(enc%7Cmi)=%5B%5E%26%5D%2B%2Fgi))%2Ct.includes('hmb%5F')%26%26(t=n(t%2C%2F(%5B%3F%26%5D)hmb%5F(campaign%7Cmedium%7Csource)=%5B%5E%26%5D%2B%2Fgi))%2Ct.includes('cm%5F')%26%26(t=n(t%2C%2F(%5B%3F%26%5D)cm%5F(mmc%7Cmmca%5Cd%2B%7Cre%7Csp)=%5B%5E%26%5D%2B%2Fgi)%2Ct=n(t%2C%2F(%5B%3F%26%5D)manual%5Fcm%5Fmmc=%5B%5E%26%5D%2B%2Fgi))%2C%2F%5B%3F%26%5Dmc%5F%5Bce%5Did=%2F.test(t)%26%26(t=n(t%2C%2F(%5B%3F%26%5D)mc%5F%5Bce%5Did=%5B%5E%26%5D%2B%2Fgi))%2C%2F%5B%3F%26%5D(iesrc%7Cmkt%5Ftok)=%2F.test(t)%26%26(t=n(t%2C%2F(%5B%3F%26%5D)(iesrc%7Cmkt%5Ftok)=%5B%5E%26%5D%2B%2Fgi))%2Ct.includes('pk%5F')%26%26(t=n(t%2C%2F(%5B%3F%26%5D)pk%5F(campaign%7Ccontent%7Ckwd%7Cmedium%7Csource)=%5B%5E%26%5D%2B%2Fgi))%2Ct=t.replace(%2F%26%26%2B%2Fg%2C'%26').replace(%2F%26%24%2F%2C'')%2Ct='%3F'===t%5B0%5D%3Ft.replace(%2F%5E%5C%3F%26%2F%2C'%3F'):'%3F'%2Bt%2Ct=3%3Et.length%3F'':t%2Cc=c.replace(%2F%5C%2Famp%5C%2F%3F%24%2F%2C'')%2C(i!==t%7C%7Ce!==c)%26%26confirm('Update%20history%20and%20copy%20cleaned%20URL%20to%20clipboard%3F'))%7Bconst%20e=%60%24%7Blocation.protocol%7D%2F%2F%24%7Blocation.host%7D%24%7Bc%7D%24%7Bt%7D%24%7Blocation.hash%7D%60%3Bnavigator.clipboard.writeText(e)%2Chistory.replaceState(null%2C''%2Ce)%3Bconst%20i=window.open(e%2C'%5Fself'%2C'noreferrer')%3Bi%26%26(i.opener=null)%7D%7D)()%3Bvoid'2.1.0' "Setup UtmStrip"
[Setup unskim]: https://mobilemind.github.io/OpenInlets/x/#javascript:'use%20strict'%3B(()=%3E%7Blet%20e=new%20URL(document.location.href)%3Bif('safari-resource:%2FErrorPage.html'===e.href)%7Bconst%20t=document.querySelector('p.error-message')%3F.textContent%3F.match(%2FSafari%20can't%20open%20the%20page%20%22(https%3F:%5B%5E%22%5D%2B)%22%2F)%3F.%5B1%5D%3Bt%26%26(e=new%20URL(t))%7Dif(''===e.search)return%3Bconst%20t=new%20URLSearchParams(e.search)%2Cr=%5B'url'%2C'destination'%2C'redirect'%2C'target'%2C'goto'%2C'u'%2C'dest'%2C'link'%2C'out'%5D.filter(e=%3Et.has(e)).map(e=%3E%7Bconst%20r=t.get(e)%3Breturn%20r%3FdecodeURIComponent(r):''%7D).find(e=%3Ee.match(%2F%5Ehttps%3F:%2F))%3Br%26%26window.location.replace(new%20URL(r))%7D)()%3Bvoid'2.0.1' "Setup unskim"
[Setup x-man]: https://mobilemind.github.io/OpenInlets/x/#javascript:'use%20strict'%3B(()=%3E%7Bconst%20i=navigator.userAgent%2Cn=i.includes('Chrome%2F')%7C%7Ci.includes('Firefox%2F')%7C%7Ci.includes('Brave%2F')%7C%7Ci.includes('Edg%2F')%2Co=i.includes('Safari%2F')%2Ct=!n%26%26!o%2Ca=navigator.platform.startsWith('Mac')%26%26o%26%26!n%26%26!t%26%26!navigator.maxTouchPoints%26%262%3Enavigator.maxTouchPoints%2Ce=window.getSelection()%3Bif(!e)return%3Bconst%20l=e.toString().split('%5Cn')%5B0%5D.trim()%3Blet%20r='x-man-page:%2F%2F'%3Bconst%20c=l.match(%2F%5E(.%2A%3F)%5C((%5Cd)%5C)%24%2F)%3Bif(r%2B=c%3F'1'===c%5B2%5D%3Fc%5B1%5D:%60%24%7Bc%5B2%5D%7D%2F%24%7Bc%5B1%5D%7D%60:l%2Cl)%7Bif(confirm(%60Link%20for%20%22%24%7Bl%7D%22%20is:%20%24%7Br%7D%5Cn%5CnCopy%20to%20clipboard%3F%60))%7Blet%20i=''%3Bif(navigator.clipboard%3Fnavigator.clipboard.writeText(r):(i=%60Unable%20to%20copy%20%22%24%7Br%7D%22%20to%20clipboard.%60%2Cr='')%2Ca%26%26''!==r)%7Blet%20n=null%3Btry%7Bn=window.open(r)%2Cn%26%26(n.opener=null)%7Dcatch(n)%7Bi=%60Popup%20window%20blocked.%20Clipboard%20contains%20%22%24%7Br%7D%22%60%7Dfinally%7Bwindow.focus()%2Cnull!==n%26%26setTimeout(()=%3E%7Bn%26%26n.close()%7D%2C3333)%7D%7Delse''!==r%26%26(i=%60Unable%20to%20open%20new%20link%20with%20Terminal.%20Clipboard%20contains%20%22%24%7Br%7D%22%60)%3B''!==i%26%26alert(i)%7De.empty()%7D%7D)()%3Bvoid'1.3.1' "Setup x-man"

<!-- Reference links -->

[nodejs]: http://nodejs.org/
[npm]: https://npmjs.org/
[kiding-gist 589242021df49eb17be3]: https://gist.github.com/kiding/589242021df49eb17be3/
"safari-utm-stripper Bookmarklet"
[IsItOnAWS.com]: https://isitonaws.com/
[IsItOnAWS Blog Post]: https://aws.amazon.com/blogs/aws/is-it-on-aws-domain-identification-using-aws-lambda/
[Kill sticky headers]: https://alisdair.mcdiarmid.org/kill-sticky-headers/
[Neat URL]: https://github.com/Smile4ever/Neat-URL/
[OpenInlets page]: http://mobilemind.github.io/OpenInlets/
[GoodReader URL Scheme]: http://www.goodreader.com/gr-man-howto.html#ghttp
"GoodReader:How do I save a file from Safari to GoodReader?"
[Textastic x-callback-url API]: https://www.textasticapp.com/v10/manual/integration_other_apps/x-callback-url.html#download-using-the-textastic-scheme
"Download using the textastic:// scheme"
[Text fragments]: https://developer.mozilla.org/en-US/docs/Web/Text_fragments
[Working Copy URL Scheme]: https://workingcopyapp.com/url-schemes.html
"URL Schemes in Working Copy"
[x-man-page URL handler]: https://github.com/ouspg/urlhandlers/blob/master/cases/x-man-page.md "x-man-page: URL handler studied for the OSX Terminal.app"
