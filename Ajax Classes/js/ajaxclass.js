class Fromages {
    constructor(fromages = []) {
        this.fromages = fromages;
        for (let f of this.fromages) {
            this.creerFromage(f);
        }
    }



    creerFromage(fromage) {
        let from = document.createElement("article");
        //Ecrire un titre
        let titre = document.createElement("H3");
        titre.appendChild(document.createTextNode(fromage.nom));
        from.appendChild(titre);
        //Affichage des etoiles
        for (let i = 0; i < fromage.classement; i++) {
            let etoile = document.createElement("img");
            etoile.src = "images/etoile.png";
            etoile.width = 16;
            etoile.height = 16;
            from.appendChild(etoile);

        }

        //Ecrire le type et le pays 
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(`Type : ${fromage.type} / Pays : ${fromage.pays}`));
        from.appendChild(p);

        //Ecrire l'article entier
        document.querySelector("section").appendChild(from);
    }
}