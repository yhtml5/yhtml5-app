import React from 'react';
import logo from './logo.svg';
import styles from './Banner.pcss';

/* <button id="J_btn_scanBAR" className="btn btn-default">扫一扫条形码</button> */

const Banner = (
  onClick = function () { },
) =>
  <header
    className={styles.appHeader}
    onClick={() => onClick}>
    <div className={styles.appLogoBackground}>
      <img src={logo} className={styles.appLogo} alt="logo" />
    </div>
    <h1 className={styles.appTitle}>无线前端调试工具集</h1>
  </header>

export default Banner
