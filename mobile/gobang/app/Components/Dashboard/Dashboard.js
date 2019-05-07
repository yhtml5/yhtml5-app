// import { clearChessman } from '../Chessman/canvas'
import {
  // createChessboard,
  drawChessBoard,
  clearChessBoard,
} from '../Chessboard/index'

function addDashboardListener(state) {
  document.getElementById('dashboard').addEventListener("click", event => {
    const { id = '' } = event.target
    if (id === 'dashboardStart') {
      resetChessPositons(state)
    } else {
      alertAd()
    }
  })
  // document.getElementById('dashboardStart').addEventListener("click", () => resetChessPositons(state))
  // document.getElementById('dashboardModel').addEventListener("click", alertAd)
  // document.getElementById('dashboardGiveup').addEventListener("click", alertAd)
  // document.getElementById('dashboardHistory').addEventListener("click", alertAd)
  // document.getElementById('dashboardUndo').addEventListener("click", alertAd)
  // document.getElementById('dashboardRedo').addEventListener("click", alertAd)
  // document.getElementById('dashboardBig').addEventListener("click", alertAd)
  // document.getElementById('dashboardSmall').addEventListener("click", alertAd)
  // document.getElementById('dashboardOther').addEventListener("click", alertAd)
}

function alertAd() {
  const text = '关注XXX公众号, 解锁更多玩法!'
  alert(text)
  // const r = confirm(text)
  // if (r) {
  //   window.location.href = 'https://github.com/yhtml5'
  // }
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
