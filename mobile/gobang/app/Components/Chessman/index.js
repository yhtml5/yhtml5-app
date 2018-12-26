import {
  drawChessman as drawChessmanCanvas
} from './canvas.js'

function drawChessman(type, value) {
  if (type === 'canvas') {
    return drawChessmanCanvas(value)
  } else {
    return drawChessmanCanvas(value)
  }
}

export {
  drawChessman
}