/* exported truncate */
function truncate(length, string) {
  var newSt = '';
  for (var i = 0; i < length; i++) {
    newSt += string.charAt(i);
  }
  newSt += '...';
  return newSt;
}
