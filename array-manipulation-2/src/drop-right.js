/* exported dropRight */
function dropRight(array, count) {
  var newAr = [];
  newAr = array.slice(0, -count);
  return newAr;
}
