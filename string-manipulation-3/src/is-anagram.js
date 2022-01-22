/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var str1 = firstString;
  str1 = str1.replace(/\s/g, '');
  str1 = str1.split('');
  str1 = str1.sort();
  var str2 = secondString;
  str2 = str2.replace(/\s/g, '');
  str2 = str2.split('');
  str2 = str2.sort();
  for (var i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      return false;
    }
  }
  return true;
}
