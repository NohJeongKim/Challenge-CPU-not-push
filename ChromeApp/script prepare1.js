// 절대 바꾸지 않는 변수 3개와 변경 가능한 변수 1개가 있다는 의이다.
const firstNum = 5;
const secNum = 2;

let myName = "tino";
const veryLongVariableName = 0; // Python은 _를 이용하고, JS는 대문자를 사용한다.

console.log(firstNum + secNum);
console.log(firstNum * secNum);
console.log(firstNum / secNum);

console.log("Hello, " + myName + "!!"); // (let) 한번 myName 생기면 그냥 계속 업데이트 시켜주면 된다. const는 불가능하다.
console.log(veryLongVariableName);

myName = "nicolas"; // variable update!
console.log("And... your name is " + myName + ".");

// Boolean : true / false
const amIfat = null;
let something; // undefined , 값이 주어지지 않음
console.log(amIfat);
console.log(something);
console.log(something, amIfat);

// 사용자가 로그인을 하였는가? , 웹사이트가 로딩되고 있는가? 등등에 이용된다.
// null (value는 있음 , 아무 것도 없는 상태로 채워져있음 , 비워져있어요~!) != false (value 있음)

/*
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const dayOfWeek = mon + tue + wed + thu + fri + sat + sun;
console.log(dayOfWeek); // 1개의 요일에 접근하기가 굉장히 어렵다. 그저 text이다.

const week = [mon, tue, wed, thu, fri, sat, sun]; // variable 갖지 않고 해도 된다.
*/

const week = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(week);
console.log(week[0]); // index 이용하기.
console.log(week[4]); // index는 0부터 시작한다.

// Add one more day to the array
week.push("sun"); // 뒤에 item을 붙여주기.
console.log(week);

const nonsense = [1, 2, "Hello", false, undefined, true, null, "tino"];
console.log(nonsense);

const toBuy = ["apple", "banana", "potato", "strawberry", "pizza"];
console.log(toBuy);
toBuy.push("cola");
console.log(toBuy);
console.log(toBuy[4]);
// out of index : Error!

// Object
/*
const playerName = "tino-kim";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little-bit";
별로 좋지 않다. 변수 이름을 모두 기억해야하고, property 이름도 기억해야 한다.
*/

// 이를 가능한 최선으로 정리하기 위해서 Array 형태를 이용해보자!
/*
const player = ["tino-kim", 121212, false, "little-bit"];
Array에서도 좋지 않음. 어떤 것을 나타내는지 제대로 안 알려주기 때문이다.
*/

const player = {
  name: "tino-kim",
  points: 10,
  handsome: false,
  fat: "little-bit",
};

console.log(player); // console이 object이고, 그 안의 어딘가에 log가 있다는 의미이다. log는 function을 의미한다.
console.log(player.name);
console.log(player["name"]);
// 데이터를 정리하는 아주 좋은 방법이다.
// 리스트는 모든 값이 같은 의미를 가진다. 예를 들면, week 리스트를 가지면 그 리스트에 있는 모든 것이 한 주의 요일이라는 것을 알 수 있다.

console.log(player);
player.handsome = true;
player.lastName = "potato";
player.points = player.points + 15;
console.log(player);
// object 안의 무언가를 수정하는 것이다. object 자체는 동일하다.
// constant 안의 무언가를 업데이트하는 것은 아무 문제가 없다.
// 원하면 너가 원하는 property를 만들 수 있다.

// Function
// 계속 반복되는 부분을 계속 작성하는 것은 좋은 코드가 아니다. -> 코드의 반복을 최소한으로 줄여야 한다.
function sayHello(name, age) {
  // 인수 argument : 함수를 실행하는 동안에 어떤 정보를 함수에게 보낼 수 있는 방법이다.
  // function에는 소괄호가 반드시 필요하다. 괄호 2개가 함수를 실행하는 방법이다.
  console.log(`Hello, my name is ${name}, and my age is ${age}.`);
}

sayHello("tino", 25); // ()를 통해서 출력한 것이고, "tino" 라는 데이터를 함수에 보내고 있다.
sayHello("nico", 10);
sayHello("amy", 13);

// 계산기 만들기

function plus(firstNum, secNum) {
  // 여기에 있는 인수들은 함수 내에서만 동작한다.
  // 블록 밖에서는 이 인수들이 존재하지 않는다.
  console.log(firstNum + secNum);
}

plus(3, 7); // 3 + 7 = 10, 인수는 순서대로 들어간다.

function multiple(firstNum, secNum) {
  // 여기에 있는 인수들은 함수 내에서만 동작한다.
  // 블록 밖에서는 이 인수들이 존재하지 않는다.
  console.log(firstNum * secNum);
}

multiple(5, 8); // 5 * 8 = 40

const user = {
  nickName: "tino-kim",
  sayHello: function (otherPersonName) {
    console.log("hello! " + otherPersonName + " Nice to meet you!");
    // object 안에서 함수를 정의할 수도 있다. 함수 이름이 들어오는 순서가 달라지는 것을 기억하자.
  },
};

console.log(user.nickName);
user.sayHello("lynn"); // object 안에 있는 함수를 불러오는 방법이다.
user.sayHello("peter");
user.sayHello("merry jane"); // 함수에게 데이터를 보내는 방법이다.
