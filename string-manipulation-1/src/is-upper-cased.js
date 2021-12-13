/* exported isUpperCased */
// Basically will need to make a comparison of the input vs the uppercased version of word
// Should use previous function and then take the input of that function and compare it vs input
function isUpperCased(word) {
  function capitalize(word) {
    var capWord;
    var firstChar;
    var letters;
    firstChar = word.charAt(0);
    firstChar = firstChar.toUpperCase();
    letters = word.slice(1);
    letters = letters.toUpperCase();
    capWord = firstChar + letters;
    return capWord;
  }
  if (word === capitalize(word)) {
    return true;
  } else {
    return false;
  }
}
