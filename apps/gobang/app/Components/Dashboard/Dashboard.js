import { clearChessman } from '../Chessman/canvas'
import { createChessboard, drawChessBoard, clearChessBoard } from '../Chessboard/index'

function addDashboardListener(state) {
  document.getElementById('start').addEventListener("click", () => resetChessPositons(state))
}

function resetChessPositons(state) {
  state.chessPositons = state.createChessPositons(15)
  state.wins = state.createWins('wins')
  state.myWin = state.createWins('myWin')
  state.aiWin = state.createWins('aiWin')
  clearChessBoard('canvas')
  drawChessBoard('canvas')
}

export { addDashboardListener }