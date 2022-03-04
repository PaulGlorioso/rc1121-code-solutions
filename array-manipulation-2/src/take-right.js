/* exported takeRight */
function takeRight(array, count) {
  var newAr = [];
  newAr = array.slice(-count);
  return newAr;
}
