$.getJSON("labyrinthes.json", display)
 let maze1;
const tab2D = [];

function display (data) {
    let size = 25;
     maze1 = data[size]['ex-2'];
    console.log(maze1)
    maze = mazeConstruction(maze1, size);
    for(let elem of maze1){
        if(tab2D[elem.posX]  === undefined){
            tab2D.push([])
        }
        tab2D[elem.posX].push(elem)
    }
    console.log(tab2D[10][5]);
}



let mazeConstruction = (maze1, size) => {
    let caseNum = 0;

    maze1.forEach(cell => {
        let walls_str = cell.walls.map(x => x ? "1px" : "0px").join(" ");
        let className = ["structure", cell.posX, cell.posY].join("-");
        $(".labyrinthe").append(`<div class="case ${className}"></div>`);
        cell.case = caseNum;
        $(`.${className}`).css("border", "solid black");
        $(`.${className}`).css("border-width", walls_str);



    })
    document.getElementsByClassName("labyrinthe")[0].style.gridTemplateColumns = `repeat(${size}, 50px)`;//Renvoie un objet de type tableau de tous les éléments enfants qui ont tous les noms de classe donnés


}
