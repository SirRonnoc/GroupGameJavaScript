/**
 * Created by 2019006 on 5/31/2017.
 */
function writeLevel() {
    segment = segmentList[mapY][mapX];
    saveString = "";
    for (var i = 0;i < segment.map.length;i++) {
        for (var g =0; g < segment.map[i].length;g++) {
            if (g == segment.map[i].length -1) {
                saveString += String(segment.map[i][g].CODE);
            }
            else {
                saveString += String(segment.map[i][g].CODE) + ",";
            }

        }
        if (i != segment.map.length-1) {
            saveString += "/";
        }
    }
    saveString += "-";
    for (var i = 0; i < segment.scenery.length;i++) {
        for (var g = 0; g < segment.scenery[i].length; g ++) {
            if (g == segment.scenery[i].length -1) {
                saveString += String(segment.scenery[i][g]);
                break;
            }


            if (segment.scenery[i][g] === 0) {
                saveString += String(segment.scenery[i][g]) + ",";
            }
            else {
                saveString += String(segment.scenery[i][g].CODE) + ",";
            }
        }
        if (i != segment.scenery.length-1) {
            saveString += "/";
        }
    }

    localStorage.setItem(String(mapX) + String(mapY),saveString);
}
function readLevel() {
    var map = []
    var scenery = []

    var data = localStorage.getItem(String(mapX) + String(mapY));
    if ( data === null) {
        return 0;
    }
    data = data.split("-");

    map = data[0].split("/");
    scenery = data[1].split("/");
    for (var i = 0; i < map.length;i++) {
        map[i] = map[i].split(",");
        scenery[i] = scenery[i].split(",");
    }
    for (var i = 0; i < map.length;i++) {
        for (var g = 0; g < map[i].length;g++) {
            map[i][g] = parseInt(map[i][g]);
            scenery[i][g] = parseInt(scenery[i][g]);
        }
    }
    return [map,scenery];

}

stuff = localStorage.getItem("DataTest");
