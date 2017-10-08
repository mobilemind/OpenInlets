if ('login.innflux.com' === window.location.host) {
    document.getElementById('iAcceptedTerms').checked = true;
    document.getElementById('button-connect').click();
} else {
    window.location.href = 'https://login.innflux.com/';
}
