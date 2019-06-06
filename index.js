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
var randomImage1 = "images/dice" + randomNumber1 + ".png";
var dice1 = document.querySelectorAll("img")[0].setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
var dice2 = document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "★ Player1 wins";
}  else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "♬ Player2 wins";
} else {
  document.querySelector("h1").innerHTML = "Draw ♣";
}

document.write("hi there");
