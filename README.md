# OpenInlets
__BUILD STATUS IS COMMENTED-OUT__ *for now*

// \[!\[Build Status](https://secure.travis-ci.org/mobilemind/OpenInlets.png?branch=master)]\(http://travis-ci.org/mobilemind/OpenInlets)

OpenInlets is a collection of bookmarklets for iOS. Individual bookmarklets are described
below.

__Gmapplet__ is a bookmarklet for Mobile Safari on iOS. Use it to automatically open the
current web page in the Google Maps application on iOS. Handy when an app opens a Google
maps page in Mobile Safari when you'd prefer the Google Maps _app_ show the same info.
Just select the bookmark, it does the rest-- no need to select, copy, switch apps & paste.

__OpenIn1Password__ is a bookmarklet for Mobile Safari. Add the bookmark and use it to
automatically open a web page using the Web View in 1Password 4.1.x. The 1Password Web
View is handy for login/form completion, or to quickly add a new entry with login
credentials.

__OpenInGoodReader__ is a bookmarklet for Mobile Safari. Add the bookmark and use when
viewing a PDF in Mobile Safari to automatically open the PDF in GoodReader 4.

## Install
### Desktop browser
Visit the [OpenInlets page].

Drag the indicated link to the bookmark bar or select it and add bookmark/favorite.
Optionally edit or rename the bookmark/favorite. Finally, synchronize bookmarks using
iTunes or iCloud to get the bookmarklet to iOS.

Or use the [Mobile browser setup link][Setup Gmapplet], follow the instructions there and
then sync to iOS.

### Mobile browser
Tap the link below, bookmark the new page and follow the instructions on the page to turn
the followed bookmark into a JavaScript bookmarklet.

+ **Mobile browser setup link** -- [Setup Gmapplet]
+ **Mobile Safari setup link** -- [Setup OpenIn1Password]
+ **Mobile Safari setup link** -- [Setup OpenInGoodReader]


## Use
When a search or other app opens Google Maps on a web page activate the Gmapplet bookmarklet
(click it on bookmark bar or use the Bookmarks/Favorites menu). If installed the Google Maps
iOS app will open to the same location.

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
Finally change to the `Gmapplet` directory and install the dependencies into the project
before invoking `grunt`.
```bash
cd Gmapplet
npm install
grunt
```

Note that [nodejs] and [npm] are required. The lines above will install [grunt], [js2uri],
and other dependencies defined in `package.json`. Later you can update them using
`npm update` at any time or just invoke `grunt` to re-build OpenInlets.

## Version Notes
0.0.0: July 22, 2014 - Initial commit, smushing together multiple bookmarklet repos I have; doesn't build yet

## Plans
* Get this working with 2-3 existing bookmarklets (Gmapplet, OpenIn1Password, OpenInGoodReader)
* Get Travis CI integrated
* Make use of Lo dash templates to streamline updating things
* Use some sort of Markdown or HTML templating to make a gh-pages `index.html` file
<!--- reference links -->
[nodejs]: http://nodejs.org/
[npm]: https://npmjs.org/
[grunt]: http://gruntjs.com/
[js2uri]: https://npmjs.org/package/js2uri
[OpenInlets page]: http://mobilemind.github.io/OpenInlets/
[Setup Gmapplet]: http://mmind.me/_?javascript:'maps.google.com'==location.hostname&&location.search&&(location.href='comgooglemaps://'+location.search);void'1.6.3'' "Setup Gmapplet"
[Setup OpenIn1Password]: http://mmind.me/_?javascript:/iP(.d%7Chone)/.test(navigator.userAgent)&amp;&amp;/https?:/.test(location.protocol)&amp;&amp;(location.href='op'+location.href);void'1.0.6' "Setup OpenIn1Password"
[Setup OpenInGoodReader]: http://mmind.me/_?javascript:/iP(.d%7Chone)/.test(navigator.userAgent)&amp;&amp;/https?:/.test(location.protocol)&amp;&amp;/%5C.pdf($%7C%5C?)/.test(location.href)&amp;&amp;(location.href='gr'+location.href);void'1.0.0' "Setup OpenInGoodReader"
[Google Maps URL Scheme]: https://developers.google.com/maps/documentation/ios/urlscheme "Google Developers:Google Maps URL Scheme"
[1Password URL Scheme]: http://blog.agilebits.com/2013/01/24/developers-heres-how-to-add-a-little-1password-to-your-ios-apps/ "Agile Bits: 1Password URL Scheme"
