/* exported omit */
function omit(source, keys) {
  var newOb = {};
  newOb = Object.assign(newOb, source);
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key) {
        delete newOb[keys[i]];
      }
    }
  }
  return newOb;
}
