/* exported firstChars */
function firstChars(length, string) {
  var newSt = '';
  for (var i = 0; i < length; i++) {
    newSt += string.charAt(i);
  }
  return newSt;
}
