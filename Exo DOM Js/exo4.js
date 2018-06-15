//Je génère une nouvelle image en lui affectant une variable//

myImg = new Image()
myImg.src = "nuit.jpg";
console.log(myImg);
document.body.appendChild(myImg);

//Je donne une fonction onclick, pour que lorsqu'on clique sur l'image, une nouvelle s'affiche//

myImg.onclick = function myfonct() {

    //Je crée la balise style dans mon head, et y insère les keyframes requis pour mon animation(anim)//

var att = document.querySelector('img').getAttribute('src');
var stylCreat = document.createElement('STYLE');
var KeyInsert = "@keyframes anim {0%{transform:scale(0, 0);}100%{transform:scale(1, 1)};}";
var textCreat = document.createTextNode(KeyInsert);
stylCreat.appendChild(textCreat);
document.head.appendChild(stylCreat);

//Je crée une itération qui répète mon animation//

if (att == "nuit.jpg") {
    document.querySelector('img').setAttribute('src', 'aurore.jpg');
    document.querySelector('img').style.animation = "anim 1000ms";
     
}
  else {  
      document.querySelector('img').setAttribute('src', 'nuit.jpg');   
  }
}
