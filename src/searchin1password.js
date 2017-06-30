// open search in 1Password, using domain
(() => {
  // use only last 2 segments of hostname (eg, the "domain")
  location.href = 'onepassword4://search/' +
    location.host.split('.').slice(location.host.split('.').length - 2).join('.');
})();
