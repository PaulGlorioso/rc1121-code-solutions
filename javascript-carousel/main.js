var $left = document.querySelector('.fa-chevron-left');
var $right = document.querySelector('.fa-chevron-right');
var $but1 = document.querySelector('.img1');
var $but2 = document.querySelector('.img2');
var $but3 = document.querySelector('.img3');
var $but4 = document.querySelector('.img4');
var $but5 = document.querySelector('.img5');
var $img = document.querySelector('.bulbasaur');

function imgChange() {
  if ($img.className === 'bulbasaur') {
    $img.className = 'charmander';
    $img.src = 'images/004.png';
    $but1.className = 'img1';
    $but2.className = 'cur img2';
  } else if ($img.className === 'charmander') {
    $img.className = 'squirtle';
    $img.src = 'images/007.png';
    $but2.className = 'img2';
    $but3.className = 'cur img3';
  } else if ($img.className === 'squirtle') {
    $img.className = 'pikachu';
    $img.src = 'images/025.png';
    $but3.className = 'img3';
    $but4.className = 'cur img4';
  } else if ($img.className === 'pikachu') {
    $img.className = 'jiggly';
    $img.src = 'images/039.png';
    $but4.className = 'img4';
    $but5.className = 'cur img5';
  } else if ($img.className === 'jiggly') {
    $img.className = 'bulbasaur';
    $img.src = 'images/001.png';
    $but5.className = 'img5';
    $but1.className = 'cur img1';
  }
}
function revImgChange() {
  if ($img.className === 'bulbasaur') {
    $img.className = 'jiggly';
    $img.src = 'images/039.png';
    $but1.className = 'img1';
    $but5.className = 'cur img5';
  } else if ($img.className === 'jiggly') {
    $img.className = 'pikachu';
    $img.src = 'images/025.png';
    $but5.className = 'img5';
    $but4.className = 'cur img4';
  } else if ($img.className === 'pikachu') {
    $img.className = 'squirtle';
    $img.src = 'images/007.png';
    $but4.className = 'img4';
    $but3.className = 'cur img3';
  } else if ($img.className === 'squirtle') {
    $img.className = 'charmander';
    $img.src = 'images/004.png';
    $but3.className = 'img3';
    $but2.className = 'cur img2';
  } else if ($img.className === 'charmander') {
    $img.className = 'bulbasaur';
    $img.src = 'images/001.png';
    $but2.className = 'img2';
    $but1.className = 'cur img1';
  }
}
setInterval(imgChange, 3000);

$right.addEventListener('click', imgChange);
$left.addEventListener('click', revImgChange);
$but1.addEventListener('click', function (event) {
  $img.className = 'bulbasaur';
  $img.src = 'images/001.png';
  $but1.className = 'cur img1';
  $but2.className = 'img2';
  $but3.className = 'img3';
  $but4.className = 'img4';
  $but5.className = 'img5';
});
$but2.addEventListener('click', function (event) {
  $img.className = 'charmander';
  $img.src = 'images/004.png';
  $but1.className = 'img1';
  $but2.className = 'cur img2';
  $but3.className = 'img3';
  $but4.className = 'img4';
  $but5.className = 'img5';
}); $but3.addEventListener('click', function (event) {
  $img.className = 'squirtle';
  $img.src = 'images/007.png';
  $but1.className = 'img1';
  $but2.className = 'img2';
  $but3.className = 'cur img3';
  $but4.className = 'img4';
  $but5.className = 'img5';
}); $but4.addEventListener('click', function (event) {
  $img.className = 'pikachu';
  $img.src = 'images/025.png';
  $but1.className = 'img1';
  $but2.className = 'img2';
  $but3.className = 'img3';
  $but4.className = 'cur img4';
  $but5.className = 'img5';
}); $but5.addEventListener('click', function (event) {
  $img.className = 'jiggly';
  $img.src = 'images/039.png';
  $but1.className = 'img1';
  $but2.className = 'img2';
  $but3.className = 'img3';
  $but4.className = 'img4';
  $but5.className = 'cur img5';
});
