/**
 * Created by 2019006 on 6/1/2017.
 */
function minimapInit(){
    mCan = document.getElementById("minimap");
    mCont = mCan.getContext("2d");
    drawMinimap();
}
function drawMinimap() {

    colorDict = {
      0: "green",1:"#02703e",2:"yellow"
    };
    //console.log(mCont.fillStyle = colorDict[segmentList[20][21]]);
    mCont.fillStyle="black";
    mCont.fillRect(0,0,mCan.width,mCan.height);
    var yCTR = 0;
    for (var i = mapY-10; i < mapY+10;i++) {
        var xCTR = 0;
        for (var g = mapX-10;g < mapX +10;g++) {
            if (i >= 0 && i < segmentList.length && g >=0 && g < segmentList[mapY].length) {

                if (mCont.fillStyle = colorDict[segmentList[i][g]] != undefined) {mCont.fillStyle = colorDict[segmentList[i][g]];}
                else {mCont.fillStyle = segmentList[i][g].color;}

                mCont.fillRect(xCTR*10,yCTR*10,10,10);
            }
            xCTR +=1;
        }
        yCTR +=1;
    }
    mCont.fillStyle="red";
    mCont.fillRect(102,102,5,5);
}