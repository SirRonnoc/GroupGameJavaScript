/**
 * Created by 2019006 on 5/30/2017.
 */

window.onload = function() {
    C1 = document.getElementById("C1");
    context = C1.getContext("2d");
    down=right=left=up=false;
    moveTimer = 0;
    document.addEventListener("keydown",keyPressed);
    document.addEventListener("keyup",keyUp);
    px=py=10;
    pMT = 0;
    tileSize = 32;
    map = generateCave();
    objectify(map);
    setInterval(timerTick,17);

    timerTick();


}
function timerTick() {
    //console.log("hello");
    if (moveTimer > 7) {
        if (left) {
            px -= 1; moveTimer = 0;
        }
        else if (right) {
            px += 1; moveTimer = 0;
        }
        else if (up) {
            py -= 1; moveTimer = 0;
        }
        else if (down) {
            py += 1; moveTimer = 0;
        }
    }
    moveTimer +=1;
    draw();
}
function keyPressed() {
    switch(event.keyCode) {
        case 37: left = true;break;
        case 38: up = true;break;
        case 39: right = true;break;
        case 40: down = true;break;
    }

}
function keyUp() {
    switch(event.keyCode) {
        case 37: left = false; break;
        case 38: up = false; break;
        case 39: right = false; break;
        case 40: down = false; break;
    }
}
function draw() {
    context.fillStyle="black";
    context.fillRect(0,0,C1.width,C1.height);
    context.fillStyle="red";
    context.fillRect(14*tileSize,10*tileSize,tileSize,tileSize);

    yCTR = 0;
    for (var i = py - 10;i < py +11;i++) {
        xCTR = 0;
        for (var g = px -14;g < px +15;g++) {
            if (g >=0 && g < 100 && i >=0 && i < 100) {
                context.fillStyle = map[i][g].COLOR;
                context.fillRect(xCTR*tileSize,yCTR*tileSize, tileSize,tileSize)
            }
            xCTR +=1
        }
        yCTR +=1

    }
}



//window.onload = function(){
//  Game()
//}