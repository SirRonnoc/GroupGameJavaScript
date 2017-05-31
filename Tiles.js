/**
 * Created by 2019006 on 5/30/2017.
 */
var caveWall = {CAN_MOVE:false,CODE:0,COLOR:"black"};
var caveFloor = {CAN_MOVE:true,CODE:1,COLOR:"grey"};
var desert = {CAN_MOVE:true,CODE:3,COLOR:"yellow"};
var forestFloor = {CAN_MOVE:true,CODE:2,COLOR:"green"};
Tiles = [caveWall,caveFloor,desert,forestFloor];

var tree = {CAN_MOVE:false,CODE:1,COLOR:"#682601"};
var cactus = {CAN_MOVE: false, CODE:2, COLOR:"green"};
Scenery = [tree,cactus];