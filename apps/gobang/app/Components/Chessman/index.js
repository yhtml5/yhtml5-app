import {
  drawChessman as drawChessmanCanvas
} from './canvas.js'

function drawChessman(type, value) {
  if (value === 'canvas') {
    return drawChessmanCanvas(value)
  } else {
    return drawChessmanCanvas(value)
  }
}

export {
  drawChessman
}