/* exported reverse */
// Define a new function 'reverse' with a parameter 'array'
// Assign an array to place everything from the old 'array'
// Assign a counter based off the length of the 'array' minus 1
// While the counter is greater than 0, iterate through the 'array', pushing
// everything to the new list starting from the end while decrementing the counter
// by 1
// Return the new list based off the old 'array'

function reverse(array) {
  var reverse = [];
  var i = array.length - 1;
  while (i >= 0) {
    reverse.push(array[i]);
    i--;
  }
  return reverse;
}

// Define a new function 'reverse' with a single parameter 'array'
// Assign a spot for your new 'array' to sit
// Assign a counter based off the length of your 'array' minus 1
// While that counter is greater than 0, push everything to your new list while
// decrementing the counter by 1
// Return the new list
