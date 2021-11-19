// url2doclink

// wrap it all in anonymous function closure for isolation
(() => {
    const segments=document.location.pathname.split('/'), docname=segments[segments.length - 1], section=document.location.hash;
    alert(`Original URL-\n${document.location.href}\n\nDocC link-\n<doc:${docname}>${section?'\n\nDocC section link-\n<doc:' + docname + section + '>' : ''}`);
})();
