const takeAChance = require('./take-a-chance');
const roll = takeAChance('Paul');
roll.then(value => {
  console.log(value);
}, reason => {
  console.error(reason.message);
});
