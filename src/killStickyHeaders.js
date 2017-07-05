// use querySelectorAll() to find & delete all fixed position elements of body
(() => {
  /* eslint no-plusplus: 0, prefer-const: 0, security/detect-object-injection: 0 */
  let elements = document.querySelectorAll('body *'),
    i = 0;
  for (i = 0; i < elements.length; i++) {
    if ('fixed' === getComputedStyle(elements[i]).position) {
      elements[i].parentNode.removeChild(elements[i]);
    }
  }
})();
