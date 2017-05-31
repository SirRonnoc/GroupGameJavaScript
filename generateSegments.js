/**
 * Created by 2019006 on 5/30/2017.
 */
mapSize = 100;
function nextTo(scale,list,x,y,n,size) {
    ans = 0;
    for (var i = -scale;i <=scale;i++) {
        for (var g = -scale;g <=scale;g++) {
            if (x + g >= 0 && x + g <= size - 1 && y + i >= 0 && y + i <= size - 1 && list[y + i][x + g] ==n) {
                ans +=1;
            }

        }
    }
    return ans;
}
function generateCave() {
    map = [];
    for (var i = 0;i < mapSize;i++) {
        map.push([]);
        for (var g = 0;g < mapSize;g++) {
            map[i].push(Math.floor(Math.random()/0.6))
        }
    }
    //console.log(nextTo(1,map,10,10,0));

    for (var h =0;h <4;h++) {
        for (var i = 0;i <100;i++) {
            for (var g = 0; g < 100;g++) {
                //console.log(nextTo(1,map,g,i,0));
                if (nextTo(1,map,g,i,1,100) >=5 || nextTo(2,map,g,i,1,100) <=2) {
                    map[i][g] = 1;
                }
                else if (nextTo(1,map,g,i,1,100) <=2) {
                    map[i][g] = 0;
                }

            }
        }
    }
    for (var h = 0;h < 3;h++) {
        for (var i = 0; i <100;i++) {
            for (var g = 0; g < 100;g++) {
                if (nextTo(1, map, g, i, 1,100) >= 5) {
                    map[i][g] = 1;
                }
                else {
                    map[i][g] = 0;
                }
            }
        }
    }

    for (var i =0;i<mapSize;i++) {
        curstring = "";
        for (var g = 0;g<mapSize;g++) {
            curstring += String(map[i][g])
        }
        console.log(curstring)
    }

    return map;

}
function objectify(map) {
    for (var i = 0;i <mapSize;i++) {
        for (var g = 0;g<mapSize;g++) {
            for (var h = 0; h <Tiles.length;h++) {

                if (Tiles[h].CODE == map[i][g]) {
                    map[i][g] = Tiles[h];
                }
            }
        }
    }
}