import {
  createChessboard as createChessboardCanvas,
  drawChessBoard as drawChessBoardCanvas,
  clearChessBoard as clearChessBoardCanvas
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

function clearChessBoard(value) {
  if (value === 'canvas') {
    return clearChessBoardCanvas()
  } else {
    return clearChessBoardCanvas()
  }
}

export {
  createChessboard,
  drawChessBoard,
  clearChessBoard
}