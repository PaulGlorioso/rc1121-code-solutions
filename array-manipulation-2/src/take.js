/* exported take */
function take(array, count) {
  var newAr = [];
  for (var i = 0; i < count; i++) {
    if (array.length > 0) {
      newAr.push(array[i]);
    } else {
      return [];
    }
  }
  return newAr;
}
