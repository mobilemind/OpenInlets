// check if current URL is hosed on AWS (check uses AWS lambdas)
function isitaws() {
  return location.href = 'https://isitonaws.com/discover?name=' + location.hostname;
}
isitaws();
