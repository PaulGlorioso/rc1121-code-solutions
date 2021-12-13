/* exported getWords */
// Define new function 'getWords' with a single parameter 'string'
// Create a place to assign where you place your array of strings
// Take your 'string' and 'split' it at the spaces of the 'string' and
// assign it to your array of words
// return that array of words

function getWords(string) {
  var words = [];
  if (string.length > 0) {
    words = string.split(' ');
    return words;
  } else if (string === '') {
    return words;
  }
}

// Define a new function 'getWords' with a single parameter 'string'
// Assign a place to place your broke up string
// If that string has characters in it, split up that string and assign it
// into your empty array or words
// If that string is empty, return that empty array
