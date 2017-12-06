import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'));

function createScript(src) {
  var script = document.createElement('script')
  script.setAttribute("type", "text/javascript")
  script.src = src
  document.body.appendChild(script)
  console.log(script)
}
createScript('https://a.alipayobjects.com/g/h5-lib/alipayjsapi/3.0.6/alipayjsapi.inc.min.js')

console.log('done!')

console.log('\nindex.js\n', {
  process: process,
  'process.env': process.env,
})
