import state from '../../state'

function createChessboard(params) {
  const body = document.getElementById('body')
  const canvas = document.createElement('canvas')
  const text = document.createTextNode("Your browser does not support Html5 canvas, please change a browser.")
  canvas.setAttribute("width", `${state.width * 2}px`)
  canvas.setAttribute("height", `${state.width * 2}px`)
  canvas.setAttribute("id", "chessboard")
  canvas.setAttribute("style", `width: ${state.width}px; height: ${state.width}px;`)
  canvas.id = 'chessboard'
  canvas.appendChild(text)
  body.appendChild(canvas)
}

function drawChessBoard() {
  const context = state.chessboard.getContext('2d')
  context.strokeStyle = state.lineColor;
  for (var i = 0; i < state.lineNum; i++) {
    context.moveTo(state.interval + i * state.interval * 2, state.interval);
    context.lineTo(state.interval + i * state.interval * 2, state.interval * 29);
    context.stroke();
    context.moveTo(state.interval, state.interval + i * state.interval * 2);
    context.lineTo(state.interval * 29, state.interval + i * state.interval * 2);
    context.stroke();
  }
}

export { createChessboard, drawChessBoard }