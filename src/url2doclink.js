// url2doclink

// wrap it all in anonymous function closure for isolation
(() => {
    const segments = document.location.pathname.split('/');
    const docname = segments[segments.length - 1];
    const section = document.location.hash;
    /*  eslint-disable-next-line no-ternary, multiline-ternary, xss/no-mixed-html -- ternary ok, "<doc:...>"" not HTML */
    alert(`Original URL-\n${document.location.href}\n\nDocC link-\n<doc:${docname}>${section ? '\n\nDocC section link-\n<doc:' + docname + section + '>' : ''}`);
})();
