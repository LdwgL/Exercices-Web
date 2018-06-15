
// on récupère l'élément

var para = document.querySelector("#coucou");

// on modifie son style

para.style.color = "#B40404";
para.style.fontSize = "2.2em";
para.style.float = "left";

// On modifie le style de du paragraphe Lorem

var element = document.getElementById("lorem");

element.style.fontSize = "2.2em";
element.style.color = "#00BFFF";
element.style.float = "right";

//------------------------------------------- //

//Je récupere le contenu de mes divs que je stocke dans une variable//

var id2 = document.getElementById("lorem").innerHTML;
var id1 = document.getElementById("coucou").innerHTML;

//Fonction du bouton //

var getboutonTxt = document.getElementById('interv');
getboutonTxt.addEventListener('click', intervtTxt);

function intervtTxt() {
    document.getElementById('coucou').innerHTML = id2;
    document.getElementById('lorem').innerHTML = id1;
}

