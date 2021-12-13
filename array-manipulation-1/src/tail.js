/* exported tail */
// Define a new function 'tail' with one parameter 'array'
// Assign a spot to put your array of things
// Iterate through your array taking everything after the first thing in your array
// Assign all your things to your new spot
// Return it all

function tail(array) {
  var list = [];
  for (var i = 1; i < array.length; i++) {
    list.push(array[i]);
  }
  return list;
}
