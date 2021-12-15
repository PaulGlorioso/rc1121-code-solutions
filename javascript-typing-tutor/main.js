var letters = document.querySelectorAll('span');
var counter = 0;
document.addEventListener('keydown', function (event) {
  if (letters[counter].textContent === event.key) {
    letters[counter].className = 'green';
    letters[counter + 1].className = 'cursor';
    counter++;
  } else {
    letters[counter].className = 'red red-cursor';

  }
});
