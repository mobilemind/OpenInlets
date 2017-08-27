// open search in 1Password, using only last 2 segments of host
location.href = 'onepassword4://search/' +
    location.host.split('.').slice(location.host.split('.').length - 2).join('.');
