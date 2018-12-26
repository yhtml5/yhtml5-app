const initView = (state) => {
  if (document.body.clientWidth < 500) {
    setChessboard(state, 300)
  } else {
    setChessboard(state, 450)
  }
}

function setChessboard(state, width) {
  state.width = width
  state.interval = width / 15
  state.pieceWidth = width / 15 / 15 * 13
}

export { initView }