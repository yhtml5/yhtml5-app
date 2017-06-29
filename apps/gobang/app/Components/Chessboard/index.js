import {
  createChessboard as createChessboardCanvas,
  drawChessBoard as drawChessBoardCanvas
} from './canvas.js'
import dom from './dom.js'

function createChessboard(value) {
  if (value === 'canvas') {
    return createChessboardCanvas()
  } else {
    return createChessboardCanvas()
  }
}

function drawChessBoard(value) {
  if (value === 'canvas') {
    return drawChessBoardCanvas()
  } else {
    return drawChessBoardCanvas()
  }
}

export {
  createChessboard,
  drawChessBoard
}