// (function (doc, win) {
//   var html = doc.getElementsByTagName("html")[0],
//     // orientationchange->手机屏幕转屏事件
//     // resize->页面大小改变事件(一边pc端有用)
//     reEvt = "orientationchange" in win ? "orientationchange" : "resize",
//     reFontSize = function () {
//       var clientW = doc.documentElement.clientWidth || doc.body.clientWidth;
//       if (!clientW) {
//         return;
//       }
//       html.style.fontSize = 100 * (clientW / 375) + "px";
//     }
//   win.addEventListener(reEvt, reFontSize);
//   // DOMContentLoaded->dom加载完就执行,onload要dom/css/js都加载完才执行
//   doc.addEventListener("DOMContentLoaded", reFontSize);
// })(document, window);

function dealHtmlFontSize(window) {
  if (!window) { return }
  var html = window.document.getElementsByTagName("html")[0],
    // orientationchange->手机屏幕转屏事件
    // resize->页面大小改变事件(一边pc端有用)
    reEvt = "orientationchange" in window ? "orientationchange" : "resize",
    reFontSize = function () {
      var clientW = window.document.documentElement.clientWidth || window.document.body.clientWidth;
      console.log(clientW)
      if (!clientW) {
        return;
      }
      html.style.fontSize = 100 * (clientW / 375) + "px";
    }
  window.addEventListener(reEvt, reFontSize);
  // DOMContentLoaded->dom加载完就执行,onload要dom/css/js都加载完才执行
  window.document.addEventListener("DOMContentLoaded", reFontSize);
}

export default dealHtmlFontSize
