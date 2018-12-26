import React from 'react';
import { Button } from 'antd-mobile';
import styles from './More.pcss';

const More = ({
  onClick = function () { }
}
) =>
  <div className={styles.content}>
    即将支持更多调试工具
</div>

export default More
