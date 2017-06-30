// check if current URL is hosed on AWS (check uses AWS lambdas)
(() => {
  location.href = 'https://isitonaws.com/discover?name=' +
    location.hostname;
})();
