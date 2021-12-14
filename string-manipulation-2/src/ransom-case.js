/* exported ransomCase */
function ransomCase(string) {
  var word = string.toLowerCase();
  var newWord = '';
  for (var i = 0; i < word.length; i++) {
    if (i % 2) {
      newWord += word.charAt(i).toUpperCase();
    } else {
      newWord += word.charAt(i);
    }
  }
  return newWord;
}
