/* exported initial */
// Define new function 'initial' with a single parameter 'array'
// Assign a spot to place your array of from the old 'array'
// Iterate through the arrays stopping before you get to the last thing in your 'array'
// Assign everything back to your spot and return it

function initial(array) {
  var list = [];
  for (var i = 0; i < array.length - 1; i++) {
    list.push(array[i]);
  }
  return list;
}

// Define a new function 'initial' with a single parameter 'array'
// Assign a spot to place your new list of for the 'array'
// Iterate through the 'array' and assign all of them minus 1 element
// Return the new array in a list
