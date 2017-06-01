/**
 * Created by 2019006 on 5/30/2017.
 */
var caveWall = {CAN_MOVE:false,CODE:0,COLOR:"black"};
var caveFloor = {CAN_MOVE:true,CODE:1,COLOR:"grey"};
var desert = {CAN_MOVE:true,CODE:3,COLOR:"yellow"};
var forestFloor = {CAN_MOVE:true,CODE:2,COLOR:"green"};
var swampWater = {CAN_MOVE:false,CODE:4,COLOR:"#876946"};
var swampTile = {CAN_MOVE:true,CODE:5,COLOR:"#757531"};
Tiles = [caveWall,caveFloor,desert,forestFloor,swampWater,swampTile];

var tree = {CAN_MOVE:false,CODE:1,COLOR:"#682601"};
var cactus = {CAN_MOVE: false, CODE:2, COLOR:"green"};
Scenery = [tree,cactus];