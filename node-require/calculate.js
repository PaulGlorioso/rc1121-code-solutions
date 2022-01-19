const add = require('./add');
const minus = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const x = parseFloat(process.argv[2]);
const y = parseFloat(process.argv[4]);
const op = process.argv[3];
if (op === 'plus') {
  console.log(`${x} plus ${y} equals ${add(x, y)}`);
} else if (op === 'minus') {
  console.log(`${x} minus ${y} equals ${minus(x, y)}`);
} else if (op === 'multiplyed by' || op === 'times') {
  console.log(`${x} times ${y} equals ${multiply(x, y)}`);
} else if (op === 'divide') {
  console.log(`${x} divided by ${y} equals ${divide(x, y)}`);
} else {
  console.log('Unknown Operator');
  process.exit();
}
