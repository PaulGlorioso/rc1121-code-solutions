/* exported getKeys */
function getKeys(object) {
  var keys = [];
  for (object in object) {
    keys.push(object);
  }
  return keys;
}
