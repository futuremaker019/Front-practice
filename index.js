// 프로그램 작동 개요
// 1. 새로고침을 누르면 주사위 이미지가 바뀌며 어떤 플래이어가 이겼는지
//   혹은 비겼는지 알려준다.
//
// 코딩 개요
// html (필요 항목)
// 1. title -- 어던 player가 이겼는지 혹은 비겼는지 나타내준다.
// 2. image -- 주사위 사진이 변하며 각각의 숫자를 나타내준다.
//
// js
// 1. 주사위 작동 코딩 생성 (Math.random(), Math.floor() 사용함)
// 2. 매칭 시키기
// 2-1. randomNumber 변수와 주사위 코딩 매칭, 작동문은 주사위 이미지 (if 문 사용)
// 2-1. winner 정하기, (if 문 사용)

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

function diceRandom1 () {
  
  if (randomNumber1 === 1){
    var num = document.querySelector(".img1").setAttribute("src", "images/dice1.png");
  }
  else if (randomNumber1 === 2) {
    var num = document.querySelector(".img1").setAttribute("src", "images/dice2.png");
  }
  else if (randomNumber1 === 3) {
    var num = document.querySelector(".img1").setAttribute("src", "images/dice3.png");
  }
  else if (randomNumber1 === 4) {
    var num = document.querySelector(".img1").setAttribute("src", "images/dice4.png");
  }
  else if (randomNumber1 === 5) {
    var num = document.querySelector(".img1").setAttribute("src", "images/dice5.png");
  }
  else {
    var num = document.querySelector(".img1").setAttribute("src", "images/dice6.png");
  }
  return num;
}

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

function diceRandom2 () {

  if (randomNumber2 === 1){
    var num = document.querySelector(".img2").setAttribute("src", "images/dice1.png");
  }
  else if (randomNumber2 === 2) {
    var num = document.querySelector(".img2").setAttribute("src", "images/dice2.png");
  }
  else if (randomNumber2 === 3) {
    var num = document.querySelector(".img2").setAttribute("src", "images/dice3.png");
  }
  else if (randomNumber2 === 4) {
    var num = document.querySelector(".img2").setAttribute("src", "images/dice4.png");
  }
  else if (randomNumber2 === 5) {
    var num = document.querySelector(".img2").setAttribute("src", "images/dice5.png");
  }
  else {
    var num = document.querySelector(".img2").setAttribute("src", "images/dice6.png");
  }
  return num;
}

function winner() {


  if (randomNumber1 > randomNumber2) {
    var whoWins = document.querySelector("h1").innerHTML = "Player 1 wins"
  }
  else if (randomNumber1 < randomNumber2) {
    var whoWins = document.querySelector("h1").innerHTML = "Player 2 wins"
  }
  else {
    var whoWins = document.querySelector("h1").innerHTML = "Draw"
  }
  return whoWins;
}

diceRandom1 ();
diceRandom2 ();
winner();
