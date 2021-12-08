var num1 = 23;
var num2 = 15;
var num3 = 42;
var maximumValue = Math.max(num1, num2, num3);
console.log('The maximum value is:', maximumValue);

var heros = ['Batman', 'Spider-man', 'MoonKnight', 'DareDevil'];
var randomNumber = Math.random();
randomNumber = randomNumber * heros.length;
var randomIndex = Math.floor(randomNumber);
console.log('The random number is:', randomIndex);
var randomHero = heros[randomIndex];
console.log('The random hero is:', randomHero);

var library = [
  {
    title: 'How to get away with murder',
    author: 'Shivs Stabsalot'
  },
  {
    title: 'The random stranger in my yard',
    author: 'Olwas Paranoid'
  },
  {
    title: 'Uneasy Hearts',
    author: 'David Gavin'
  }
];
var lastBook = library.pop();
console.log('The last book is:', lastBook);
var firstBook = library.shift();
console.log('The first book is:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Library:', library);

var fullName = 'Paul Glorioso';
var firstAndLastName = fullName.split(' ');
console.log('First and Last Name:', firstAndLastName);
var firstName = firstAndLastName.shift();
var sayMyName = firstName.toUpperCase();
console.log('Say My Name:', sayMyName);
