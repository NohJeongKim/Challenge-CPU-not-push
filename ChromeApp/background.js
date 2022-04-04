// images와 고른 image를 만든다. (image -> chosenImage -> bgImage)
// 배경 image를 html img 태그로 만든다.
// 그 배경 image 태그에 주소를 넣어준다.
// 그 배경 image 태그를 html body 끝에 붙여준다.

const images = ["beach.jpg", "building.jpg", "night.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
// console.log(bgImage); <img> 태그 잘 들어와 있다.
bgImage.src = `../img/${chosenImage}`;
// console.log(bgImage.src); 주소가 잘 들어와 있다.
document.body.appendChild(bgImage);
