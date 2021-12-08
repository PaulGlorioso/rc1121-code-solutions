function convertMinutesToSeconds(min) {
  var sec = 60 * min;
  return sec;
}

var secLeft = convertMinutesToSeconds(5);
console.log('There are ' + secLeft + ' seconds left!');

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}
var beavis = greet('Beavis');
console.log('function greet:', beavis);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var areaSize = getArea(17, 42);
console.log('The area is:', areaSize);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
var personFirstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('The person\'s first name is ' + personFirstName);

function getLastElement(array) {
  var lastArray = array.length - 1;
  var lastElement = array[lastArray];
  return lastElement;
}
var finalElement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('The last element of the array is:', finalElement);
