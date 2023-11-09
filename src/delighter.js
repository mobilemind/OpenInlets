// deLighter - if the current URL includes a hash, which can imply a text
// fragment highlight, then reload the page (de-highlight it)

if (document.location.href.indexOf('#') > -1) {
    document.location.reload();
}
