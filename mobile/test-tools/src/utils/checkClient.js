function addScriptTag(src) {
  var script = document.createElement('script')
  script.setAttribute("type", "text/javascript")
  script.src = src
  document.body.appendChild(script)
}

window.onload = function () {
  addScriptTag('http://res.wx.qq.com/open/js/jweixin-1.2.0.js');
}
