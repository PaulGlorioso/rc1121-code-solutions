/* exported calculator */
var calculator = {
  add: function (x, y) {
    var z = x + y;
    return z;
  },
  subtract: function (x, y) {
    var z = x - y;
    return z;
  },
  multiply: function (x, y) {
    var z = x * y;
    return z;
  },
  divide: function (x, y) {
    var z = x / y;
    return z;
  },
  square: function (x) {
    var z = x * x;
    return z;
  },
  sumAll: function (numbers) {
    var z = 0;
    for (var i = 0; i < numbers.length; i++) {
      z += numbers[i];
    }
    return z;
  },
  getAverage: function (numbers) {
    var z = 0;
    for (var i = 0; i < numbers.length; i++) {
      z += numbers[i];
    }
    z = z / numbers.length;
    return z;
  }
};
