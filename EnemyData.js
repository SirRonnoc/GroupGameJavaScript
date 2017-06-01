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
    enemy = enemyList[n];
    for (var i = 0;i<5;i++) {
        if (enemy.vectorTime <=1) {
            if (pCanMove(enemy.x,enemy.y-1,1) && enemy.vector == 0) {
                enemy.y-=1;
                enemy.vectorTime +=1;
                return;
            }
            else if (pCanMove(enemy.x+1,enemy.y,1) && enemy.vector == 1) {
                enemy.x+=1;
                enemy.vectorTime +=1;
                return;
            }
            else if (pCanMove(enemy.x,enemy.y+=1,1) && enemy.vector ==2) {
            enemy.y +=1;
            enemy.vectorTime +=1;
            return;
            }
            else if (pCanMove(enemy.x-1,enemy.y,1) && enemy.vector == 3) {
                enemy.x -=1;
                enemy.vectorTime+=1;
                return;
            }
            else {
                if (enemy.vector <3) {
                    enemy.vector +=1
                }
                else {
                    enemy.vector = 0;
                }

            }
        }
        else {
            enemy.vector = Math.floor(Math.random()*4);
            enemy.vectorTime=0;
        }

    }
    enemyList[n] = enemy;
}