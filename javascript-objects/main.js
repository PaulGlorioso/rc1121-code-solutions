var student = {
  firstName: 'Paul',
  lastName: 'Glorioso',
  age: 26
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('The value of fullName is:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Security Guard';

console.log('The value of student.livesInIrvine is:', student.livesInIrvine);
console.log('The value of student.previousOccupation is:', student.previousOccupation);
console.log('The value of student:', student);

var vehicle = {
  make: 'Toyota',
  model: 'Supra',
  year: 93
};

vehicle['color'] = 'Orange';
vehicle['isConvertible'] = false;

console.log('The value of vehicle["color"] is:', vehicle['color']);
console.log('The value of vehicle["isConvertible"] is:', vehicle['isConvertible']);
console.log('The value of vehicle is:', vehicle);

var pet = {
  name: 'Zeus',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('The value of pet is:', pet);
