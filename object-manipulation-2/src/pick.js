/* exported pick */
function pick(source, keys) {
  var newOb = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === key && source[key] !== undefined) {
        newOb[keys[i]] = source[key];
      }
    }
  }
  return newOb;
}
