import state from '../../state'
import { drawChessman } from '../Chessman/index'

function ai() {
  let { over, gameOver, chessColor, chessPositons, count, wins, myWin, aiWin } = state
  let myScore = [];
  let aiScore = [];
  let max = 0;
  let u = 0;
  let v = 0;
  for (let i = 0; i < 15; i++) {
    myScore[i] = [];
    aiScore[i] = [];
    for (let j = 0; j < 15; j++) {
      myScore[i][j] = 0;
      aiScore[i][j] = 0;
    }
  }
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if (chessPositons[i][j] == 0) {
        for (let k = 0; k < count; k++) {
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
  drawChessman('canvas', { i: u, j: v, color: state.players[1].color });
  chessPositons[u][v] = 2;
  for (let k = 0; k < count; k++) {
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

export { ai }
