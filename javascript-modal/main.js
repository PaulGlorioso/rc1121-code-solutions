function showPopUp(event) {
  if (counter1 % 2) {
    overLay.className = 'overlay on';
    popUp.className = 'popup open';
    counter1 += 2;
  } else {
    overLay.className = 'overlay off';
    popUp.className = 'popup closed';
    counter1 += 2;
  }
}
function closePopUp(event) {
  if (counter2 % 2) {
    overLay.className = 'overlay off';
    popUp.className = 'popup closed';
    counter2 += 2;
  } else {
    overLay.className = 'overlay on';
    popUp.className = 'popup open';
    counter2 += 2;
  }
}
var noBtn = document.querySelector('.surveybtn');
var modalBtn = document.querySelector('.modalbtn');
var overLay = document.querySelector('.overlay.off');
var popUp = document.querySelector('.popup.closed');
modalBtn.addEventListener('click', showPopUp);
noBtn.addEventListener('click', closePopUp);
var counter1 = 1;
var counter2 = 1;
