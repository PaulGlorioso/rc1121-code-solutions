/* exported invert */
function invert(source) {
  var newOb = {};
  for (var key in source) {
    newOb[source[key]] = key;
  }
  return newOb;
}
