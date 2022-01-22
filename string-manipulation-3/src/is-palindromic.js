/* exported isPalindromic */
function isPalindromic(string) {
  var re = /[^A-Za-z0-9]/g;
  var lowStr = string.toLowerCase().replace(re, '');
  var reverse = lowStr.split('').reverse().join('');
  if (reverse !== lowStr) {
    return false;
  } else {
    return true;
  }
}
