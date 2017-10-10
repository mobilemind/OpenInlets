if ('login.innflux.com' == window.location.host) {
    document.getElementsByName('iAcceptedTerms')[0].checked = true;
    document.getElementsByName('iAcceptedTerms')[1].checked = true;
    document.getElementById('button-connect').click();
} else {
    window.location.href = 'https://login.innflux.com/';
}
