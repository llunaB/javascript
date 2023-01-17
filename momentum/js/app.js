/////// variable : const, let
const a = 5; //상수 const => update NO
const veryLongVariableName = 0; //camel case

let myName = "Jessie"; //let은 생성에 사용 => update OK
myName = "Jennie";
console.log("New name is " + myName);

// 기본적으로 const 쓰고 업데이트 필요할 때 let 쓰기!!
// var 절대 쓰지않기!! 항상 업데이트가 가능하고 생성도 다시되어 혼란.



//////// boolean, null, undefined
let amIFat = true;
let amITall = null;   //null은 값이 있는데, 어떤 값이 "없다"라는걸 확실히 하기 위함!
let amIHot;           //undefined;
console.log(amIHot);



// object & property
const player = {
  name: "euijin",
  points: 10,
  fat: false
};
console.log(player);
console.log(player.points);
console.log(player['fat']);
player.fat = true;  // change property
console.log(player['fat']);
player.lastName = "potato"; // add property
console.log(player);
player.points = player.points + 15;
console.log(player.points); // 25

// function
function sayHello(argument_name, age) {
  console.log("hello, " + argument_name, age);
}

for(var i=0; i<3; i++) {
  sayHello("euiin", 13);
}

function plus(a, b) {
  return a+b;
}
console.log(plus(2,"hh"));

const toBuy = ["potato", "tomato", "pizze"];
toBuy[2] = "water";

console.log(toBuy);
toBuy.push("honey");
console.log(toBuy);

function minusFive(p) {
  console.log(p - 5);
}

const calculator = {
  add: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  }
}
// 리턴 값을 변수에 담을 것!!!
const plusResult = calculator.add(1, 2);
const minusResult = calculator.minus(1, 2);

console.log(plusResult, minusResult);
//console.log(calculator.add(1, 2)); // undefined => 결과가 없고 실행만 한다.

const age = 90;
function calcKrAte(ageOfForeigber) {
  return ageOfForeigber + 2;
}
const krAge = calcKrAte(age); // 함수에서 return 한 것을 krAge 값으로
console.log(krAge);

///////////////////////////////////
//const age2 = parseInt(prompt("age please")); //parse 전 기본은 string
// NaN => Not a Number  
// console.log(isNaN(age2)); // NaN 이면 true, 아니면 false를 반환
// // console.log(typeof age2);
// if (isNaN(age2) || age2 < 0) {
//   console.log("positive number please");
// } else if (age2 < 18) {
//   console.log("too young");
// } else if (age2 >= 18 && age <= 50) {
//   console.log("you can drink a lot");
// } else
// console.log("you can drink");


///////////////////////////////////

// const title = document.getElementById("title");
// console.dir(title);
// console.log(title.className);
// title.innerText = "Got you!";

// const hellos = document.getElementsByClassName("hello");
// hellos[0].innerHTML = "Changed";
// console.log(hellos);

// const title0 = document.getElementsByTagName("h1");
// console.log(title0);

// // css selector : 클래스 잡고 > 그 안의 태그
// const title = document.querySelector(".hello h1");
// console.log(title);

// const titles = document.querySelectorAll(".hello h1");
// console.log(titles); //Array

// const firstTitle = document.querySelectorAll(".hello h1:first-child");
// console.log(firstTitle);


// // same
// const title = document.querySelector("#hello");
// const firstTitle = document.querySelectorAll("#hello h1:first-child");
// const title = document.getElementById("hello");

// const firstTitle = document.querySelector(".hello h1");
const firstTitle = document.querySelector("div.hello:first-child h1");
console.log(firstTitle);

firstTitle.innerHTML = "바꿨다!"

console.dir(firstTitle);
//on + property =  이벤트, on 빼고 쓴다.

function handleTitleClick() {
  //js로 element에 active class주기
  //특정 class만 넣었다 빼기
  const clickedClass = "clicked";
  //toggle 사용
  firstTitle.classList.toggle("clicked");
  // if (firstTitle.classList.contains(clickedClass)) {
  //   firstTitle.classList.remove(clickedClass);
  // } else {
  //   firstTitle.classList.add(clickedClass);
  // }


  // if (firstTitle.className === clickedClass) {
  //   firstTitle.className = "";
  // } else {
  //   firstTitle.className = clickedClass;
  // }


  //직접바꾸기
  // const currentColor = firstTitle.style.color;
  // let newColor;

  // if (currentColor === "blue") {
  //   newColor = "red";
  // } else {
  //   newColor = "blue";
  // }
  // firstTitle.style.color = newColor;
}

function handleMouseEnter() {
  console.log("mouse is here!");
}

function handleMouseLeave() {
  console.log("mouse is not here!");
}

firstTitle.addEventListener("click", handleTitleClick);
firstTitle.addEventListener("mouseenter", handleMouseEnter);
firstTitle.addEventListener("mouseleave", handleMouseLeave);

//getEventListeners(target);


///////////////////////////////////////////
// const loginForm = document.querySelector("#login-form input");
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// LogIn을 누르면 이름이 콘솔에 뜨게 해보자!
// 버튼에 이벤트 추가
// function handleButtonClick() {
//   const username = loginInput.value;
//   if (username === "") {
//     alert("enter your name");
//   } else if (username.length > 15){
//     alert("too long");
//   } else {
//     console.log("hello " + username);
//   }
// }

// loginButton.addEventListener("click", handleButtonClick);


// div가 아닌 form submit 버젼
const loginForm2 = document.getElementById("login-form2");
const loginInput2 = loginForm2.querySelector("input");
// const loginButton2 = loginForm2.querySelector("button");

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//submit은 정보를 전달한다!! () 에 인자를 주면 쓰겠다는것임
function onLoginSubmit(event) { //function takes one argument
  //event object
  event.preventDefault(); //새로고침 방지(브라우저 기본동작 방지)
  // console.log(loginInput2.value);
  const username = loginInput2.value;
  //username을 기억하기 - localStorage
  localStorage.setItem(USERNAME_KEY, username);
  loginForm2.classList.add(HIDDEN_CLASSNAME);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  
}

//1. localStorage에 username이 있으면 h1, 없으면 form
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //form 보이기
  loginForm2.classList.remove(HIDDEN_CLASSNAME);
  loginForm2.addEventListener("submit", onLoginSubmit);
  
} else {
  
  //greeting 보이기
  //greeting.innerHTML = "Hello " + username;
  paintGreetings();

}
