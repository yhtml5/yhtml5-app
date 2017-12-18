import React from 'react';
import { Button } from 'antd-mobile';
import styles from './index.pcss';

const Dashboard = ({
  visibility = false,
}
) => {
  return (
    <div
      style={{ display: visibility ? 'block' : 'none' }}
      className={styles.dashboard}
    >
      Dashboard
    </div>
  )

}


export default Dashboard
