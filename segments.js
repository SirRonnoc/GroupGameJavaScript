/**
 * Created by 2019006 on 5/30/2017.
 */
segmentList = [];
function generateArea() {
    for (var i = 0;i < 50;i++) {
        segmentList.push([]);
        for (var g = 0; g < 50; g++) {
            segmentList[i].push(Math.floor(Math.random() * 3));
        }
    }

    for (var h =0;h <4;h++) {
        for (var i = 0;i < 50;i++) {
            for (var g = 0;g < 50;g++) {
                stuffList = [];
                for (var f =0;f <3;f++) {
                    stuffList.push([nextTo(1,segmentList,g,i,f,50),f])
                }
                biggest = [0,0];
                for (var n =0;n <stuffList.length;n++) {
                    if (stuffList[n][0] > biggest[0]) {
                        biggest = stuffList[n];
                    }
                }

                if (biggest[0] >4) {
                    segmentList[i][g] = biggest[1];
                }


            }
        }
    }
    for (var i =0;i<50;i++) {
        curstring = "";
        for (var g = 0;g<50;g++) {
            curstring += String(segmentList[i][g]);
        }
        console.log(curstring);
    }

}
generateArea();