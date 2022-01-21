/* exported drop */
function drop(array, count) {
  var newAr = [];
  for (var i = 0; i < array.length; i++) {
    newAr = array.slice(count);
  }
  return newAr;
}
