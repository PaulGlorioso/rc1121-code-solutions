/* exported includesSeven */
function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7 && typeof array[i] !== 'string') {
      return true;
    }
  }
  return false;
}
