/* exported getValues */
function getValues(object) {
  var values = [];
  var i = 0;
  for (i in object) {
    values.push(object[i]);
  }
  return values;
}
