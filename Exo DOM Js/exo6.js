var newPara = document.createElement('p');
newPara.id = 'para1';
var texte1 = document.createTextNode('Lorem ipsum dola si amet');
newPara.appendChild(texte1);
document.body.appendChild(newPara);

var newParag = document.createElement('p')
newParag.id = 'para2';
var texte2 = document.createTextNode('deuxième texte ');
newParag.appendChild(texte2);
document.body.appendChild(newParag);

document.getElementById('para1').style.color = "red";
document.getElementById('para2').style.color = "blue";
document.getElementById('para1').style.fontSize = "3em"
document.getElementById('para2').style.fontSize = "3em";
document.body.style.margin = "50px";
document.getElementById('para1').style.marginTop = "50px";
document.getElementById('para1').style.margin = "0px";
document.getElementById('para1').style.border = "4px solid blue";
document.getElementById('para2').style.border = "4px solid red";






