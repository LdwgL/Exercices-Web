 class Fruit{
    constructor (ctx, src,x,y,le,he){
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.le = le;
        this.he = he;
        this.imag = new Image();
        this.imag.src = src;
        this.imag.width = this.le;
        this.imag.height = this.he;
        // this.dessin();
    }
    dessin(imag,x,y){
        this.imag.onload = () => {
            console.log("image chargée");
            this.ctx.drawImage(this.imag,this.x,this.y, this.le, this.he);
            console.log(this);
        }
    }
}

