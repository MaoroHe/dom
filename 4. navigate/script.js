let olSel = document.querySelector('ol');
const lChild = olSel.lastElementChild;

olSel.prepend(lChild);

// 2.

let section = document.querySelector('main');
const a = section.children[1];
const b = section.children[2];
let aH2 = a.firstElementChild;
let bH2 = b.firstElementChild;

section.insertBefore(bH2, a)

// 3.

section.removeChild(a);