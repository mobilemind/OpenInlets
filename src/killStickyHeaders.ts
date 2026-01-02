// use querySelectorAll() to find & delete all fixed position elements of body
(() => {
    /* eslint security/detect-object-injection: 0 */
    const elements: NodeListOf<Element> = document.querySelectorAll('body *');
    for (const element of Array.from(elements)) {
        if (getComputedStyle(element).position === 'fixed') {
            const parent: Node | null = element.parentNode;
            if (parent) {
                parent.removeChild(element);
            }
        }
    }
})();
