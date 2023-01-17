let sky = document.querySelector('.sky')
let registan = document.querySelector('.registan')
let text = document.querySelector('.title')
let body = document.querySelector('body')

window.addEventListener("scroll", function () {
  let scrollNumber = window.scrollY / 5
  console.log(scrollNumber);
  if (scrollNumber == 0 && scrollNumber < 20) {
    registan.style = `bottom: -500px;`
    sky.style = `transform: scale(1.5); top: 0px;`
    text.style = `bottom: -20vh;`
  } else if (scrollNumber >= 20 && scrollNumber < 160) {
    registan.style = `bottom: 140px;`
    sky.style = `transform: scale(1.5); top: -200px;`
    text.style = `bottom: 60vh; transform: scale(1);`
  } else if (scrollNumber >= 160 && scrollNumber < 500) {
    registan.style = `transform: scale(1); bottom: 0px;`
    sky.style = `transform: scale(1);`
    body.style = `opacity: 1;`
    text.style = `bottom: 60vh; transform: scale(2);`
  } else if (scrollNumber >= 500) {
    body.style = `opacity: 0;`
  }
})