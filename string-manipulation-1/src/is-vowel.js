/* exported isVowel */
// Define a new function 'isVowel' with one parameter 'character'
// Not a loop, will be if else statement, so throwing the character down a ladder
// of expressions comparing the character to every vowel in the alphabet
// where it would either return true or false
function isVowel(character) {
  if (character === 'a' || character === 'A') {
    return true;
  } else if (character === 'e' || character === 'E') {
    return true;
  } else if (character === 'i' || character === 'I') {
    return true;
  } else if (character === 'o' || character === 'O') {
    return true;
  } else if (character === 'u' || character === 'U') {
    return true;
  } else {
    return false;
  }
}

// Define a new function 'isVowel' with one parameter 'character'
// Compare a character with each vowel checking both lowercase and uppercase
// which should either return true if it is a vowel or return false if it is not
// a vowel
