import canvas from './canvas.js'
import dom from './dom.js'

function render(value) {
  if (value === 'canvas') {
    return canvas()
  } else {
    return dom()
  }
}


export default render