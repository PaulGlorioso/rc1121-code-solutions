let count = 3;
const interval = setInterval(() => {
  if (count === 0) {
    console.log('Blast Off!');
    clearInterval(interval);
  } else {
    console.log(count);
    count--;
  }
}, 1000);
