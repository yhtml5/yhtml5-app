var chessboard = document.getElementById('chessboard');
var context = chessboard.getContext('2d');
var chessPos = [];
for (var i = 0; i < 15; i++) {
  chessPos[i] = [];
  for (var j = 0; j < 15; j++) {
    chessPos[i][j] = 0;
  }
}
var lineColor = '#afafaf';
var lineNum = 15;
var chessColor = true;
var over = false;
//赢发数组
var wins = [];
//赢法统数组
var myWin = [];
var aiWin = [];
for (var i = 0; i < 15; i++) {
  wins[i] = [];
  for (var j = 0; j < 15; j++) {
    wins[i][j] = [];
  }
}
var count = 0;
//行上所有的赢法
for (var i = 0; i < 15; i++) {
  for (var j = 0; j < 11; j++) {
    for (var k = 0; k < 5; k++) {
      wins[i][j + k][count] = true;
    }
    count++;
  }
}
//列上所有的赢法
for (var i = 0; i < 15; i++) {
  for (var j = 0; j < 11; j++) {
    for (var k = 0; k < 5; k++) {
      wins[j + k][i][count] = true;
    }
    count++;
  }
}
//正对角线上所有的赢法
for (var i = 0; i < 11; i++) {
  for (var j = 0; j < 11; j++) {
    for (var k = 0; k < 5; k++) {
      wins[i + k][j + k][count] = true;
    }
    count++;
  }
}
//反对角线上所有的赢发
for (var i = 0; i < 11; i++) {
  for (var j = 14; j > 3; j--) {
    for (var k = 0; k < 5; k++) {
      wins[i + k][j - k][count] = true;
    }
    count++;
  }
}

for (var i = 0; i < count; i++) {
  myWin[i] = 0;
  aiWin[i] = 0;
}

/*var logo = new Image();
logo.src='http://cdn.duitang.com/uploads/item/201508/14/20150814173104_Mc8Ah.thumb.700_0.png';
logo.onload=function(){
	context.drawImage(logo,15,15,435,435);
	drawChessBoard();	
	
}*/
drawChessBoard();
function drawChessBoard() {
  context.strokeStyle = lineColor;
  for (var i = 0; i < lineNum; i++) {
    context.moveTo(15 + i * 30, 15);
    context.lineTo(15 + i * 30, 435);
    context.stroke();
    context.moveTo(15, 15 + i * 30);
    context.lineTo(435, 15 + i * 30);
    context.stroke();
  }
}

function drawCircle(i, j, color) {
  context.beginPath();
  context.arc(15 + i * 30, 15 + j * 30, 13, 0, 2 * Math.PI);
  context.closePath();
  var gradient = context.createRadialGradient(15 + i * 30 + 2, 15 + j * 30 - 2, 13, 15 + i * 30, 15 + j * 30, 0);
  if (color) {
    gradient.addColorStop(0, '#0a0a0a');
    gradient.addColorStop(1, '#636363');
  } else {
    gradient.addColorStop(0, '#d1d1d1');
    gradient.addColorStop(1, '#f9f9f9');
  }
  context.fillStyle = gradient;
  context.fill();
}

function AI() {
  var myScore = [];
  var aiScore = [];
  var max = 0;
  var u = 0;
  var v = 0;
  for (var i = 0; i < 15; i++) {
    myScore[i] = [];
    aiScore[i] = [];
    for (var j = 0; j < 15; j++) {
      myScore[i][j] = 0;
      aiScore[i][j] = 0;
    }
  }
  for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 15; j++) {
      if (chessPos[i][j] == 0) {
        for (var k = 0; k < count; k++) {
          if (wins[i][j][k]) {
            //电脑拦截
            if (myWin[k] == 1) {
              myScore[i][j] += 200;
            }
            else if (myWin[k] == 2) {
              myScore[i][j] += 400;
            }
            else if (myWin[k] == 3) {
              myScore[i][j] += 2000;
            }
            else if (myWin[k] == 4) {
              myScore[i][j] += 10000;
            }

            //电脑攻击
            if (aiWin[k] == 1) {
              aiScore[i][j] += 220;
            }
            else if (aiWin[k] == 2) {
              aiScore[i][j] += 420;
            }
            else if (aiWin[k] == 3) {
              aiScore[i][j] += 2100;
            }
            else if (aiWin[k] == 4) {
              aiScore[i][j] += 20000;
            }
          }
        }
        if (myScore[i][j] > max) {
          max = myScore[i][j];
          u = i;
          v = j;
        } else if (myScore[i][j] == max) {
          if (aiScore[i][j] > aiScore[u][v]) {
            u = i;
            v = j;
          }
        }

        if (aiScore[i][j] > max) {
          max = aiScore[i][j];
          u = i;
          v = j;
        } else if (aiScore[i][j] == max) {
          if (myScore[i][j] > myScore[u][v]) {
            u = i;
            v = j;
          }
        }


      }
    }
  }
  drawCircle(u, v, false);
  chessPos[u][v] = 2;
  for (var k = 0; k < count; k++) {
    if (wins[u][v][k]) {
      aiWin[k]++;
      myWin[k] = 6;
    }
    if (aiWin[k] == 5) {
      alert('电脑赢了.');
      over = true;
    }
  }
  if (!over) {
    chessColor = !chessColor;
  }

}
chessboard.onclick = function (e) {
  if (over) {
    return;
  }
  if (!chessColor) {
    return;
  }
  var x = e.offsetX;
  var y = e.offsetY;
  var i = Math.floor(x / 30);
  var j = Math.floor(y / 30);
  if (chessPos[i][j] == 0) {
    drawCircle(i, j, chessColor);
    chessPos[i][j] = 1;
    for (var k = 0; k < count; k++) {
      if (wins[i][j][k]) {
        myWin[k]++;
        aiWin[k] = 6;
      }
      if (myWin[k] == 5) {
        alert('你赢了.');
        over = true;
      }
    }
    if (!over) {
      chessColor = !chessColor;
      AI();
    }
  }
}