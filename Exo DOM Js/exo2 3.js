//Divs à placer horizontalement, ainsi qu'à colorier//

//Exo 2//

var d = document.body;

var un = d.childNodes[1];
var deux = d.childNodes[3];
var trois = d.childNodes [5];
var quatre = d.childNodes [7];

un.style.color = "red";
deux.style.color = "#77ff00";
trois.style.color = '#0000ff';
quatre.style.color = 'violet';

//Exo 3//

document.body.style.display = 'flex';


var maDiv = document.querySelector("div:nth-child(4)");
maDiv.id='un';
console.log(maDiv);
maDiv.classList.add('maClass');
