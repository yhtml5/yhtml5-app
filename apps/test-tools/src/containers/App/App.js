import React, { Component } from 'react';
import Content from '../Content/index';
import logo from './logo.svg';
import style from './App.pcss';

// const loadPrint = () => import(/* webpackChunkName: "print" */ './features/lazyload.js')
//   .then((result) => result.default)
//   .catch(error => `An error occurred while loading the component.\n${error}`);

// const loadPrint2 = () => import(/* webpackChunkName: "print2" */ './features/lazyload2.js')
//   .then((result) => result.default)
//   .catch(error => `An error occurred while loading the component.\n${error}`);

const lazilyLoad = (module) => module
  .then((result) => result.default)
  .catch(error => `An error occurred while loading the component.\n${error}`)

const loadPrint = () => lazilyLoad(import(/* webpackChunkName: "print" */ '../../features/lazyload.js'))
const loadPrint2 = () => lazilyLoad(import(/* webpackChunkName: "print2" */ '../../features/lazyload2.js'))

const timer = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

class App extends Component {
  constructor(props) {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.scanQrcode = this.scanQrcode.bind(this)
  }

  async handleClick() {
    // const print1 = await loadPrint()
    // await timer(1000)
    // print1(1)
    // const print2 = await loadPrint2()
    // print2(2)

    const [print3, print4] = await Promise.all([loadPrint(), loadPrint2()]);
    await timer(1000)
    print3(1)
    print4(2)

    console.log('\nApp.js\n', {})
  }

  scanQrcode() {
    console.log('scanQrcode')
    ap.scan(function (res) {
      ap.alert(res.code);
    });
  }

  // var btnScanQR = document.querySelector('#J_btn_scanQR');
  // var btnScanBAR = document.querySelector('#J_btn_scanBAR');
  // btnScanQR.addEventListener('click', function () {
  //   ap.scan(function (res) {
  //     ap.alert(res.code);
  //   });
  // });
  // btnScanBAR.addEventListener('click', function () {
  //   ap.scan({
  //     type: 'bar'
  //   }, function (res) {
  //     ap.alert(res.code);
  //   });
  // });

  render() {
    return (
      <div>
        <div className={style.app}>
          <header className={style.appHeader} onClick={this.handleClick}>
            <img src={logo} className={style.appLogo} alt="logo" />
            <h1 className={style.appTitle}>Testing Tools</h1>
          </header>
          <p className={style.appIntro}>
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <button
            id="J_btn_scanQR"
            className="btn btn-default"
            onClick={this.scanQrcode}
          >扫一扫二维码</button>
          {/* <button id="J_btn_scanBAR" className="btn btn-default">扫一扫条形码</button> */}
        </div>
        <br/>
        <hr/>
        <br/>
        <Content />
      </div>
    );
  }
}

export default App;
