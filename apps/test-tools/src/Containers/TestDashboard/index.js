import React from 'react';
import connect from 'react-redux/es/connect/connect'
import { Button, Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { toggleTestDashboard } from './task'
import TestButton from './Components/TestButton';
import Dashboard from './Components/Dashboard';
// import Tabs from './Components/Tabs';
import Html5test from './Components/Html5test';
import Vconsole from './Components/Vconsole';
import styles from './Components/index.pcss';
import task from './task';


const tabs = [
  { title: <Badge text={'new'}>Eruda</Badge> },
  { title: <Badge>vConsole</Badge> },
  { title: <Badge>HTML5 test</Badge> },
  { title: <Badge dot>more</Badge> },
];

function Component({
  dispatch,
  testDashboard
}) {
  const { dashboardVisibility = false } = testDashboard

  // const dashboardProps = {
  //   visibility: dashboardVisibility || false,
  // }
  // const testButtonProps = {
  //   onClick: toggleTestDashboard || function () { },
  // }

  return (
    <div
      className={styles.testDashboard}
    >
      <Tabs tabs={tabs}
        initialPage={2}
        onChange={(tab, index) => task.tabChange({ tab, index })}
      // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
      >
        <div>
          Content of first tab
        </div>
        <Vconsole/>
        <div>
          <Button
            className={`btn ${styles.testBtn}`}
            type="primary"
            onClick={task.goToHtml5Test}
          >HTML5 Test</Button>
        </div>
        <div>
          即将支持更多调试工具
        </div>
      </Tabs>
      <WhiteSpace />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    testDashboard: state.testDashboard,
    router: state.router,
  }
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Component)
