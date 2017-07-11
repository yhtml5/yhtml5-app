import { yhtml5 } from '../build/template/author'
import { createChessboard, drawChessBoard } from './Components/Chessboard/index'
import { drawChessman } from './Components/Chessman/index'
import state from './state';
import './Components/index.css'

// yhtml5()

createChessboard('canvas')
state.chessboard = document.getElementById('chessboard')
drawChessBoard('canvas')

// el.addEventListener("click", modifyText)

state.chessboard.onclick = function (e) {
  if (state.over) {
    return
  }
  if (!state.chessColor) {
    return
  }
  var x = e.offsetX
  var y = e.offsetY
  var i = Math.floor(x / 30)
  var j = Math.floor(y / 30)
  process.env.NODE_ENV === 'production' || console.log([i, j])
  if (state.chessPositons[i][j] == 0) {
    drawChessman('canvas', { i, j, ...state.chessColor })
    state.chessPositons[i][j] = 1
    // for (var k = 0; k < count; k++) {
    //   if (wins[i][j][k]) {
    //     myWin[k]++;
    //     aiWin[k] = 6;
    //   }
    //   if (myWin[k] == 5) {
    //     alert('你赢了.');
    //     over = true;
    //   }
    // }
    // if (!over) {
    //   chessColor = !chessColor;
    //   AI();
    // }
  }
}
process.env.NODE_ENV === 'production' || console.log(state, state.chessboard)
