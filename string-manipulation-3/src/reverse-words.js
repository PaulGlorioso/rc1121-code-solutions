/* exported reverseWords */
function reverseWords(string) {
  var splitString = string.split(' ');
  var reverse = '';
  var revWord = [];
  for (var i = 0; i < splitString.length; i++) {
    revWord.push(splitString[i].split('').reverse().join(''));
  }
  reverse = revWord.join(' ');
  return reverse;
}
