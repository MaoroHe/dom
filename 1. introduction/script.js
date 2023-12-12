let uno;
let dos;
let tres;

document.title = "Modifying the DOM"; 

function color() {
    uno = Math.floor(Math.random() * 255);
    dos = Math.floor(Math.random() * 255);
    tres = Math.floor(Math.random() * 255);

    return uno, dos, tres;
}

color(uno, dos, tres);

document.body.style.backgroundColor = `rgb(${uno}, ${dos}, ${tres})`;

// .4

let theChild = document.body.children[1];

for(let child of theChild.children) {
    console.log(child)
}