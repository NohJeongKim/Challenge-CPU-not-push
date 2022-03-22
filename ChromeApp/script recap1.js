// 1. data-type: number, string
// 2. variable : const를 이용하고, 가끔 let을 이용하고, var는 절대로 사용하지 않기.

const a = 5;
let isNicoFat = true; // 업데이트 하고 싶은 경우에 let을 이용한다.
console.log(a);
console.log(isNicoFat);
isNicoFat = false; // 다시 let을 붙이지 않아도 된다.
console.log(isNicoFat);

// 3.  true, false, null, undefined
// boolean : true, false
// null : 변수에 값이 할당되어 있다. 값은  "비어있음" 이다.
// undefined : 변수가 값이 할당되어 있지 않다.
let hello; // undefined
console.log(hello);

// 4. Array
const days = [1, 2, true, "text", null, undefined];
console.log(days);
const toBuy = ["potato", "pizza", "orange", "apple", "candy"];
console.log(toBuy);
console.log(toBuy[2]);
toBuy.push("water");
console.log(toBuy);
toBuy[2] = "strawberry";
console.log(toBuy);

// 5. Object
// Array의 문제 : 의미 있는 property 저장할 때 문제가 생긴다.
const player = {
  name: "tino",
  age: 25,
  hobby: "watch movie",
};

console.log(player.age); // console = object
console.log(player);
player.name = "nicolas";
console.log(player);
player.sexy = "soon";
console.log(player);

// 6. function
function plus() {
  console.log(2 + 2);
}

plus(); // 함수를 출력시켜준다.
plus();
plus();
plus();

// 함수 안으로 데이터 보내는 것도 가능하다. 소괄호 안에 데이터를 넣어주면 된다.

function divide(potato, salad) {
  console.log(potato / salad);
}

divide(6, 3); // 인수의 순서가 굉장히 중요하다.
divide(3, 6);

function multiple(potato) {
  // 인수는 블록 내에서만 정의되어 있다.
  console.log(potato - 5); // body
}

multiple(5, 12, 1234, 2335, 77999); // 5 - 5 = 0
// console.log(potato); not defined

const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  multiple: function (a, b) {
    console.log(a * b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  squared: function (a, b) {
    console.log(a ** b);
  },
};

calculator.add(5, 1);
calculator.minus(5, 1);
calculator.multiple(5, 2);
calculator.divide(6, 3);
calculator.squared(5, 2);
