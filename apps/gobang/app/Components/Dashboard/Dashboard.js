import { clearChessman } from '../Chessman/canvas'

function addDashboardListener(state) {
  document.getElementById('start').addEventListener("click", () => resetChessPositons(state))
}

function resetChessPositons(state) {
  state.chessPositons = state.chessPositonsInit
  state.chessPositonsInit.forEach((value, index) => {
    value.forEach((v, i) => {
      clearChessman({ i: index, j: i })
    })
  })
}

export { addDashboardListener }