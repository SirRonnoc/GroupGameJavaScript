/**
 * Created by 2019006 on 5/31/2017.
 */
var Enemy = function(x,y) {
  this.x = x;
  this.y = y;
  this.COLOR = "blue";
  this.chase = false;
  this.vector = 0;
  this.vectorTime = 0;
};
function eWander(n) {
    var before = [enemyList[n].x,enemyList[n].y];
    for (var i = 0;i<5;i++) {
        if (enemyList[n].vectorTime <=1) {
            if (pCanMove(enemyList[n].x,enemyList[n].y-1,1) && enemyList[n].vector == 0) {
                enemyList[n].y-=1;
                enemyList[n].vectorTime +=1;

                break;
            }
            else if (pCanMove(enemyList[n].x+1,enemyList[n].y,1) && enemyList[n].vector == 1) {
                enemyList[n].x+=1;
                enemyList[n].vectorTime +=1;

                break;
            }
            else if (pCanMove(enemyList[n].x,enemyList[n].y+1,1) && enemyList[n].vector ==2) {
                enemyList[n].y +=1;
                enemyList[n].vectorTime +=1;

                break;
            }
            else if (pCanMove(enemyList[n].x-1,enemyList[n].y,1) && enemyList[n].vector == 3) {
                enemyList[n].x -=1;
                enemyList[n].vectorTime+=1;

                break;
            }
            else {
                if (enemyList[n].vector <3) {
                    enemyList[n].vector +=1
                }
                else {
                    enemyList[n].vector = 0;
                }

            }
        }
        else {
            enemyList[n].vector = Math.floor(Math.random()*4);
            enemyList[n].vectorTime=0;
        }

    }
    //if (Math.abs(before[0]-enemyList[n].x) >=2 || Math.abs(before[1]-enemyList[n].y) >=2) {
      //  console.log(Math.abs(before[0]-enemyList[n].x) >=2,Math.abs(before[1]-enemyList[n].y) >=2)
    //}

}