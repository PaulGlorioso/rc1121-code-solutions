var orderHistory = [
  {
    orderPlaced: 'August 4, 2020',
    orderNum: '114-3941689-8772232',
    item: ['JavaScript for impatient programmers', 'Rauschmayer, Dr. Axel'],
    price: '$31.55',
    total: '$34.00',
    shipTo: 'JS Masher',
    delivered: 'August 8, 2020',
    returnBefore: 'September 7, 2020'
  },
  {
    orderPlaced: 'July 19, 2020',
    orderNum: '113-9984268-1280257',
    item: ['The Timeless Way of Building', 'Alexander, Christopher'],
    price: '$41.33',
    total: '$44.53',
    shipTo: 'JS Masher',
    delivered: 'July 20, 2020',
    returnBefore: 'August 19, 2020'
  },
  {
    orderPlaced: 'July 4, 2020',
    orderNum: '114-2875557-9059409',
    item: ['Gamecube Controller Adapter. Super Smash Bros. Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter'],
    price: '$15.98',
    total: '$17.22',
    shipTo: 'JS Masher',
    delivered: 'July 7, 2020',
    returnBefore: 'August 5, 2020'
  },
  {
    orderPlaced: 'July 3, 2020',
    orderNum: '113-2883177-2648248',
    item: [['GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)'], ['The Art of SQL', 'Feroult, Stephane']],
    price: [['$94.95'], ['$33.99']],
    total: '$138.93',
    shipTo: 'JS Masher',
    delivered: 'July 5, 2020',
    returnBefore: [['August 4, 2020'], ['August 4, 2020']]
  }
];
console.log('The latest order:', orderHistory[0]);
console.log('The second latest order:', orderHistory[1]);
console.log('The third latest order:', orderHistory[2]);
console.log('The earliest order:', orderHistory[3]);
