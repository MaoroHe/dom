// .1

let aImportant = document.querySelectorAll('.important');

aImportant.title = "This is an important item";

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