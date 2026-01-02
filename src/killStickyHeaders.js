// use querySelectorAll() to find & delete all fixed position elements of body
(() => {
    /* eslint security/detect-object-injection: 0 */
    const elements = document.querySelectorAll('body *');
    for (const element of elements) {
        if (getComputedStyle(element).position === 'fixed') {
            element.parentNode.removeChild(element);
        }
    }
})();
