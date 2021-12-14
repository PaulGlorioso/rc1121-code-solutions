/* exported capitalizeWords */
function capitalizeWords(string) {
  var words = string.toLowerCase();
  words = words.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  words = words.join(' ');
  return words;
}
