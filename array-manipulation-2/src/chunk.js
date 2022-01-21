/* exported chunk */
function chunk(array, size) {
  var newAr = [];
  for (var i = 0; i < array.length; i += size) {
    var chunk = array.slice(i, i + size);
    newAr.push(chunk);
  }
  return newAr;
}
