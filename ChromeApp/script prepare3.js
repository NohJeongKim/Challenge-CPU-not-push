// javascript가 html에 "어떻게" 상호 작용하는지 배울 것이다.
// html : 접착제 (css, js 가져오는 역할 수행)
// html의 element들을 js통해 변경할 수 있고, 읽을 수 있다.
// console.dir(document) 인터렉티브한 property를 모두 보여준다. 엄청 중요하다.
// document.title 제목을 가져올 수 있다. js는 html을 읽어올 수 있다. html코드를 js관점으로 바라보고 있다. <object.property>
// document.title = "Hello" html을 읽을 뿐만 아니라, html 변경도 가능하다.

// (정리) html과 js는 연결되어 있다. 그리고 html 요소를 js로 가져올 수도 있고 변경도 가능하다...!
// document === website
// document.body
// 지금까지 document.title, document.body를 호출하는 방법 배웠다.

// 어떻게 js에서 html 항목을 가져오고 사용할 수 있는지 배울 것이다. (특정한 무언가를 가져오기.)
const titleId = document.getElementById("title");
// html에서 id를 통해서 찾아준다.
// console.dir(titleId) 태그 1개에서 가져올 수 있는 것들을 보여준다.
// html에서 가져오지만, 그것을 js에서 html을 표현하는 object로 보여준다.
// titleId.innertext = "Got you!";

/*
console.log(titleId.title);
console.log(titleId.id);
console.log(titleId.className);
console.log(titleId.innertext);
*/

// js에 html 불러오기 위해서는 id 같아야 된다.
const titleClass = document.getElementsByClassName("hello");
// console.log(titleClass);
const title = document.getElementsByTagName("h2");
// tagname 가져오는 방법이다.
// console.log(title);

// querySelector 이용하는 것이 아주아주아주~ 좋다. (99.98% 이용)
const titleSel = document.querySelector(".hellos h2");
// 여러 개가 있으면, 첫번째 요소만 가지고 온다.
// css selector를 이용해서 가져오는 방법이다.
// css처럼 사용 가능하다.
// class = "hellos"에서 h2를 가져온다는 뜻이다.
// console.log(titleSel);
const titleSelAll = document.querySelectorAll(".hello");
// console.log(titleSelAll);
const titleFirst = document.querySelector(".bye h1:first-child");
// 첫번째 요소를 반환시켜준다.
// console.log(titleFirst);
const titleQueryId = document.querySelector("#title");
//console.log(titleQueryId);
// titleFirst = titleQueryId는 같은 결과를 가져온다.
// titleFirst.innerText : querySelector인 경우에만 변경된다.
