'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import './index.css'

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);

function createScript(src) {
  var script = document.createElement('script')
  script.setAttribute("type", "text/javascript")
  script.src = src
  document.body.appendChild(script)
  // console.log(script)
}
createScript('https://a.alipayobjects.com/g/h5-lib/alipayjsapi/3.0.6/alipayjsapi.inc.min.js')

// console.log('done!')

console.log('\nindex.js', {
  process: process,
  'process.env': process.env,
})
