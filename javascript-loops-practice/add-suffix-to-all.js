/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var word = [];
  for (var i = 0; i < words.length; i++) {
    word.push(words[i].concat(suffix));
  }
  return word;
}
