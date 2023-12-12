// .1

let pimportant = document.querySelector('p.important');
let imgimportant = document.querySelector('img.important');
let spanimportant = document.querySelector('span.important');

pimportant.title = "This is an important item";
imgimportant.title = "This is an important item";
spanimportant.title = "This is an important item";

// .2

let myImg = document.querySelectorAll('img');

for (let elem of myImg) {
    if (elem.classList.contains('important')) {
    } else {
        elem.style.display = 'none';
    }
}

// .3

let bodyP = document.querySelectorAll('p');

for(let elem of bodyP) {
    console.log(elem.innerText)
    if (elem.className != '') {
        console.log(elem.className);
    } else {}
}

// .4
function rdmColor() {
    return Math.floor(Math.random() * 255);
}

for(let elem of bodyP) {
    if(elem.className == '') {
        elem.style.color = `rgb(${rdmColor()}, ${rdmColor()}, ${rdmColor()})`;
    } else {}
}