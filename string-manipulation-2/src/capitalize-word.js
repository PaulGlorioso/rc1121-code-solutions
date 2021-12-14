/* exported capitalizeWord */
function capitalizeWord(word) {
  var wordString = word.toLowerCase();
  var re = 'javascript';
  if (wordString.includes(re) !== true) {
    var capWord;
    var firstChar;
    var letters;
    firstChar = word.charAt(0);
    firstChar = firstChar.toUpperCase();
    letters = word.slice(1);
    letters = letters.toLowerCase();
    capWord = firstChar + letters;
    return capWord;
  } else if (wordString.includes(re) === true) {
    var java;
    var jFirst;
    var sFirst;
    var jLetters;
    var sLetters;
    jFirst = word.charAt(0);
    jFirst = jFirst.toUpperCase();
    sFirst = word.charAt(4);
    sFirst = sFirst.toUpperCase();
    jLetters = word.slice(1, 4);
    jLetters = jLetters.toLowerCase();
    sLetters = word.slice(5);
    sLetters = sLetters.toLowerCase();
    java = jFirst + jLetters + sFirst + sLetters;
    return java;
  }
}
