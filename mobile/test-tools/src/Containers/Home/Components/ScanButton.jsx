import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import styles from './ScanButton.pcss';

/* <button id="J_btn_scanBAR" className="btn btn-default">扫一扫条形码</button> */

const ScanButton = ({
  onClick = function () { },
}) =>
  <Button
    className={`btn ${styles.scanBtn}`}
    type="primary"
    onClick={onClick}
  >扫一扫</Button>



export default ScanButton
