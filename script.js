$.getJSON("labyrinthes.json", function(data) {

    let size = 25;
    let maze1 = data[size]['ex-2'];
    console.log(maze1)
    maze = mazeConstruction(maze1, size);
    DFSite(maze, maze[0],size)
});



     let mazeConstruction = (maze1, size) => {
         let caseNum = 0;



         maze1.forEach(cell => {
             let walls_str = cell.walls.map(x => x ? "1px" : "0px").join(" ");
             let className = ["structure", cell.posX, cell.posY].join("-");
             let div = document.createElement("div");
             $(".labyrinthe").append(`<div class="item ${className}"></div>`);
             // div.setAttribute("id", `case-${caseNum++}`)
             cell.case = caseNum;
             $(`.${className}`).css("border", "solid black");
             $(`.${className}`).css("border-width", walls_str);

             cell.visited = false;


         })
         document.getElementsByClassName("labyrinthe")[0].style.gridTemplateColumns = `repeat(${size}, 50px)`;//Renvoie un objet de type tableau de tous les éléments enfants qui ont tous les noms de classe donnés
         return maze1;

 }
let getNeighborsNotVisited = (currentcase, maze1, size) => {
    let neighborsNotVisited = [];
    let wallFormula = [(currentcase.case - size), (currentcase.case + 1), (currentcase.case + size), (currentcase.case - 1)];
    let i = 0;
    for (const wall of currentcase['walls']) {
        if (!wall) {
            neighborsNotVisited.push(maze1[wallFormula[i]]);
        }
        i++;
    }
    console.log(currentcase);
    return neighborsNotVisited;

}
let DFSite=(maze1,currentcase,size)=> {
    let goal = (size*size)-1;
    let stack = [];
    stack.push(currentcase);

    while (stack.length > 0) {
        currentcase = stack.pop();
        if (currentcase.visited === false) {
            currentcase.visited = true
            if(currentcase.case===goal){

                console.log("vous êtes sortie!")
                document.getElementById(`case-${currentcase.case}`).classList.add("winnercolor");
                return currentcase.case;
            }


            getNeighborsNotVisited(currentcase,maze1,size).forEach(neighbor =>{
                stack.push(neighbor);
            });
            document.getElementById(`case-${currentcase.case}`).classList.add("visitedcolor");

        }

    }
}

