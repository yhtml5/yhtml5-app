import React from 'react';
import { Button } from 'antd-mobile';
import styles from './TestButton.pcss';

const TestButton = ({
  onClick = function () { }
}
) =>
  <div
    className={`btn ${styles.testButtonBg}`}
  >
    <Button
      className={`btn ${styles.testButton}`}
      type="primary"
      onClick={onClick}
    >Test</Button>
  </div>

export default TestButton
