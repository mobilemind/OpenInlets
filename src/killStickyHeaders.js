// use querySelectorAll() to find & delete all fixed position elements of body
function killstickyheaders() {
  /* eslint no-plusplus: 0, no-var: 0, security/detect-object-injection: 0 */
  var elements = document.querySelectorAll('body *'),
    i = 0;
  for (i = 0; i < elements.length; i++) {
    if ('fixed' === getComputedStyle(elements[i]).position) {
      elements[i].parentNode.removeChild(elements[i]);
    }
  }
  return void 0;
}
killstickyheaders();
