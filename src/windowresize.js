// determine outer & inner window size
(() => {
    const w = window;
    const oldsize = w.outerWidth + ',' + w.outerHeight;
    const newsize = w.prompt("Enter new size:", oldsize);
    if (oldsize !== newsize) {
        const dimensions = newsize.split(',',2);
        const width = Math.abs(Number(dimensions[0]));
        const height = Math.abs(Number(dimensions[1]));
        if (width && height) {
            let myWindow = window.open(document.location.href, '', 'width=' + w.outerWidth + ', height=' + w.outerHeight);
            myWindow.resizeTo(width, height);
            myWindow.moveBy(-2, -25);
            myWindow.focus();
        }
    }
})();
