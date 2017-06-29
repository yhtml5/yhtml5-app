function createChessboard(params) {
  const body = document.getElementById('body')
  const canvas = document.createElement('canvas')
  const text = document.createTextNode("Your browser does not support Html5 canvas, please change a browser.")
  canvas.setAttribute("width", "900px")
  canvas.setAttribute("height", "900px")
  canvas.setAttribute("id", "chessboard")
  canvas.setAttribute("style", "width: 450px; height: 450px;")
  canvas.id = 'chessboard'
  canvas.appendChild(text)
  body.appendChild(canvas)
}

function drawChessBoard() {
  context.strokeStyle = lineColor;
  for (var i = 0; i < lineNum; i++) {
    context.moveTo(interval + i * interval * 2, interval);
    context.lineTo(interval + i * interval * 2, interval * 29);
    context.stroke();
    context.moveTo(interval, interval + i * interval * 2);
    context.lineTo(interval * 29, interval + i * interval * 2);
    context.stroke();
  }
}

export { createChessboard, drawChessBoard }