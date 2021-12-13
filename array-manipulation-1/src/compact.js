/* exported compact */
function compact(array) {
  var list = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      list.push(array[i]);
    }
  }
  return list;
}
