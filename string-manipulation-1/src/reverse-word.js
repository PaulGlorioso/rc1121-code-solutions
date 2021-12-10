/* exported reverseWord */
// Define a new function 'reverseWord' with a single parameter 'word'
// Assign a place to put your backwards word
// Take your 'word' and pop off each character in your word and assign it to where you plan to put your backwards word
// with each character, concatnate every character till you reach the end of your word

function reverseWord(word) {
  var takenLetter;
  var reverse = '';
  var i = word.length;
  while (i >= 0) {
    takenLetter = word.charAt(i);
    reverse += takenLetter;
    i--;
  }
  return reverse;
}

// Define a new function 'reverseWord' with a single parameter 'word'
// Assign a place to where you take a character from your 'word'
// Assign a place where you plan to concatnate your characters
// Assign a counter from how long your 'word' is
// While that counter is still greater than 0, pop off your letter from the end of your word
// and concatnate it to where you plan your word to go and then lower your counter by 1
// Iterate through the 'word' till its in reverse and then return your word
