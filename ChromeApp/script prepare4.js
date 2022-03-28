// 꼭 기억해야할 것은 .js가 있기 때문에 javascript를 통해서 html의 내용을 가져올 수 있다.
const h1 = document.querySelector(".hello h1");
// console.log(title);
// console.dir(title); 이 항목들이 전부 javascript object이다.
// javascript object 내부에 있는 property들의 값을 변경할 수 있다.
// element의 style도 javascript형식으로 작성되어있다.

h1.innerText = "Hello";
// h1.style.color = "blue";
// .js에서 스타일 변경도 가능하다.
// 모든 이벤트는 자바스크립트가 읽을 수 있다.

/*
function handleTitleClick() {
  /*
  console.log(h1.style.color);
  h1.style.color = "green";
  console.log(h1.style.color);
  */
/*
  const currentColor = h1.style.color;
  let newColor; // 변경 가능하다.
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor; 
  // color를 변경해봤자 h1에 영향을 끼치지 않기 때문에 이 코드를 넣어줘야 한다.
  // newColor를 이용해서 h1의 색깔을 변경해준다.
  // 더 보기 좋다.
}
*/

function handleTitleClick() {
  // 1. className을 변경해서 코드 작성하는 방법 (모든 것을 교체해버린다.)
  // h1.className = "active";
  // console.log(h1.className);
  /*
  const activeClass = "active";
  if (h1.className === activeClass) {
    h1.className = "";
  } else {
    h1.className = activeClass; // active를 2번 사용하기 때문에 Error의 위험성이 존재한다. 그래도 변수를 이용하면 Error 위험성이 줄어든다.
    // 만약에 여기서 클래스가 있으면, 클래스 이름을 바꾸는 문제가 발생해버린다.
  }
  */

  // 2. classList를 변경해서 코드 작성하는 방법
  const activeClass = "active";
  /*
  if (h1.classList.contains(activeClass)) {
    h1.classList.remove(activeClass);
  } else {
    h1.classList.add(activeClass);
    // className을 변경하지 않는다. 그리고 이 코드는 toggle과 같은 기능을 수행할 수 있다.
  }
  */
  h1.classList.toggle(activeClass); // toggle = add + remove
}

/*
function handleMouseEnter() {
  h1.innerText = "Mouse is Here";
  h1.style.color = "green";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is Gone";
  h1.style.color = "black";
}
*/

// 함수에 괄호를 넣지 않는다는 것을 기억하자.

// 1. title object에서 많은 정보 가져올 수 있고, 변경할 수 있다.
// 2. event를 listen 하는 방법을 배웠다.
// addEventListener(event, function);
// function에 실행 버튼 생기게 만들지 말고, 가져오기만 하자.

// console.dir(title); + on = event listener

h1.addEventListener("click", handleTitleClick); // click
/*
h1.addEventListener("mouseenter", handleMouseEnter); // mouseenter
h1.addEventListener("mouseleave", handleMouseLeave); // mouseleave

// window

h1.onclick = handleTitleClick; // title = html element
h1.onmouseenter = handleMouseEnter;
h1.onmouseleave = handleMouseLeave;

// 위의 3개의 코드는 addEventListener를 사용한 코드와 동일하다.

// .removeEventListener를 이용해서 제거할 수 있다. 그래서 addEventListener를 더 많이 이용한다.

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("Copier!"); // copy를 해주면 이 알림창이 뜬다.
}

function handleWindowOffline() {
  alert("SOS! No WIFI");
}

function handleWindowOnline() {
  alert("It is Great!");
}

window.addEventListener("resize", handleWindowResize); // resize
window.addEventListener("copy", handleWindowCopy); // copy
window.addEventListener("offline", handleWindowOffline); // offline
window.addEventListener("online", handleWindowOnline); // online

// h1은 resize할 수 없지만, window는 resize가 가능하다.
// document, document body, document title, document head는 f12에서 가져올 수 있다.
// 하지만 div 같은 경우는 querySelector나 getElementById를 통해서 가져와야 한다.
*/
