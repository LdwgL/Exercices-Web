  class MonCanvas {
    constructor(hauteur, longueur) {
        this.longueur = longueur;
        this.hauteur = hauteur;
        this.creerBalise();
    }
    //Créer une balise Canvas

    creerBalise() {
        let can = document.createElement("canvas");
        can.width = this.longueur;
        can.height = this.hauteur;
        this.ctx = can.getContext("2d");
        document.body.appendChild(can);
    }
    bouge(n) {
        console.log(n);
        this.canvas.ctx2D.clearRect(0, 0, this.canvas.l, this.canvas.h);
        this.fruit.x += n;
        this.canvas.ctx2D.drawImage(this.fruit.img, this.fruit.x, this.fruit.y);
    }
}




