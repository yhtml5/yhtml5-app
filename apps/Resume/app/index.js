import 'github-markdown-css'
import './Components/index.css'
import './Components/print.css'
import './Components/Header.css'
import './Components/Footer.css'
import { yhtml5 } from '../build/template/author'

function setTarget() {
    var as = document.getElementsByTagName('a')
    for (var i = 0; i < as.length; i++)
      as[i].setAttribute('target','blank')
}

yhtml5()
setTarget()
 
// if (process.env.NODE_ENV === 'production') {
//   setInterval(author.yhtml5(), 3000)
// }
