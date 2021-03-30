$.getJSON("labyrinthes.json", function(data) {
        let size=20;
        let maze1 = data[size]['ex-0'];
        maze = buildmaze(maze1,size);
        DFSsol(maze, maze[0],size);
    });

    let buildmaze = (maze1,size)=>{

        let caseNumber = 0;
        maze1.forEach(element => {
            let div = document.createElement("div");
            element.case=caseNumber;
            div.setAttribute("id", `case-${caseNumber++}`)
            element.visited=false;

            div.classList.add("path");
            if (element['walls'][0]) {
                div.classList.add("wall-top");
            }
            if (element['walls'][3]) {
                div.classList.add("wall-left");
            }
            if (element['walls'][1]) {
                div.classList.add("wall-right");
            }
            if (element['walls'][2]) {
                div.classList.add("wall-bottom");
            }

            $(".labyrinthe").append(div);
        })
        document.getElementsByClassName("labyrinthe")[0].style.gridTemplateColumns= `repeat(${size}, 50px)`;
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
    let DFSsol=(lab1,currentcase,size)=> {
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


                getNeighborsNotVisited(currentcase,lab1,size).forEach(neighbor =>{
                    stack.push(neighbor);
                });
                document.getElementById(`case-${currentcase.case}`).classList.add("visitedcolor");

            }

        }
    }


