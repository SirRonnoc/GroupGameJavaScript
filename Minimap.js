/**
 * Created by 2019006 on 6/1/2017.
 */
function minimapInit(){
    mCan = document.getElementById("minimap");
    mCont = mCan.getContext("2d");
    drawMinimap();
}
function drawMinimap() {
    console.log("hi");
    mCont.fillStyle="black";
    mCont.fillRect(0,0,mCan.width,mCan.height);
}