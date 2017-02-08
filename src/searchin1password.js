// open search in 1Password, using domain
function searchin1password() {
  // split location.hostname into segments so we can use only last 2 segments ("domain")
  const s = location.hostname.split('.');
  return location.href = 'onepassword4://search/' + s.slice(s.length-2).join('.');
}
searchin1password();
