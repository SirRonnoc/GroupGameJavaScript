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
    createBiome();
    map = segmentList[mapY][mapX].map;
    scenery = segmentList[mapY][mapX].scenery;
    objectify(map,scenery);
    console.log(pCanMove(11,10));

    setInterval(timerTick,17);

    timerTick();


};
function timerTick() {
    //console.log("hello");
    if (moveTimer > 7) {
        if (left && pCanMove(px-1,py)) {
            px -= 1; moveTimer = 0;
        }
        else if (right && pCanMove(px+1,py)) {
            px += 1; moveTimer = 0;
        }
        else if (up && pCanMove(px,py-1)) {
            py -= 1; moveTimer = 0;
        }
        else if (down && pCanMove(px,py+1)) {
            py += 1; moveTimer = 0;
        }
    }
    moveTimer +=1;
    moveSegment();
    draw();

}
function moveSegment() {
    if (px < 0 || py < 0 || px >= mapSize || py >= mapSize) {
        //console.log("Type Is: ", segmentList[mapY][mapX].type);
        segmentList[mapY][mapX] = segmentList[mapY][mapX].type;
        if (px < 0) {

            mapX -=1;
            px = mapSize-1;
        }
        else if (px >=mapSize) {
            mapX +=1;
            px = 0;
        }
        else if (py < 0 ) {
            mapY -=1;
            py = mapSize-1;
        }
        else {
            mapY +=1;
            py = 0;
        }
        createBiome();

        map = segmentList[mapY][mapX].map;
        scenery = segmentList[mapY][mapX].scenery;
        objectify(map,scenery);
        console.log(map,scenery);

        //objectify(map)
    }
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
function pCanMove(x,y) {
    if (x < 0 || x >= mapSize || y < 0 || y >= mapSize) {
        return true;
    }
    return (map[y][x].CAN_MOVE && (scenery[y][x]==0 || scenery[y][x].CAN_MOVE));
}
function draw() {
    context.fillStyle = "black";
    context.fillRect(0, 0, C1.width, C1.height);
    context.fillStyle = "red";
    context.fillRect(14 * tileSize, 10 * tileSize, tileSize, tileSize);

    yCTR = 0;
    for (var i = py - 10; i < py + 11; i++) {
        xCTR = 0;
        for (var g = px - 14; g < px + 15; g++) {
            if (g >= 0 && g < 100 && i >= 0 && i < 100) {
                context.fillStyle = map[i][g].COLOR;
                context.fillRect(xCTR * tileSize, yCTR * tileSize, tileSize, tileSize);

            }
            xCTR += 1
        }
        yCTR += 1

    }
    context.fillStyle = "red";
    context.fillRect(14*tileSize,10*tileSize,20,20);
    yCTR = 0;
    for (var i = py - 10; i < py + 11; i++) {
        xCTR = 0;
        for (var g = px - 14; g < px + 15; g++) {
            if (g >= 0 && g < 100 && i >= 0 && i < 100) {
                if (scenery[i][g] != 0) {
                    context.fillStyle = scenery[i][g].COLOR;
                    context.fillRect(xCTR * tileSize, yCTR * tileSize, 20, 20);
                }
            }
            xCTR +=1;
        }
        yCTR +=1;
    }
}



//window.onload = function(){
//  Game()
//}