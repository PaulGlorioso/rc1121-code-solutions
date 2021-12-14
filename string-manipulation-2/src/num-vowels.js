/* exported numVowels */
function numVowels(string) {
  var counter = 0;
  var words = string.toLowerCase();
  for (var i = 0; i < words.length; i++) {
    if (words.charAt(i).includes('a')) {
      counter++;
    } else if (words.charAt(i).includes('e')) {
      counter++;
    } else if (words.charAt(i).includes('i')) {
      counter++;
    } else if (words.charAt(i).includes('o')) {
      counter++;
    } else if (words.charAt(i).includes('u')) {
      counter++;
    }
  } return counter;
}
