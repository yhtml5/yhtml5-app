import { clearChessman } from '../Chessman/canvas'
import { createChessboard, drawChessBoard, clearChessBoard } from '../Chessboard/index'

function addDashboardListener(state) {
  document.getElementById('dashboardModel').addEventListener("click", alertAd)
  document.getElementById('dashboardStart').addEventListener("click", () => resetChessPositons(state))
  document.getElementById('dashboardGiveup').addEventListener("click", alertAd)
  document.getElementById('dashboardHistory').addEventListener("click", alertAd)
  document.getElementById('dashboardUndo').addEventListener("click", alertAd)
  document.getElementById('dashboardRedo').addEventListener("click", alertAd)
  // document.getElementById('dashboardBig').addEventListener("click", alertAd)
  // document.getElementById('dashboardSmall').addEventListener("click", alertAd)
  // document.getElementById('dashboardOther').addEventListener("click", alertAd)
}

function alertAd(params) {
  const r = confirm('检测您未安装王者荣耀, 请下载以解锁更多玩法!')
  if (r) {
    window.location.href = 'http://pvp.qq.com/'
  }
}

function resetChessPositons(state) {
  state.chessPositons = state.createChessPositons(15)
  state.wins = state.createWins('wins')
  state.myWin = state.createWins('myWin')
  state.aiWin = state.createWins('aiWin')
  state.gameOver = false
  clearChessBoard('canvas')
  drawChessBoard('canvas')
}

export { addDashboardListener }