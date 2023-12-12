let learner = ["Denis", "Robin", "Tess", "Damien", "Maoro", "Alexis", "Alice", "Aurelien", "Cassidy", "Giuseppe", "Hanen", "Huseyin", "Jeremy", "Joshua", "Julien", "Nicolas", "Marvin", "Noé", "Otman", "Mathias", "Thomas", "Ugur", "Winona"];

function randomSort() {
    learner.sort(() => 0.5 - Math.random());
    // learner.reverse();
};

randomSort()

function learnerDiv() {
    const articleSel = document.querySelector('article');
    let sect = document.createElement("section");
    articleSel.appendChild(sect);

    for(let elem of learner) {
        let uno = Math.floor(Math.random()* 360);
        let due = Math.floor(Math.random()* 100);
        let tre = Math.floor(Math.random()* 100);
        let color = `hsl(${uno}, ${due}%, ${tre}%)`;

        const sectionSel = document.querySelector("section");
        let pCreator = document.createElement("p");
        let nameInj = document.createTextNode(elem);

        sectionSel.appendChild(pCreator);
        pCreator.appendChild(nameInj);
        pCreator.style.backgroundColor = color;


        function backgroundAnalyzer() {
            if(tre < 60) {
                pCreator.style.color = 'white';
            }
        }
        backgroundAnalyzer();
    }
};

learnerDiv();