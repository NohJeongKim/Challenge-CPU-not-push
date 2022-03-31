const clock = document.querySelector("#clock");

function sayTime() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${minute}:${second}`;
}

/*
function setLength() {
  // 만약에 길이가 2인 경우에는 그대로 출력하기.
  // 길이가 2보다 작은 경우에는 앞에 0 붙이기.
  const date = new Date();
  const hour = String(date.getHours());
  const minute = String(date.getMinutes());
  const second = String(date.getSeconds());
  const array = [hour, minute, second];

  for (i = 0; i < array.length; i++) {
    if (array[i].length < 2) {
      array[i] = "0".concat(array[i]);
      // console.log(array[i]);
      clock.innerText = `${array[0]}:${array[1]}:${array[2]}`;
    } else {
      array[i];
      // console.log(array[i]);
      clock.innerText = `${array[0]}:${array[1]}:${array[2]}`;
    }
  }
}

setLength();
setInterval(setLength, 1000);
*/

sayTime();
setInterval(sayTime, 1000); // 1s = 1000ms
