/* exported findIndex */
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      var index = i;
      return index;
    }
  }
  return -1;
}
