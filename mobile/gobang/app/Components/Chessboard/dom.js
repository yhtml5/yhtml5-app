function createChessboard(params) {
  const body = document.getElementById('body')
  const dom = document.createElement('div')
  const text = document.createTextNode("hello world")
  dom.setAttribute("width", "900px")
  dom.setAttribute("height", "900px")
  dom.setAttribute("id", "chessboard")
  dom.id = 'chessboard'
  dom.appendChild(text)
  body.appendChild(dom)
}

export default createChessboard