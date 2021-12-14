/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var charas = string.split('');
  var firstC = charas[firstIndex];
  charas[firstIndex] = charas[secondIndex];
  charas[secondIndex] = firstC;
  charas = charas.join('');
  return charas;
}
