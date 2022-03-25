// Return
// 우리는 function 밖에서 결과값을 얻기를 바라기 때문이다.
// console.log, alert는 출력은 한다. (happened)
// return은 그 데이터를 받아서 또 다른 것을 할 수 있다.

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiple: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b; // alert : undefined
  },
};
// 이 위에서는 console.log가 없기 때문에, 출력이 되는 것이 없을 것이다.
// 그래서 밑의 코드에서 console.log를 적어줘야한다.

const plusResult = calculator.plus(3, 7); // return의 포인트는 데이터를 가지고 들어가는 것이다. 반환 값을 준다.
// console.log(plusResult);
const minusResult = calculator.minus(plusResult, 3);
// console.log(minusResult);
const multipleResult = calculator.multiple(minusResult, 7);
// console.log(multipleResult);
const divideResult = calculator.divide(multipleResult, 3);
// console.log(divideResult);
const powerResult = calculator.power(divideResult, minusResult);
console.log(powerResult);
// 이런 식으로 계속 값을 가져와서 계산할 수 있다. 굉장히 상호 의존적이다.
// console에서는 값을 가져올 수 없다.

const age = 96;
function calculateKrAge(ageOfForeigner) {
  // 이 인수들은 블록 밖에서는 존재하지 않는다.
  // 그러니 어떠한 인수로 사용해도 상관 없다.
  return ageOfForeigner + 2; // 결과를 준다.
  // return "Hello"; Hello가 출력이 될 것이다.
}

const krAge = calculateKrAge(age); // 변수로 받아주기. 데이터를 가지고 들어온다.
console.log(krAge);

const birth = 1998;
function calculateAge(yearOfBirth) {
  return 2022 - yearOfBirth + 1;
}

myAge = calculateAge(birth); // return으로 받은 값을 가져온다.
// 어떤 작업을 처리하고, 그 결과를 return하기 위해서 함수를 이용한다.
// function이 function 밖과 소통하는 방법이다.
console.log(myAge);

// conditional
// true인지 false인지 알려주기 때문에 중요하다.
// 키워드는 if이다.

// 음주가 가능한지 가능하지 않은지 확인하는 함수를 만들 것이다.
const user = parseInt(prompt("나이가 어떻게 되시나요?")); // 사용자에게 창을 띄울 수 있다. string이라고 인식한다. 자바스크립트 코드를 멈추게 한다. css로 스타일 변경도 못 한다. 오래된 방식이다.
// 요즘에는 자기가 html, css로 만든 창을 사용한다.
// 취소하면, null이 뜬다.
// 근데 string이기 때문에, number로 바꿔줘야한다.
// userNum = parseInt(user); parseInt가 숫자로 변경시켜준다. 굳이 새롭게 변수 만들 이유가 없다.
const calculateUserAge = {
  calculate: function (userAge) {
    /*
    // age가 숫자가 아닌 경우 다시 입력하라고 정보를 전달할 것이다.
    if (isNaN(userAge)) {
      // userAge가 not a number, 즉 숫자가 아니라는 의미이다.
      // isNaN인지 물어보는 것이 좋다.
      return "숫자가 아니니 다시 입력해주세요.";
    } else {
      if (userAge > 19) {
        return "이 분께서는 음주가 가능하십니다.";
      } else {
        return "이 분께서는 음주가 불가능하십니다.";
      }
    }
    */
    if (isNaN(userAge) || userAge < 0) {
      // 음수가 아닌 경우도 포함하기.
      // 위에서부터 아래로 차례로 코드를 실행한다.
      // 여기서는 ||를 사용한다. 1가지 경우만 만족하면 되기 때문이다.
      return "양의 숫자를 다시 입력해주세요.";
    } else if (userAge < 18) {
      return "이 분께서는 음주가 불가능하십니다.";
    } else if (userAge >= 18 && userAge < 50) {
      // && 2개다 만족해야 한다. 2개 모두 true이면  true이다.
      // || 1개만 만족하면 된다. 2개 모두 false이면 false이다.
      return "이 분께서는 음주가 가능하십니다.";
    } else if (userAge > 50 && userAge <= 80) {
      return "이 분께서는 운동을 하셔야 합니다.";
    } else if (userAge > 80) {
      return "이 분께서는 원하시는 대로 하시면 됩니다.";
    }
  },
};
// (주의) userAge === NaN라고 지정하면, false가 되기 때문에 뒤의 else 코드로 들어가게 된다.
/*
if (conditon) {  condition은 반드시 boolean -> true, false 이어야만 한다.
  condition === true;
} else {
  condition === false;
}
*/

const isDrinking = calculateUserAge.calculate(user);
console.log(isDrinking);

/*
console.log(user, parseInt(user)); // string, number
console.log(user);
console.log(parseInt(user)); // 숫자로 바꿀 수 없으면 not a number가 뜬다.
*/

// || 그리고 && (OR 그리고 AND)
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // true
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
