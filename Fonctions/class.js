class Chapitre {
    constructor(titre, texte) {
        this.titre = titre;
        this.texte = texte;
    }

    afficher() {
        let maDiv = document.createElement("div");
        let monTitre = document.createElement("h1");
        let monParagraphe = document.createElement("p");
        monTitre.innerText = this.titre;
        monParagraphe.innerText = this.texte;
        maDiv.appendChild(monTitre);
        maDiv.appendChild(monParagraphe);
        document.body.appendChild(maDiv);
    }

}

var xhr = new XMLHttpRequest();
xhr.open("GET", "chapitres.php");
xhr.responseType = "json";
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        let reponseJson = this.response;
        // console.log(reponseJson);
        for (let element of reponseJson) {
            console.log(element);
            let chapitre = new Chapitre(element.titre, element.texte);
            chapitre.afficher();
        }
    }

}
xhr.send();
































































































