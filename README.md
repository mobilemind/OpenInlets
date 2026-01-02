# OpenInlets

OpenInlets is a collection of bookmarklet utilities for your browser.
Originally they opened an iOS app from a web page in a specific way.
Now some make or modify URLs, or determine if a site is hosted on AWS.

![version](https://img.shields.io/github/package-json/v/mobilemind/OpenInlets.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/1db800475a4744c68fe643a84a4454f4)](https://www.codacy.com/gh/mobilemind/OpenInlets/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=mobilemind/OpenInlets&amp;utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://github.com/mobilemind/OpenInlets/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/mobilemind/OpenInlets/actions/workflows/linter.yml)
[![CodeQL](https://github.com/mobilemind/OpenInlets/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/mobilemind/OpenInlets/actions/workflows/codeql-analysis.yml)
[![NodeJS Build](https://github.com/mobilemind/OpenInlets/actions/workflows/npm-grunt.yml/badge.svg)](https://github.com/mobilemind/OpenInlets/actions/workflows/npm-grunt.yml)

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

+ __[deLighter] v1.1.0__: Effectively de-highlights any highlighted text
fragment on the current page. Uses `document.location.reload()` to reload the
page to de-highlight it. (It's a cross-platform companion to the
__Linklighter__ bookmarklet, below.)

+ __[FYI] v3.2.1__: Select text on a web page and fire off an email that
quotes the selection and includes the page title and URL. "FYI" opens a new
email with the page title in the subject line, the page title repeated again
in the body, along with the selected text (if any text was selected), and the
URL of the original page.

+ __[IsItAws] v1.3.3__: Check the current page host to determine if it runs on
AWS. This bookmarklet works with most browsers on most platforms.

+ __[KillStickyHeaders] v1.2.1__: Find & delete all fixed position elements of
HTML body element. Cross-platform.

+ __[Linklighter] v1.1.5__: Use the current text selection on the active web
page to generate a URL that will highlight the selected text when opened in a
modern browser. If a new URL is generated, Linklighter ask to open it in a new
window to preview the highlight, and copy the new URL to the clipboard. (See
deLighter above, as a companion bookmarklet that un-highlights the newly
opened window.) Linklighter works with recent releases of Safari on iPhone,
iPad, and Mac, and also works with Google Chrome on desktops.

+ __[OpenInBrave] v1.0.2__: Open the current web page in the Brave app on iOS.

+ __[OpenInFirefox] v1.5.1__: Open the current web page in the Firefox app for
iOS.

+ __[OpenInFirefox-Focus] v1.0.1__: Open the current web page in the Firefox
Focus app for iOS.

+ __[OpenInFirefox-Private] v1.0.1__: Open the current web page in private
mode of the Firefox app for iOS.

+ __[OpenInGoodReader] v1.5.2__: When viewing a PDF in Mobile Safari, open or
download the same PDF in GoodReader.

+ __[OpenInTextastic] v1.0.1__: Open the current web page in the Textastic app
on iOS. Download the server response of the current HTTP URL, save it in the
root directory of the local (Textastic) file system, and then open it in the
editor. Handy to view the source code of a web page or download a raw file.

+ __[OpenInWorkingCopy] v1.5.1__: When viewing a BitBucket _or_ Github
repository in Mobile Safari, show the same repo in the Working Copy iOS app
(cloning the repo locally if necessary).

+ __[OpenURLParam] v1.0.2__: Work-around for blocked navigation from certain
ad or tracking blockers. If the current URL contains a parameter in the form
of `url=...` this bookmarklet will parse the `url` parameter and navigate to
that URL.

+ __[UtmStrip] v1.8.9__: Strips off the UTM query string elements of the
current URL to remove common "urchin" tracking information from youtube, etc.
Also removes Google `/amp/` suffix fromU URL path. Asks to copy the new URL
to the clipboard. Finally, replaces history & reloads the page. _NOTE:_ This
bookmarklet also works with Safari and Firefox on macOS.

+ __[unskim] v1.0.0__: Bypass redirect and affiliate link wrappers by
detecting common URL parameters (like `url=`, `destination=`, `redirect=`,
etc.) and navigating directly to the target URL. Also handles Safari DNS error
pages when a redirect service is blocked, extracting the intended destination
from the error message.

+ __[x-man] v1.2.1__: Using the selected text in browser, create a
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

+ __Mobile Safari setup link__ -- [Setup deLighter] v1.1.0
+ __Mobile Safari setup link__ -- [Setup FYI] v3.2.1
+ __Mobile Safari setup link__ -- [Setup IsItAws] v1.3.3
+ __Mobile Safari setup link__ -- [Setup KillStickyHeaders] v1.2.1
+ __Mobile Safari setup link__ -- [Setup Linklighter] v1.1.5
+ __Mobile Safari setup link__ -- [Setup OpenInBrave] v1.0.2
+ __Mobile Safari setup link__ -- [Setup OpenInFirefox] v1.5.1
+ __Mobile Safari setup link__ -- [Setup OpenInFirefox-Focus] v1.0.1
+ __Mobile Safari setup link__ -- [Setup OpenInFirefox-Private] v1.0.1
+ __Mobile Safari setup link__ -- [Setup OpenInGoodReader] v1.5.2
+ __Mobile Safari setup link__ -- [Setup OpenInTextastic] v1.0.1
+ __Mobile Safari setup link__ -- [Setup OpenInWorkingCopy] v1.5.1
+ __Mobile Safari setup link__ -- [Setup OpenURLParam] v1.0.2
+ __Mobile Safari setup link__ -- [Setup UtmStrip] v1.8.9
+ __Mobile Safari setup link__ -- [Setup unskim] v1.0.0
+ __Mobile Safari setup link__ -- [Setup x-man] v1.2.1

## Requirements

+ Mobile Safari 7.x or higher (last tested with iOS 17, macOS 14 Safari 17)
+ Corresponding iOS app (_except_ for "delighter", "FYI", "IsItAws",
"Linklighter", "unskim", "UTMStrip", and "x-man" bookmarklets).

### Notes

Bookmarklets do _not_ work in Google Chrome, Ghostery and DuckDuckGo _iOS_
apps due to restrictions of those apps on `javascript:` URL bookmarks.

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
OpenInlets `web/` directory.

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
+ __Linklighter__: Does _not_ use a URL protocol scheme. Uses JavaScript to
  get the current selection and append a `#:~:text=…` string to the current
  URL. Modern browsers interpret this and when opening such a URL, the browser
  scroll to the first matching selection and highlight that text. Logic will
  automatically use the full selection when its less than 80 characters, or
  algorithmically split the text into a shorter "start" fragment and "end"
  fragment. In that case the browser highlights from the first match of the
  start fragment to the last character of the next match of the "end"
  fragment. To learn more about text fragment highlighting and security
  considerations, refer to [Text fragments][Text fragments].
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

[deLighter]: javascript:document.location.reload()%3Bvoid'1.1.0' "deLighter"
[FYI]: javascript:(()=%3E%7Bconst%20e=encodeURIComponent(document.title)%2Cn='%250A'%2Co=window.getSelection()%2Ct='Range'===o.type%26%26o.rangeCount%3E0%3Fo.getRangeAt(0).toString():''%3Blocation.href=%60mailto:%3Fsubject=fyi:%24%7Be%7D%26body=%24%7Be%7D%24%7Bn%7D%24%7BencodeURIComponent(document.URL)%7D%24%7Bn%7D---%24%7Bn%7D%24%7BencodeURIComponent(t)%7D%24%7Bn%7D%24%7Bn%7D%60%7D)()%3Bvoid'3.2.1' "FYI"
[IsItAws]: javascript:location.href='https:%2F%2Fisitonaws.com%2Fdiscover%3Fname='%2Blocation.host%3Bvoid'1.3.3' "IsItAws"
[KillStickyHeaders]: javascript:(()=%3E%7Bconst%20e=document.querySelectorAll('body%20%2A')%3Bfor(const%20o%20of%20e)'fixed'===getComputedStyle(o).position%26%26o.parentNode.removeChild(o)%7D)()%3Bvoid'1.2.1' "KillStickyHeaders"
[Linklighter]: javascript:(()=%3E%7Bconst%20e=window.getSelection().toString()%2Cn=e.length%2Ct=document.URL%3Blet%20i=t%2Co=t.indexOf('%23')%2Cl=''%3Bif(window.getSelection().empty()%2Ce%26%26''!==e)%7Bif(o%3E-1%26%26(i=i.substring(0%2Co))%2Ci%2B='%23:~:text='%2C80%3En)l=e%2Ci%2B=encodeURIComponent(e)%3Belse%7Blet%20t=~~(n%2F2-2)%3Bn%3E150%3Ft=48:n%3E100%26%26(t=~~(n%2F3))%2Cl=e.substring(0%2Ct)%3Bconst%20c=%5BencodeURIComponent(l)%2CencodeURIComponent(e.slice(n-t))%5D%3Bl%2B='%E2%80%A6'%2Co=c%5B0%5D.lastIndexOf('%2520')%2Co%3E-1%26%26(c%5B0%5D=c%5B0%5D.substring(0%2Co))%2Co=c%5B1%5D.indexOf('%2520')%2Co%3E-1%26%26(c%5B1%5D=c%5B1%5D.slice(o%2B3))%2Ci%2B=c.join()%7Di=i.replace(%2F(%250A%7C%2520A)%2B%24%2F%2C'')%2Ci=i.replace(%2F%23%23%2B:~:text=%2F%2C'%23:~:text=')%7Di!==t%26%26confirm(%60Open%20URL%20with%20highlight%20on%20%22%24%7Bl%7D%22%20and%20copy%20URL%20to%20clipboard%3F%5Cn%5CnNote:%20If%20text%20isn't%20highlighted%20in%20new%20tab%2C%20you%20can%20try%20again%20with%20a%20smaller%20selection.%60)%26%26(navigator.clipboard.writeText(i)%2Cwindow.open(i%2C'%5Fblank').opener=null)%7D)()%3Bvoid'1.1.5' "Linklighter"
[OpenInBrave]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href='brave:%2F%2Fopen-url%3Furl='%2BencodeURIComponent(location.href)%3Bvoid'1.0.2' "OpenInBrave"
[OpenInFirefox]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href='firefox:%2F%2Fopen-url%3Furl='%2BencodeURIComponent(location.href)%3Bvoid'1.5.1' "OpenInFirefox"
[OpenInFirefox-Focus]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href=%60firefox-focus:%2F%2Fopen-url%3Furl=%24%7BencodeURIComponent(location.href)%7D%26private=true%60%3Bvoid'1.0.1' "OpenInFirefox-Focus"
[OpenInFirefox-Private]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href=%60firefox:%2F%2Fopen-url%3Furl=%24%7BencodeURIComponent(location.href)%7D%26private=true%60%3Bvoid'1.0.1' "OpenInFirefox-Private"
[OpenInGoodReader]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26%2F%5C.pdf(%24%7C%5C%3F)%2F.test(location.href))location.href='gr'%2Blocation.href%3Bvoid'1.5.2' "OpenInGoodReader"
[OpenInTextastic]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href=location.href.replace(%2F%5Ehttps%3F%2F%2C'textastic')%3Bvoid'1.0.1' "OpenInTextastic"
[OpenInWorkingCopy]: javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26('bitbucket.org'===location.host%7C%7C'github.com'===location.host))location.href=%60working-copy:%2F%2Fshow%3Fremote=%24%7BencodeURIComponent(location.href.split('%2F').slice(0%2C5).join('%2F'))%7D.git%60%3Bvoid'1.5.1' "OpenInWorkingCopy"
[OpenURLParam]: javascript:const%20e=location.search.search('url=')%3Bif(e%3E-1)%7Blet%20c=location.search.slice(4%2Be)%3Bconst%20o=c.indexOf('%26')%3Bif(o%3E-1%26%26(c=c.slice(0%2Co))%2Cc.length%3E5)location.replace(decodeURIComponent(c))%7Dvoid'1.0.2' "OpenURLParam"
[UtmStrip]: javascript:(()=%3E%7Bconst%20e=location.pathname%2Cc=location.search%3Bif(3%3Ec.length%26%26!e.includes('%2Famp'))return%3Blet%20i=e%2Ca=c%3Bconst%20r=location.hostname%3Bif(r.includes('aliexpress.')%26%26(a=a.replace(%2F(%5B%3F%26%5D)aff%5F(platform%7Ctrace%5Fkey)=%5B%5E%26%5D%2B%2Fgi%2C'%241')%2Ca=a.replace(%2F(%5B%3F%26%5D)algo%5F%5Bep%5Dvid=%5B%5E%26%5D%2B%2Fg%2C'%241')%2Ca=a.replace(%2F(%5B%3F%26%5D)(btsid%7Cws%5Fab%5Ftest)=%5B%5E%26%5D%2B%2Fg%2C'%241')%2Ca=a.replace(%2F(%5B%3F%26%5D)s%5Bcp%5Dm=%5B%5E%26%5D%2B%2Fg%2C'%241'))%2C%2F(%7C%5C.)amazon%5C.com%24%2F.test(r)%26%26(a=a.replace(%2F(%5B%3F%26%5D)(%5Fencoding%7Cie%7ClinkCode%7ClinkId%7Cpf%7Cpsc%7Cref%5F%7Ctag)=%5B%5E%26%5D%2B%2Fgi%2C'%241')%2Ca=a.replace(%2F(%5B%3F%26%5D)p%5Bdf%5D%5Frd%5F.%2A%3F=%5B%5E%26%5D%2B%2Fgi%2C'%241')%2Ca=a.replace(%2F(%5B%3F%26%5D)(content-id%7Ccrid%7Ccv%5Fct%5Fcx%7Clanguage%7Cqid%7Csprefix%7Csr%7Cth)=%5B%5E%26%5D%2B%2Fg%2C'%241')%2Ca=a.replace(%2F(%5B%3F%26%5D)asc(%5Fcampaign%7C%5Frefurl%7C%5Fsource%7Csubtag)=%5B%5E%26%5D%2B%2Fg%2C'%241')%2Ca=a.replace(%2F(%5B%3F%26%5D)dib(%5Ftag)%3F=%5B%5E%26%5D%2B%2Fg%2C'%241'))%2Ca.includes('fb%5F')%26%26(a=a.replace(%2F(%5B%3F%26%5D)fb%5F(action%5Fids%7Caction%5Ftypes%7Cref%7Csource)=%5B%5E%26%5D%2B%2Fgi%2C'%241')%2Ca=a.replace(%2F(%5B%3F%26%5D)(fbclid%7Chrc%7Crefsrc)=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ca.includes('action%5F')%26%26(a=a.replace(%2F(%5B%3F%26%5D)action%5F(object%7Cref%7Ctype)%5Fmap=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ca=a.replace(%2F(%5B%3F%26%5D)(assetType%7CelqTrack%7Cmkt%5Ftok%7CoriginalReferer%7Creferrer%7Cterminal%5Fid%7Ctrk%7CtrkCampaign%7CtrkInfo)=%5B%5E%26%5D%2B%2Fgi%2C'%241')%2Ca.includes('aff%5F')%26%26(a=a.replace(%2F(%5B%3F%26%5D)aff%5F(platform%7Ctrace%5Fkey)=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ca.toLowerCase().includes('id=')%26%26(a=a.replace(%2F(%5B%3F%26%5D)(an%7Casset%7Ccampaign%7Ce%7Cgcl%7Crecipient%7Csite)id=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(a.includes('ga%5F')%7C%7Ca.includes('utm%5F'))%26%26(a=a.replace(%2F(%5B%3F%26%5D)(ga%7Cutm)%5F(campaign%7Ccid%7Ccontent%7Cdesign%7Cmedium%7Cname%7Cplace%7Cpubreferrer%7Creader%7Csource%7Cswu%7Cterm%7Cuserid%7Cviz%5Fid)=%5B%5E%26%5D%2B%2Fgi%2C'%241')%2Ca=a.replace(%2F(%5B%3F%26%5D)gcl(id%7Csrc)=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(%2F(m%7Cwww)%5C.youtube%5C.com%24%2F.test(r)%7C%7C'youtu.be'===r%7C%7C'www.youtube-nocookie.com'===r)%26%26(a=a.replace(%2F(%5B%3F%26%5D)(ac%7Cannotation%5Fid%7Capp%7Cfeature%7Cgclid%7Ckw%7Csrc%5Fvid)=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(a.includes('%5Fhsenc')%7C%7Ca.includes('%5Fhsmi'))%26%26(a=a.replace(%2F(%5B%3F%26%5D)%5Fhs(enc%7Cmi)=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ca.includes('hmb%5F')%26%26(a=a.replace(%2F(%5B%3F%26%5D)hmb%5F(campaign%7Cmedium%7Csource)=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ca.includes('cm%5F')%26%26(a=a.replace(%2F(%5B%3F%26%5D)cm%5F(mmc%7Cmmca%5Cd%2B%7Cre%7Csp)=%5B%5E%26%5D%2B%2Fgi%2C'%241')%2Ca=a.replace(%2F(%5B%3F%26%5D)manual%5Fcm%5Fmmc=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(a.includes('mc%5Fcid')%7C%7Ca.includes('mc%5Feid'))%26%26(a=a.replace(%2F(%5B%3F%26%5D)mc%5F%5Bce%5Did=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(a.includes('iesrc')%7C%7Ca.includes('mkt%5Ftok'))%26%26(a=a.replace(%2F(%5B%3F%26%5D)(iesrc%7Cmkt%5Ftok)=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ca.includes('pk%5F')%26%26(a=a.replace(%2F(%5B%3F%26%5D)pk%5F(campaign%7Ccontent%7Ckwd%7Cmedium%7Csource)=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ca=a.replace(%2F%26%26%2B%2Fg%2C'%26')%2C'%26'===a.charAt(a.length-1)%26%26(a=a.slice(0%2C-1))%2C'%3F'!==a.charAt(0)%26%26(a='%3F'%2Ba)%2Ca.includes('%3F%26')%26%26(a='%3F'%2Ba.slice(2))%2C3%3Ea.length%26%26(a='')%2Ci=i.replace(%2F%5C%2Famp%5C%2F%3F%24%2F%2C'')%2C(c!==a%7C%7Ce!==i)%26%26confirm('Update%20history%20and%20copy%20cleaned%20URL%20to%20clipboard%3F'))%7Bconst%20e=%60%24%7Blocation.protocol%7D%2F%2F%24%7Blocation.host%7D%24%7Bi%7D%24%7Ba%7D%24%7Blocation.hash%7D%60%3Bnavigator.clipboard.writeText(e)%2Chistory.replaceState(null%2Cnull%2Ce)%2Cwindow.open(e%2C'%5Fself'%2C'noreferrer').opener=null%7D%7D)()%3Bvoid'1.8.9' "UtmStrip"
[unskim]: javascript:(()=%3E%7Blet%20e=new%20URL(document.location.href)%3Bif('safari-resource:%2FErrorPage.html'===e.href)%7Bconst%20t=document.querySelector('p.error-message')%3F.textContent.match(%2FSafari%20can't%20open%20the%20page%20%22(https%3F:%5B%5E%22%5D%2B)%22%2F)%3F.%5B1%5D%3Bt%26%26(e=new%20URL(t))%7Dif(''===e.search)return%3Bconst%20t=new%20URLSearchParams(e.search)%2Cr=%5B'url'%2C'destination'%2C'redirect'%2C'target'%2C'goto'%2C'u'%2C'dest'%2C'link'%2C'out'%5D.filter((e=%3Et.has(e))).map((e=%3EdecodeURIComponent(t.get(e)))).find((e=%3Ee.match(%2F%5Ehttps%3F:%2F)))%3Br%26%26window.location.replace(new%20URL(r))%7D)()%3Bvoid'1.0.0' "unskim"
[x-man]: javascript:(()=%3E%7Bconst%20o=navigator.userAgent%2Cn=o.includes('Chrome%2F')%7C%7Co.includes('Firefox%2F')%7C%7Co.includes('Brave%2F')%7C%7Co.includes('Edg%2F')%2Ci=o.includes('Safari%2F')%2Ct=!n%26%26!i%2Ce=navigator.platform.startsWith('Mac')%26%26i%26%26!n%26%26!t%26%26!navigator.maxTouchPoints%26%262%3Enavigator.maxTouchPoints%2Ca=window.getSelection().toString().split('%5Cn')%5B0%5D.trim()%3Blet%20l='x-man-page:%2F%2F'%3Bconst%20r=a.match(%2F%5E(.%2A%3F)%5C((%5Cd)%5C)%24%2F)%3Bif(l%2B=r%3F'1'===r%5B2%5D%3Fr%5B1%5D:%60%24%7Br%5B2%5D%7D%2F%24%7Br%5B1%5D%7D%60:a%2Ca)%7Bif(confirm(%60Link%20for%20%22%24%7Ba%7D%22%20is:%20%24%7Bl%7D%5Cn%5CnCopy%20to%20clipboard%3F%60))%7Blet%20o=''%3Bif(navigator.clipboard%3Fnavigator.clipboard.writeText(l):(o=%60Unable%20to%20copy%20%22%24%7Bl%7D%22%20to%20clipboard.%60%2Cl='')%2Ce%26%26''!==l)%7Blet%20n=null%3Btry%7Bn=window.open(l)%2Cn.opener=null%7Dcatch(n)%7Bo=%60Popup%20window%20blocked.%20Unable%20to%20open%20new%20link%20with%20Terminal%2C%20but%20clipboard%20contains%20%22%24%7Bl%7D%22%60%7Dfinally%7Bwindow.focus()%2Cnull!==n%26%26setTimeout((()=%3E%7Bn.close()%7D)%2C3333)%7D%7Delse''!==l%26%26(o=%60Browser%20doesn't%20look%20like%20Mac%20Safari.%20Unable%20to%20open%20new%20link%20with%20Terminal%2C%20but%20clipboard%20contains%20%22%24%7Bl%7D%22%60)%3B''!==o%26%26alert(o)%7Dwindow.getSelection().empty()%7D%7D)()%3Bvoid'1.2.1' "x-man"

<!--- Setup links -->

[Setup deLighter]: https://mobilemind.github.io/OpenInlets/x/#javascript:document.location.reload()%3Bvoid'1.1.0' "Setup deLighter"
[Setup FYI]: https://mobilemind.github.io/OpenInlets/x/#javascript:(()=%3E%7Bconst%20e=encodeURIComponent(document.title)%2Cn='%250A'%2Co=window.getSelection()%2Ct='Range'===o.type%26%26o.rangeCount%3E0%3Fo.getRangeAt(0).toString():''%3Blocation.href=%60mailto:%3Fsubject=fyi:%24%7Be%7D%26body=%24%7Be%7D%24%7Bn%7D%24%7BencodeURIComponent(document.URL)%7D%24%7Bn%7D---%24%7Bn%7D%24%7BencodeURIComponent(t)%7D%24%7Bn%7D%24%7Bn%7D%60%7D)()%3Bvoid'3.2.1' "Setup FYI"
[Setup IsItAws]: https://mobilemind.github.io/OpenInlets/x/#javascript:location.href='https:%2F%2Fisitonaws.com%2Fdiscover%3Fname='%2Blocation.host%3Bvoid'1.3.3' "Setup IsItAws"
[Setup KillStickyHeaders]: https://mobilemind.github.io/OpenInlets/x/#javascript:(()=%3E%7Bconst%20e=document.querySelectorAll('body%20%2A')%3Bfor(const%20o%20of%20e)'fixed'===getComputedStyle(o).position%26%26o.parentNode.removeChild(o)%7D)()%3Bvoid'1.2.1' "Setup KillStickyHeaders"
[Setup Linklighter]: https://mobilemind.github.io/OpenInlets/x/#javascript:(()=%3E%7Bconst%20e=window.getSelection().toString()%2Cn=e.length%2Ct=document.URL%3Blet%20i=t%2Co=t.indexOf('%23')%2Cl=''%3Bif(window.getSelection().empty()%2Ce%26%26''!==e)%7Bif(o%3E-1%26%26(i=i.substring(0%2Co))%2Ci%2B='%23:~:text='%2C80%3En)l=e%2Ci%2B=encodeURIComponent(e)%3Belse%7Blet%20t=~~(n%2F2-2)%3Bn%3E150%3Ft=48:n%3E100%26%26(t=~~(n%2F3))%2Cl=e.substring(0%2Ct)%3Bconst%20c=%5BencodeURIComponent(l)%2CencodeURIComponent(e.slice(n-t))%5D%3Bl%2B='%E2%80%A6'%2Co=c%5B0%5D.lastIndexOf('%2520')%2Co%3E-1%26%26(c%5B0%5D=c%5B0%5D.substring(0%2Co))%2Co=c%5B1%5D.indexOf('%2520')%2Co%3E-1%26%26(c%5B1%5D=c%5B1%5D.slice(o%2B3))%2Ci%2B=c.join()%7Di=i.replace(%2F(%250A%7C%2520A)%2B%24%2F%2C'')%2Ci=i.replace(%2F%23%23%2B:~:text=%2F%2C'%23:~:text=')%7Di!==t%26%26confirm(%60Open%20URL%20with%20highlight%20on%20%22%24%7Bl%7D%22%20and%20copy%20URL%20to%20clipboard%3F%5Cn%5CnNote:%20If%20text%20isn't%20highlighted%20in%20new%20tab%2C%20you%20can%20try%20again%20with%20a%20smaller%20selection.%60)%26%26(navigator.clipboard.writeText(i)%2Cwindow.open(i%2C'%5Fblank').opener=null)%7D)()%3Bvoid'1.1.5' "Setup Linklighter"
[Setup OpenInBrave]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href='brave:%2F%2Fopen-url%3Furl='%2BencodeURIComponent(location.href)%3Bvoid'1.0.2' "Setup OpenInBrave"
[Setup OpenInFirefox]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href='firefox:%2F%2Fopen-url%3Furl='%2BencodeURIComponent(location.href)%3Bvoid'1.5.1' "Setup OpenInFirefox"
[Setup OpenInFirefox-Focus]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href=%60firefox-focus:%2F%2Fopen-url%3Furl=%24%7BencodeURIComponent(location.href)%7D%26private=true%60%3Bvoid'1.0.1' "Setup OpenInFirefox-Focus"
[Setup OpenInFirefox-Private]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href=%60firefox:%2F%2Fopen-url%3Furl=%24%7BencodeURIComponent(location.href)%7D%26private=true%60%3Bvoid'1.0.1' "Setup OpenInFirefox-Private"
[Setup OpenInGoodReader]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26%2F%5C.pdf(%24%7C%5C%3F)%2F.test(location.href))location.href='gr'%2Blocation.href%3Bvoid'1.5.2' "Setup OpenInGoodReader"
[Setup OpenInTextastic]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent))location.href=location.href.replace(%2F%5Ehttps%3F%2F%2C'textastic')%3Bvoid'1.0.1' "Setup OpenInTextastic"
[Setup OpenInWorkingCopy]: https://mobilemind.github.io/OpenInlets/x/#javascript:if(%2FiP(.d%7Chone)%2F.test(navigator.userAgent)%26%26('bitbucket.org'===location.host%7C%7C'github.com'===location.host))location.href=%60working-copy:%2F%2Fshow%3Fremote=%24%7BencodeURIComponent(location.href.split('%2F').slice(0%2C5).join('%2F'))%7D.git%60%3Bvoid'1.5.1' "Setup OpenInWorkingCopy"
[Setup OpenURLParam]: https://mobilemind.github.io/OpenInlets/x/#javascript:const%20e=location.search.search('url=')%3Bif(e%3E-1)%7Blet%20c=location.search.slice(4%2Be)%3Bconst%20o=c.indexOf('%26')%3Bif(o%3E-1%26%26(c=c.slice(0%2Co))%2Cc.length%3E5)location.replace(decodeURIComponent(c))%7Dvoid'1.0.2' "Setup OpenURLParam"
[Setup UtmStrip]: https://mobilemind.github.io/OpenInlets/x/#javascript:(()=%3E%7Bconst%20e=location.pathname%2Cc=location.search%3Bif(3%3Ec.length%26%26!e.includes('%2Famp'))return%3Blet%20i=e%2Ca=c%3Bconst%20r=location.hostname%3Bif(r.includes('aliexpress.')%26%26(a=a.replace(%2F(%5B%3F%26%5D)aff%5F(platform%7Ctrace%5Fkey)=%5B%5E%26%5D%2B%2Fgi%2C'%241')%2Ca=a.replace(%2F(%5B%3F%26%5D)algo%5F%5Bep%5Dvid=%5B%5E%26%5D%2B%2Fg%2C'%241')%2Ca=a.replace(%2F(%5B%3F%26%5D)(btsid%7Cws%5Fab%5Ftest)=%5B%5E%26%5D%2B%2Fg%2C'%241')%2Ca=a.replace(%2F(%5B%3F%26%5D)s%5Bcp%5Dm=%5B%5E%26%5D%2B%2Fg%2C'%241'))%2C%2F(%7C%5C.)amazon%5C.com%24%2F.test(r)%26%26(a=a.replace(%2F(%5B%3F%26%5D)(%5Fencoding%7Cie%7ClinkCode%7ClinkId%7Cpf%7Cpsc%7Cref%5F%7Ctag)=%5B%5E%26%5D%2B%2Fgi%2C'%241')%2Ca=a.replace(%2F(%5B%3F%26%5D)p%5Bdf%5D%5Frd%5F.%2A%3F=%5B%5E%26%5D%2B%2Fgi%2C'%241')%2Ca=a.replace(%2F(%5B%3F%26%5D)(content-id%7Ccrid%7Ccv%5Fct%5Fcx%7Clanguage%7Cqid%7Csprefix%7Csr%7Cth)=%5B%5E%26%5D%2B%2Fg%2C'%241')%2Ca=a.replace(%2F(%5B%3F%26%5D)asc(%5Fcampaign%7C%5Frefurl%7C%5Fsource%7Csubtag)=%5B%5E%26%5D%2B%2Fg%2C'%241')%2Ca=a.replace(%2F(%5B%3F%26%5D)dib(%5Ftag)%3F=%5B%5E%26%5D%2B%2Fg%2C'%241'))%2Ca.includes('fb%5F')%26%26(a=a.replace(%2F(%5B%3F%26%5D)fb%5F(action%5Fids%7Caction%5Ftypes%7Cref%7Csource)=%5B%5E%26%5D%2B%2Fgi%2C'%241')%2Ca=a.replace(%2F(%5B%3F%26%5D)(fbclid%7Chrc%7Crefsrc)=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ca.includes('action%5F')%26%26(a=a.replace(%2F(%5B%3F%26%5D)action%5F(object%7Cref%7Ctype)%5Fmap=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ca=a.replace(%2F(%5B%3F%26%5D)(assetType%7CelqTrack%7Cmkt%5Ftok%7CoriginalReferer%7Creferrer%7Cterminal%5Fid%7Ctrk%7CtrkCampaign%7CtrkInfo)=%5B%5E%26%5D%2B%2Fgi%2C'%241')%2Ca.includes('aff%5F')%26%26(a=a.replace(%2F(%5B%3F%26%5D)aff%5F(platform%7Ctrace%5Fkey)=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ca.toLowerCase().includes('id=')%26%26(a=a.replace(%2F(%5B%3F%26%5D)(an%7Casset%7Ccampaign%7Ce%7Cgcl%7Crecipient%7Csite)id=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(a.includes('ga%5F')%7C%7Ca.includes('utm%5F'))%26%26(a=a.replace(%2F(%5B%3F%26%5D)(ga%7Cutm)%5F(campaign%7Ccid%7Ccontent%7Cdesign%7Cmedium%7Cname%7Cplace%7Cpubreferrer%7Creader%7Csource%7Cswu%7Cterm%7Cuserid%7Cviz%5Fid)=%5B%5E%26%5D%2B%2Fgi%2C'%241')%2Ca=a.replace(%2F(%5B%3F%26%5D)gcl(id%7Csrc)=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(%2F(m%7Cwww)%5C.youtube%5C.com%24%2F.test(r)%7C%7C'youtu.be'===r%7C%7C'www.youtube-nocookie.com'===r)%26%26(a=a.replace(%2F(%5B%3F%26%5D)(ac%7Cannotation%5Fid%7Capp%7Cfeature%7Cgclid%7Ckw%7Csrc%5Fvid)=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(a.includes('%5Fhsenc')%7C%7Ca.includes('%5Fhsmi'))%26%26(a=a.replace(%2F(%5B%3F%26%5D)%5Fhs(enc%7Cmi)=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ca.includes('hmb%5F')%26%26(a=a.replace(%2F(%5B%3F%26%5D)hmb%5F(campaign%7Cmedium%7Csource)=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ca.includes('cm%5F')%26%26(a=a.replace(%2F(%5B%3F%26%5D)cm%5F(mmc%7Cmmca%5Cd%2B%7Cre%7Csp)=%5B%5E%26%5D%2B%2Fgi%2C'%241')%2Ca=a.replace(%2F(%5B%3F%26%5D)manual%5Fcm%5Fmmc=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(a.includes('mc%5Fcid')%7C%7Ca.includes('mc%5Feid'))%26%26(a=a.replace(%2F(%5B%3F%26%5D)mc%5F%5Bce%5Did=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2C(a.includes('iesrc')%7C%7Ca.includes('mkt%5Ftok'))%26%26(a=a.replace(%2F(%5B%3F%26%5D)(iesrc%7Cmkt%5Ftok)=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ca.includes('pk%5F')%26%26(a=a.replace(%2F(%5B%3F%26%5D)pk%5F(campaign%7Ccontent%7Ckwd%7Cmedium%7Csource)=%5B%5E%26%5D%2B%2Fgi%2C'%241'))%2Ca=a.replace(%2F%26%26%2B%2Fg%2C'%26')%2C'%26'===a.charAt(a.length-1)%26%26(a=a.slice(0%2C-1))%2C'%3F'!==a.charAt(0)%26%26(a='%3F'%2Ba)%2Ca.includes('%3F%26')%26%26(a='%3F'%2Ba.slice(2))%2C3%3Ea.length%26%26(a='')%2Ci=i.replace(%2F%5C%2Famp%5C%2F%3F%24%2F%2C'')%2C(c!==a%7C%7Ce!==i)%26%26confirm('Update%20history%20and%20copy%20cleaned%20URL%20to%20clipboard%3F'))%7Bconst%20e=%60%24%7Blocation.protocol%7D%2F%2F%24%7Blocation.host%7D%24%7Bi%7D%24%7Ba%7D%24%7Blocation.hash%7D%60%3Bnavigator.clipboard.writeText(e)%2Chistory.replaceState(null%2Cnull%2Ce)%2Cwindow.open(e%2C'%5Fself'%2C'noreferrer').opener=null%7D%7D)()%3Bvoid'1.8.9' "Setup UtmStrip"
[Setup unskim]: https://mobilemind.github.io/OpenInlets/x/#javascript:(()=%3E%7Blet%20e=new%20URL(document.location.href)%3Bif('safari-resource:%2FErrorPage.html'===e.href)%7Bconst%20t=document.querySelector('p.error-message')%3F.textContent.match(%2FSafari%20can't%20open%20the%20page%20%22(https%3F:%5B%5E%22%5D%2B)%22%2F)%3F.%5B1%5D%3Bt%26%26(e=new%20URL(t))%7Dif(''===e.search)return%3Bconst%20t=new%20URLSearchParams(e.search)%2Cr=%5B'url'%2C'destination'%2C'redirect'%2C'target'%2C'goto'%2C'u'%2C'dest'%2C'link'%2C'out'%5D.filter((e=%3Et.has(e))).map((e=%3EdecodeURIComponent(t.get(e)))).find((e=%3Ee.match(%2F%5Ehttps%3F:%2F)))%3Br%26%26window.location.replace(new%20URL(r))%7D)()%3Bvoid'1.0.0' "Setup unskim"
[Setup x-man]: https://mobilemind.github.io/OpenInlets/x/#javascript:(()=%3E%7Bconst%20o=navigator.userAgent%2Cn=o.includes('Chrome%2F')%7C%7Co.includes('Firefox%2F')%7C%7Co.includes('Brave%2F')%7C%7Co.includes('Edg%2F')%2Ci=o.includes('Safari%2F')%2Ct=!n%26%26!i%2Ce=navigator.platform.startsWith('Mac')%26%26i%26%26!n%26%26!t%26%26!navigator.maxTouchPoints%26%262%3Enavigator.maxTouchPoints%2Ca=window.getSelection().toString().split('%5Cn')%5B0%5D.trim()%3Blet%20l='x-man-page:%2F%2F'%3Bconst%20r=a.match(%2F%5E(.%2A%3F)%5C((%5Cd)%5C)%24%2F)%3Bif(l%2B=r%3F'1'===r%5B2%5D%3Fr%5B1%5D:%60%24%7Br%5B2%5D%7D%2F%24%7Br%5B1%5D%7D%60:a%2Ca)%7Bif(confirm(%60Link%20for%20%22%24%7Ba%7D%22%20is:%20%24%7Bl%7D%5Cn%5CnCopy%20to%20clipboard%3F%60))%7Blet%20o=''%3Bif(navigator.clipboard%3Fnavigator.clipboard.writeText(l):(o=%60Unable%20to%20copy%20%22%24%7Bl%7D%22%20to%20clipboard.%60%2Cl='')%2Ce%26%26''!==l)%7Blet%20n=null%3Btry%7Bn=window.open(l)%2Cn.opener=null%7Dcatch(n)%7Bo=%60Popup%20window%20blocked.%20Unable%20to%20open%20new%20link%20with%20Terminal%2C%20but%20clipboard%20contains%20%22%24%7Bl%7D%22%60%7Dfinally%7Bwindow.focus()%2Cnull!==n%26%26setTimeout((()=%3E%7Bn.close()%7D)%2C3333)%7D%7Delse''!==l%26%26(o=%60Browser%20doesn't%20look%20like%20Mac%20Safari.%20Unable%20to%20open%20new%20link%20with%20Terminal%2C%20but%20clipboard%20contains%20%22%24%7Bl%7D%22%60)%3B''!==o%26%26alert(o)%7Dwindow.getSelection().empty()%7D%7D)()%3Bvoid'1.2.1' "Setup x-man"

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
[Textastic x-callback-url API]: https://www.textasticapp.com/v4/manual/x-callback-url.html#downloadusingthetextastic:scheme
"Download using the textastic:// scheme"
[Text fragments]: https://developer.mozilla.org/en-US/docs/Web/Text_fragments
[Working Copy URL Scheme]: https://workingcopyapp.com/url-schemes.html
"URL Schemes in Working Copy"
[x-man-page URL handler]: https://github.com/ouspg/urlhandlers/blob/master/cases/x-man-page.md "x-man-page: URL handler studied for the OSX Terminal.app"
