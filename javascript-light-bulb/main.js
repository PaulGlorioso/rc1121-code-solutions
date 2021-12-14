function lightSwitch(event) {
  if (counter % 2) {
    switchBtn.className = 'bulb off';
    backG.className = 'light off';
    counter++;
  } else {
    switchBtn.className = 'bulb on';
    backG.className = 'light on';
    counter++;
  }
}
var backG = document.querySelector('.light.off');
var switchBtn = document.querySelector('.bulb.off');
switchBtn.addEventListener('click', lightSwitch);
var counter = 0;
