# OpenInlets

[![Build Status](https://secure.travis-ci.org/mobilemind/OpenInlets.png?branch=master)](http://travis-ci.org/mobilemind/OpenInlets)

OpenInlets is a collection of bookmarklets for iOS Mobile Safari. Individual bookmarklets
are described below.

__OpenIn1Password__ Use this bookmarklet to automatically open the current web page using
the Webview in 1Password 4.1.x. The 1Password Webview is handy for login/form completion,
or to quickly add a new entry with login credentials.

__OpenInGoodReader__ Use this bookmarklet when viewing a PDF in Mobile Safari to
automatically open the same PDF in GoodReader 4.

__OpenInGoogleMaps__ Use this bookmarklet to automatically open the current web page in the
Google Maps application on iOS. Handy when an app opens a Google Maps page in Mobile
Safari, but you'd prefer that the Google Maps _app_ show the same info. Just select the
bookmark, it does the rest-- no need to select, copy, switch apps & paste.


## Install
### Desktop browser
Visit the [OpenInlets page].

Drag the indicated link to the bookmark bar or select it and add bookmark/favorite.
Optionally edit or rename the bookmark/favorite. Finally, synchronize bookmarks using
iTunes or iCloud to get the bookmarklet to iOS.

#### JavaScript bookmarks
+ [OpenIn1Password] v1.0.6
+ [OpenInGoodReader] v1.0.0
+ [OpenInGoogleMaps] v1.6.4

Or use the a Mobile browser to visit this page (or the [OpenInlets page]) and use one of
the Mobile browser setup links such as the ones below.

### Mobile browser
Tap the link below, bookmark the new page and follow the instructions on the page to turn
the followed bookmark into a JavaScript bookmarklet.

+ **Mobile Safari setup link** -- [Setup OpenIn1Password] v1.0.6
+ **Mobile Safari setup link** -- [Setup OpenInGoodReader] v1.0.0
+ **Mobile Safari setup link** -- [Setup OpenInGoogleMaps] v1.6.4

## Use
When a search or other app opens a web page in Mobile Safari, activate the corresponding
bookmarklet (tap it on bookmark bar or use the Bookmarks/Favorites menu). If installed the
corresponding iOS app will open to the same document or location.

## Requirements
* Mobile Safari 7.x or higher
* Corresponding iOS app

## License
MIT License - <http://www.opensource.org/licenses/mit-license.php>

## Source Code Notes

The `void'x.y.z'` at the end the bookmarklet URL code serves two purposes.

First it prevents the browser from navigating to another page when the bookmark is used.

Second, it is a convenient place to embed a string indicating the `semver` version of the
bookmark.

## Build
Clone the repository. If `node` is not installed go get it from [nodejs.org][nodejs].
Finally change to the `OpenInlets` directory and install the dependencies into the project
before invoking `grunt`.
```bash
cd OpenInlets
npm install
grunt
```

Note that [nodejs] and [npm] are required. The lines above will install [grunt], [js2uri],
and other dependencies defined in `package.json`. Later you can update them using
`npm update` at any time or just invoke `grunt` to re-build OpenInlets.

## Version Notes
0.0.0: July 22, 2014 - Initial commit, smushing together multiple bookmarklet repos I have; doesn't build yet
0.0.1: July 28, 2014 - Bookmarklets build via `grunt`, `grunt deploy` updates `README.md`, version numbers not updating

## Plans
- [X] Get this working with 2-3 existing bookmarklets (Gmapplet, OpenIn1Password, OpenInGoodReader)
- [X] Get Travis CI integrated
- [ ] Get bookmarklet to have individual version numbers
- [X] Make use of RegEx replacements or templates to streamline updating the README.md
- [ ] Use some sort of Markdown or HTML templating to automate making a gh-pages `index.html` file

<!--- reference links -->
[nodejs]: http://nodejs.org/
[npm]: https://npmjs.org/
[grunt]: http://gruntjs.com/
[js2uri]: https://npmjs.org/package/js2uri
[OpenInlets page]: http://mobilemind.github.io/OpenInlets/
[OpenIn1Password]: javascript:/iP(.d%7Chone)/.test(navigator.userAgent)&&/https?:/.test(location.protocol)&&(location.href='op'+location.href);void'0.0.0' "Setup OpenIn1Password"
[OpenInGoodReader]: javascript:/iP(.d%7Chone)/.test(navigator.userAgent)&&/https?:/.test(location.protocol)&&/%5C.pdf($%7C%5C?)/.test(location.href)&&(location.href='gr'+location.href);void'0.0.0' "Setup OpenInGoodReader"
[OpenInGoogleMaps]: javascript:'maps.google.com'==location.hostname&&location.search&&(location.href='comgooglemaps://'+location.search);void'0.0.0' "Setup OpenInGoogleMaps"
[Setup OpenIn1Password]: http://mmind.me/_?javascript:/iP(.d%7Chone)/.test(navigator.userAgent)&&/https?:/.test(location.protocol)&&(location.href='op'+location.href);void'0.0.0' "Setup OpenIn1Password"
[Setup OpenInGoodReader]: http://mmind.me/_?javascript:/iP(.d%7Chone)/.test(navigator.userAgent)&&/https?:/.test(location.protocol)&&/%5C.pdf($%7C%5C?)/.test(location.href)&&(location.href='gr'+location.href);void'0.0.0' "Setup OpenInGoodReader"
[Setup OpenInGoogleMaps]: http://mmind.me/_?javascript:'maps.google.com'==location.hostname&&location.search&&(location.href='comgooglemaps://'+location.search);void'0.0.0' "Setup OpenInGoogleMaps"
[Google Maps URL Scheme]: https://developers.google.com/maps/documentation/ios/urlscheme "Google Developers:Google Maps URL Scheme"
[1Password URL Scheme]: http://blog.agilebits.com/2013/01/24/developers-heres-how-to-add-a-little-1password-to-your-ios-apps/ "Agile Bits: 1Password URL Scheme"
