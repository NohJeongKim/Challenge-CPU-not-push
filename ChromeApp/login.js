const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector(".btn");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 중요한 코드는 아니지만, 계속 반복되는 문자열 -> 대문자로 써주기.
const USERNAME_KEY = "username";

/*
function onClickLoginbtn(event) {
  // 버튼 클릭하면 클릭이라고 출력하기.
  // 글자가 15 이상인 경우에는 알림창 띄우기.
  // 공백인 경우에는 알림창 띄우기.
  // 이름인 경우에는 인사하기.
  event.preventDefault(); // 새로 고침되는 것을 막아 준다.
  console.log("click!!!!");
  const username = loginInput.value;
  if (username === "") {
    alert("Write your name.");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  } else {
    console.log(`Hello, ${username}! Nice to meet you!`);
  }
}

loginButton.addEventListener("click", onClickLoginbtn);
*/

// 클릭보다는 제출에 초점을 맞춰야한다. (클릭 <<< 제출)
// 클릭했을 때 고려해야되는 조건은 html에서 모두 고려하였기 때문이다.
// 글자 수 제한과 공백 제한
// form 자체가 정보를 제출하기 위한 대화형 컨트롤을 포함하는 문서 구획

function onSubmitLogin(event) {
  event.preventDefault();
  // 제출 시에 이름이 들어오면 인사한다.
  // 이름을 기억하기 위해 local storage API를 이용한다.
  localStorage.setItem(USERNAME_KEY, loginInput.value); // local Storage API
  loginForm.classList.add(HIDDEN_CLASSNAME);
  /*
  greeting.innerText = `Hello, ${username}! Nice to meet you!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  */
  paintGreetings();
  /*
  greeting.innerText = `Hello, ${username}! Nice to meet you!`;
  greeting.classList.toggle(HIDDEN_CLASSNAME);
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  굳이 toggle을 써줄 이유는 없다.
  */
}

function paintGreetings() {
  const username = localStorage.getItem(HIDDEN_CLASSNAME);
  // 함수 이용해주는 경우에도 변수를 또 찾고 있기 때문이다.
  // 함수를 호출하자마자 변수를 찾아준다.
  // 이것은 어느 방법이든지 좋으니 선택하면 된다!
  greeting.innerText = `Hello, ${username}! Nice to meet you!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onSubmitLogin);
// loginForm 임을 잘 기억하기~!

// 근데 문제는 새로고침을 하면 이름은 저장되어 있지만, 다시 form이 등장한다.

const savedUsername = localStorage.getItem(USERNAME_KEY); // username에 대한 변수가 있다.
// 없는 경우에는 null이 나온다.
// null인 경우에는 show the form.
// null이 아닌 경우에는 show the greeting.

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmitLogin);
} else {
  /*
  greeting.innerText = `Hello, ${savedUsername}! Nice to meet you!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  */
  paintGreetings();
  // 반복되는 부분은 함수로 만들어주기.
}
