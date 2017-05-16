// open search in 1Password, using domain
function searchin1password() {
  // use only last 2 segments of hostname (eg, the "domain")
  return location.href = 'onepassword4://search/' +
    location.hostname.
      split('.').
      slice(location.hostname.
        split('.').length - 2).
      join('.');
}
searchin1password();
