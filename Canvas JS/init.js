var can = new MonCanvas(1000, 1000);
var myfruit = new Fruit(can.ctx, "img/fraise.png", 0,0,500,500);
myfruit.dessin();


var init = new Init();

addEventListener("keydown", function(e) {
    console.log(this);
    if (event.defaultPrevented) {
        return; // Should do nothing if the default action has been cancelled
    }
    switch (e.keyCode) {
        case 39:
            init.bouge(10);
            break;
        case 37:
            init.bouge(-10);
            break;
    }
})
