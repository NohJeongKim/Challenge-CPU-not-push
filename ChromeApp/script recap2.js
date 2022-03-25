// return
// console.log 화면에 결과를 보여주기 위함이다.

const calculator = {
  plus: function (a, b) {
    console.log("Hello"); // return 앞에는 코드가 돌아간다.
    return a + b;
    console.log("ByeBye"); // return 뒤에는 코드가 돌아가지 않는다.
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

// 예 : 날씨 정보를 받아와서, return을 이용해서 화면에 출력하고 싶다.
const calculatePlus = calculator.plus(2, 4);
console.log(calculatePlus);

// conditional
const calculateUserAge = {
  // =, 값을 할당하는 것이다.
  calculate: function (userAge) {
    if (isNaN(userAge) || userAge < 0) {
      // boolean을 출력한다. (true/ false)
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
    } else if (userAge === 100) {
      // 반대 의미 : !==
      // ===, 좌우가 같다는 의미이다.
      // 실행될 이유가 없다. 이미 위에서 실행되었기 때문이다. 그래서 순서를 이런 식으로 해야 된다.
      // else if는 "양자택일"이다.
      return "당신은 현명하시네요!";
    } else if (userAge > 80) {
      return "이 분께서는 원하시는 대로 하시면 됩니다.";
    }
  },
};

/*
if ((a && b) || (c && d) || (x || w)) {
  // 괄호 먼저 실행 된다...
  // &&, 둘다 true인 경우만 true이다.
  // ||, 하나만 true인 경우만 true이다.
}
*/
