let count = 3;
let timer;
function countdown() {
  timer = setInterval(() => {
    console.log(count);
    count--;
    if (count === 0) {
      setTimeout(() => {
        clearInterval(timer);
        console.log('Blast Off!');
      }, 1000);
    }
  }, 1000);
}
countdown();
