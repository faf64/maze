$( document ).ready(function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    $.getJSON("labyrinthes.json", function (data) {
        let maze1 = data[25]['ex-0'];
        ctx.strokeStyle = "black";
        ctx.strokeRect(10, 10, 0, 100); //gauche
        ctx.strokeRect(110, 10, 0, 100); //droite
        ctx.strokeRect(10, 10, 100, 0); //haut
        ctx.strokeRect(10, 110, 100, 0); //bas
        maze1.forEach(element => {
            ctx.strokeStyle = "black";
            if(element['walls'][3]){
                ctx.strokeRect(10+(element["posY"]*20, 10+(element)))
            }

            })

        });
        console.log("ready!");
    });
