// 1. element 가져오기.
/*
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input"); // document가 아닌 loginform에서 찾을 수 있다.
const loginButton = loginForm.querySelector("button");
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
// 위의 코드와 아래 코드가 동일하다.

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"; // 중요한 코드가 아닌 문자열 -> 대문자로 변수 만들기. 모두 같아야 되는 경우...
const USERNAME_KEY = "username"; // 중요한 코드가 아닌 문자열 -> 대문자로 변수 만들기. 모두 같아야 되는 경우...

// const link = document.querySelector("a");

/*
function onClickLoginBtnClick() {
  // console.log("click!!!!");
  const username = loginInput.value;
  // console.log(`Hello, ${username}! Nice to Meet You!`); LoginInput에 대한 정보들을 볼 수 있다.
  // 하지만, 이름을 입력했을 경우에만 출력하고 싶다.
  /*
  if (username === "") {
    alert("Please write your name.");
  } else if (username.length > 15) {
    // 길이가 15보다 긴 경우
    alert("Your name is too long.");
  } else {
    console.log(`Hello, ${username}! Nice to Meet You!`);
  }
  굳이 이런 식으로 js 코드를 작성하지 않아도, html의 태그의 도움을 받아서 js 코드의 작성을 도울 수 있다.
  */
/* console.log(username);
}
*/

// loginButton.addEventListener("click", onClickLoginBtnClick); 더 이상 이 코드에 신경쓸 필요가 없다. form이 알아서 submit해주고 있기 때문이다.
// 하지만 우리는 form이 submit되는 것을 막아주고 싶다. 클릭 여부 <<< form submit에 관심이 훨씬 많다.

function onLoginSubmit(event) {
  // (information)
  // 필요로 할 만한 정보를 주는 것이다. 첫번째 인수는 지금 막 벌어진 일들에 대한 정보를 제공한다.
  // 방금 실행된 event에 대한 여러 정보이다.
  event.preventDefault(); // form을 submit하면 새로고침을 하는데, 이 함수를 추가해서 그 일을 막아주고 있다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // console.log(username); // submit 자체는 인지하고 새로고침도 막아준다.
  // console.log(username);
  paingGreetings(username); // 반복되는 행위는 함수로 만들어서 지정하기.
  /*
  const username = loginInput.value;
  console.log(username); // submit 자체는 인지하지만, 새로고침은 못 막고 있다.
  */
}

function paingGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

/*
function handleClickLink(event) {
  // Information about the event that just happened
  event.preventDefault(); // 기본 동작을 막아주고 있다.
  console.dir(event);
  // alert("click!!!"); // alert가 기본 동작을 막아주고 있다.
}
*/

loginForm.addEventListener("submit", onLoginSubmit); // onLoginSubmit()는 바로 실행시켜준다. 하지만, addEventListener는 바로 실행시켜주는 것이 아니다.
// link.addEventListener("click", handleClickLink);

// submit event는 onLoginSubmit 함수를 호출하고, event argument를 가져오고 기본 동작이 실행되는 것을 막아준다.
// click은 html에서 다 고쳐줬기 때문에 필요가 없고 (html로 고칠 수 있는 부분은 html을 이용하기), submit을 이용해서 event를 가져오자.
// 1. 기본 동작 실행을 막아준다.
// 2. username에 이름을 저장하고, hello username 넣어줘서 user에게 인사해주기.

// 브라우저에 공짜로 기억하게 해주는 API가 존재한다. (local storage) -> 내가 원하는 값은 브라우저에 저장할 수 있다!
// 그런데 새로고침을 하면 form이 다시 생겨남... 그것은 조건문을 이용해서 처리해주기.

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername); // null

if (savedUsername === null) {
  // 없는 경우에는 null이 뜨기 때문이다.
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit); // onLoginSubmit()는 바로 실행시켜준다. 하지만, addEventListener는 바로 실행시켜주는 것이 아니다.
} else {
  // show the greeting
  paingGreetings(savedUsername); // 반복되는 행위는 함수로 만들어서 지정하기.
  loginForm.classList.add(HIDDEN_CLASSNAME);
}
