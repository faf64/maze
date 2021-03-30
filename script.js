// $( document ).ready(function() {

    $.getJSON("labyrinthes.json", function(data) {

        let size=15;
        let maze1 = data[size]['ex-1'];

        maze1.forEach(element => {
            let div = document.createElement("div");

            div.classList.add("square");
            if (element['walls'][0]) { //haut
                div.classList.add("wall-top");
            }
            if (element['walls'][1]) { //droite
                div.classList.add("wall-right");
            }
            if (element['walls'][2]) { //bas
                div.classList.add("wall-bottom");
            }
            if (element['walls'][3]) { //gauche
                div.classList.add("wall-left");
            }

            $(".labyrinthe").append(div);

        })
        document.getElementsByClassName("labyrinthe")[0].style.gridTemplateColumns= `repeat(${size}, 50px)`;
    });
// });