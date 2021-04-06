$.getJSON("labyrinthes.json", display)
let maze1;
let ch = []
// const tab2D = [];
function display(data) {
    let size = 4;
    maze1 = data[size]['ex-2'];
    // console.log(maze1)
    maze = mazeConstruction(maze1, size);
    // for(let elem of maze1){
    //     if(tab2D[elem.posX]  === undefined){
    //         tab2D.push([])
    //     }
    //     tab2D[elem.posX].push(elem)
    // }
    // console.log(tab2D[10][5]);
    DFSite(maze, maze[0], size)
    console.log("Solution:")
    console.log(ch)
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
        $(`.${className}`).attr("id", `case-${caseNum++}`)
        cell.visited = false;



    })
    document.getElementsByClassName("labyrinthe")[0].style.gridTemplateColumns = `repeat(${size}, 50px)`;//Renvoie un objet de type tableau de tous les éléments enfants qui ont tous les noms de classe donnés
    return maze1;

}
let getNextNotVisited = (currentcase, maze1, size) => {
    let nextNotVisited = [];
    let wallForm = [(currentcase.case - size), (currentcase.case + 1), (currentcase.case + size), (currentcase.case - 1)];
    let i = 0;
    for (const wall of currentcase['walls']) {
        if (!wall) {
            nextNotVisited.push(maze1[wallForm[i]]);
        }
        i++;
    }
    // console.log(currentcase);
    return nextNotVisited;

}
let DFSite = (maze1, currentcase, size) => {
    let end = (size * size) - 1;
    let stack = [];
    stack.push(currentcase);



    while (stack.length > 0) {
        currentcase = stack.pop();
        if (currentcase.visited === false) {
            currentcase.visited = true
            if (currentcase.case === end) {

                console.log("end")
                document.getElementById(`case-${currentcase.case}`).classList.add("winner");
                console.log(stack);
                return currentcase.case;
            }


            getNextNotVisited(currentcase, maze1, size).forEach(neighbor => {
                stack.push(neighbor);
            });
            document.getElementById(`case-${currentcase.case}`).classList.add("visited");
            console.log(currentcase)
            ch.push(currentcase)


        }

    }

}