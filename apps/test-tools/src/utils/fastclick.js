import FastClick from 'fastclick';

// 判断移动浏览器引入
const initFastClick = () => {
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
      FastClick.attach(document.body);
    }, false);
  }
}


export default initFastClick


