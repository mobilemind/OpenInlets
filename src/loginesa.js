if ('login.innflux.com' === document.location.host) {
    if (document.getElementById('sRoom')) {
        document.getElementById('sLastName').value = 'Name';
        document.getElementById('sRoom').value = '000';
        document.getElementById('connect').click();
    } else if (document.getElementById('1')) {
        document.getElementById('1').checked = true;
        document.getElementsByName('TOS')[0].checked = true;
        document.getElementsByName('iStep')[0].click();
        document.getElementsByTagName('form')[0].submit();
    }
} else {
    document.location.href = 'https://login.innflux.com/index.php';
}
