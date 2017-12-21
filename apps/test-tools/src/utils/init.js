import initFastClick from './fastclick';
import dealHtmlFontSize from './dealHtmlFontSize';

function init(params) {
  initFastClick()
  dealHtmlFontSize({window:window,designWidth:375})
}



// if(!window.Promise) {
//   document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
// }

function createScript(src) {
  var script = document.createElement('script')
  script.setAttribute("type", "text/javascript")
  script.src = src
  document.body.appendChild(script)
  // console.log(script)
}
// 判断支付宝引入
createScript('https://a.alipayobjects.com/g/h5-lib/alipayjsapi/3.0.6/alipayjsapi.inc.min.js')

// console.log('done!')

export default init
