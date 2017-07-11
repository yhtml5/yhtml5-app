import state from '../../state'
import { drawChessman } from '../Chessman/index'

function playChess(e, callback) {
  if (state.gameOver) {
    return
  }
  var x = e.offsetX
  var y = e.offsetY
  var i = Math.floor(x / 30)
  var j = Math.floor(y / 30)
  if (state.chessPositons[i][j] == 0) {
    drawChessman('canvas', { i, j, color: state.players[0].color })
    state.chessPositons[i][j] = 1
    for (var k = 0; k < state.count; k++) {
      if (state.wins[i][j][k]) {
        state.myWin[k]++;
        state.aiWin[k] = 6;
      }
      if (state.myWin[k] == 5) {
        state.gameOver = true
        console.log('你赢了.')
      }
    }
    if (!state.gameOver) {
      state.chessColor = !state.chessColor
      callback && callback()
    }
  }
}

export { playChess }