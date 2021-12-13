/* exported toObject */
// Define a new function 'toObject' with a parameter 'keyValuePair'
// Assign a place to put your new object
// Assign where to put the values and assign it the second value of the 'keyValuePair'
// Assign where to put the properties and assign it the first value of the 'keyValuePair'
// Assign the values to the object accessed by the properties
// return the object

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
// Define a new function 'toObject' with one parameter 'keyValuePair'
// Assign a where you plan to put your new object
// With the second value of the pair, assign it to your object accessed by the first value of the 'pair'
// return the object
