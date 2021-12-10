/* exported capitalize */
// Define a new function 'captalize' with a single parameter 'word'
// Take the first character of your 'word' and capitalize it
// With the exception of the first character, iterate through each chacacter and have it be lowercased
// return back the word

function capitalize(word) {
  var capWord;
  var firstChar;
  var letters;
  firstChar = word.charAt(0);
  firstChar = firstChar.toUpperCase();
  letters = word.slice(1);
  letters = letters.toLowerCase();
  capWord = firstChar + letters;
  return capWord;
}

// Define a new function 'capitalize' with a single parameter 'word'
// Assign a place to put completed word
// Assign a place to put capitalized letter
// Assign a place for the rest of the word
// Take your 'word' and take the first character from it and assign it to where you planned the first letter
// Take that character and capitalize it and put it back
// Take your 'word' and slice it after the first letter
// Take the rest of the letters and make them lowercase and assign it back your letters
// Concatnate the both the first letter and the rest of the letter to the completed word
// Return that word
