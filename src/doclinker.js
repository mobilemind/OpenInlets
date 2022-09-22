// doclinker - make DocC <doc:> link from docc preview page, etc

// wrap it all in anonymous function closure for isolation
(() => {
    // get document info from HTML DOM, split title at em dash to get real title
    const loc = document.location,
        server = loc.hostname,
        [title] = document.title.split('—');
    let path = [];
    path = loc.pathname.split('/');
    // partnum is end of path
    const partnum = path[path.length - 1];
    // only show output if on localhost (DocC preview) or it-training.apple.com ?? add docbot preview URL ??
    if (server == 'localhost' || server == 'it-training.apple.com') {
        /* eslint xss/no-mixed-html:0 */
        let msg = 'Part No.: ' + partnum + '\n\nTitle: ' + title + '\n\nDocC link: <doc:' + partnum + '>';
        // if URL has a hash (from DOM), format the has as a heading, then append Heading & link for it
        if (loc.hash.length > 0) {
            msg += '\n\nHeading: ' + loc.hash.replace(/-/g, ' ').replace(/#/, '') + '\n\nDocC link: <doc:' + partnum + loc.hash + '>';
        }
        alert(msg);
    }
})();
