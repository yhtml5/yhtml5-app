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

export default createChessboard