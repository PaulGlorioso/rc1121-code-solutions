function ExampleConstructor() {

}
console.log('value of prototype:', ExampleConstructor.prototype);
console.log('typeof a prototype:', typeof ExampleConstructor.prototype);

var result = new ExampleConstructor();
console.log('value of result:', result);

var instanceResult = (result instanceof ExampleConstructor);
console.log('value of instance:', instanceResult);
