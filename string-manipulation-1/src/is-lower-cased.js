/* exported isLowerCased */
function isLowerCased(word) {
  function lowerCased(word) {
    var capWord;
    var firstChar;
    var letters;
    firstChar = word.charAt(0);
    firstChar = firstChar.toLowerCase();
    letters = word.slice(1);
    letters = letters.toLowerCase();
    capWord = firstChar + letters;
    return capWord;
  }
  if (word === lowerCased(word)) {
    return true;
  } else {
    return false;
  }
}
