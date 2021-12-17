var library = [
  {
    isbn: '185-78236-02',
    title: 'The Fool\'s guide to getting lost',
    author: 'Sir Were Ami'
  },
  {
    isbn: '147-18594-74',
    title: 'The Sounds of Water',
    author: 'Hel p. Drownin'
  },
  {
    isbn: '456-20792-10',
    title: '"What Does This Even Mean", The Guide to Translating Gibberish',
    author: 'Hanalulu Becauseme'
  }
];
console.log('New Array:', library);
console.log('The type of this is:', typeof library);
var data = JSON.stringify(library);
console.log('JSON string:', data);
console.log('The type of this is:', typeof data);

var student = '{"NumberID": 123456789, "Name": "Were AmI"}';
console.log('JSON string:', student);
console.log('The type of:', typeof student);
var studentOb = JSON.parse(student);
console.log('Result', studentOb);
console.log('The typeof:', typeof studentOb);
