const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];
const add = (previous, current) => previous + current;
const sum = numbers.reduce(add);
console.log('sum', sum);

const multi = (previous, current) => previous * current;
const product = numbers.reduce(multi);
console.log('product', product);

let total = 0;
const bank = (previous, current, index) => {
  if (account[index].type === 'deposit') {
    total = total + account[index].amount;
  } else if (account[index].type === 'withdrawal') {
    total = total - account[index].amount;
  }
  return total;
};
const balance = account.reduce(bank, 0);
console.log('balance', balance);

const newOb = {};
const prop = (previous, current, index) => {
  Object.assign(newOb, traits[index]);
  return newOb;
};
const composite = traits.reduce(prop, 0);
console.log('composite', composite);
