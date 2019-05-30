var randomNumber1 = Math.floor(Math.random() * 6) + 1;

function diceRandom1 () {

  var num;

  if (randomNumber1 === 1){
    num = document.querySelector(".img1").setAttribute("src", "images/dice1.png");
  }
  else if (randomNumber1 === 2) {
    num = document.querySelector(".img1").setAttribute("src", "images/dice2.png");
  }
  else if (randomNumber1 === 3) {
    num = document.querySelector(".img1").setAttribute("src", "images/dice3.png");
  }
  else if (randomNumber1 === 4) {
    num = document.querySelector(".img1").setAttribute("src", "images/dice4.png");
  }
  else if (randomNumber1 === 5) {
    num = document.querySelector(".img1").setAttribute("src", "images/dice5.png");
  }
  else {
    num = document.querySelector(".img1").setAttribute("src", "images/dice6.png");
  }
  return num;
}

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

function diceRandom2 () {

  var num;

  if (randomNumber2 === 1){
    num = document.querySelector(".img2").setAttribute("src", "images/dice1.png");
  }
  else if (randomNumber2 === 2) {
    num = document.querySelector(".img2").setAttribute("src", "images/dice2.png");
  }
  else if (randomNumber2 === 3) {
    num = document.querySelector(".img2").setAttribute("src", "images/dice3.png");
  }
  else if (randomNumber2 === 4) {
    num = document.querySelector(".img2").setAttribute("src", "images/dice4.png");
  }
  else if (randomNumber2 === 5) {
    num = document.querySelector(".img2").setAttribute("src", "images/dice5.png");
  }
  else {
    num = document.querySelector(".img2").setAttribute("src", "images/dice6.png");
  }
  return num;
}

function winner() {

  var whoWins =  null;

  if (randomNumber1 > randomNumber2) {
    whoWins = document.querySelector("h1").innerHTML = "Player 1 wins";
  }
  else if (randomNumber1 < randomNumber2) {
    whoWins = document.querySelector("h1").innerHTML = "Player 2 wins";
  }
  else {
    whoWins = document.querySelector("h1").innerHTML = "Draw";
  }
  return whoWins;
}

diceRandom1 ();
diceRandom2 ();
winner();
