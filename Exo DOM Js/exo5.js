
//Quand mon curseur pointe h1, celui-ci se met en bleu//

document.querySelector("h1").onmouseenter =
    function () {
        this.style.color = "blue";
    }
//Quand mon curseur s'éloigne d'h1, il reprend sa couleur initiale(noir)//

document.querySelector("h1").onmouseleave =
    function () {
        this.style.color = "black";
    };

var test = "1";
function anim() {
    if (test == '1') {
        document.getElementById('animation').className = "defil"
        test = "0";
    } else document.getElementById('defil').className = "animation";
    test = "1";
{

    }
}
var element = document.getElementById('animation');
function ani() {
    element.classList.toggle("defil");
}