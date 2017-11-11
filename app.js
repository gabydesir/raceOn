

const startGame = function(){
  // created my cars so I can grab them later on...
const car1 = document.querySelector('.car1');
const car2 = document.querySelector('.car2');
const container = document.querySelector('.container');
const banner = document.getElementById('banner');
const reset = document.getElementById('reset');

 //set global values
let p1DivLeft = 12;
let p2DivLeft = 12;

// set banner
banner.innerHTML = "GO GO GO!"

// listen for all key events
document.addEventListener('keyup', function game(event){
  //console.log(event);
  // right arrow is pressed
  if (event.keyCode === 39){
    console.log('working');
    p1DivLeft = p1DivLeft + 30;
    car1.style.left = `${p1DivLeft}px`;
  }
//z is pressed
  if (event.keyCode === 90){
    p2DivLeft = p2DivLeft + 30;
    car2.style.left = `${p2DivLeft}px`;
  }
  //checking if player 1 won
  if (car1.style.left > '800px') {
    banner.innerHTML = 'Green Wins!!!';
    document.removeEventListener('keyup', game);
  }
   if (car2.style.left > '800px') {
    banner.innerHTML = 'Yellow Wins!!!';
    document.removeEventListener('keyup', game);
    }
  })
}

window.onload = function() {
  document.querySelector('#button').addEventListener('click', startGame);
  /* write your code here */
};

  document.querySelector('#reset').addEventListener('click', function(){
    location.reload()
  })
