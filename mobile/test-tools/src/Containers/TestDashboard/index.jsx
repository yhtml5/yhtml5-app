import React from 'react';
import connect from 'react-redux/es/connect/connect'
import { Button, Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { toggleTestDashboard } from './task'
import More from './Components/More.jsx';
// import Dashboard from './Components/Dashboard.jsx';
import Html5test from './Components/Html5test.jsx';
import Vconsole from './Components/Vconsole.jsx';
import Eruda from './Components/Eruda.jsx';
import styles from './Components/index.pcss';
import task from './task';


const tabs = [
  { title: <Badge dot>Eruda</Badge> },
  { title: <Badge>vConsole</Badge> },
  { title: <Badge text={'new'}>HTML5 test</Badge> },
  { title: <Badge>more</Badge> },
];

function Component({
  dispatch,
  testDashboard
}) {
  const {
    dashboardVisibility = false,
    page = 0
  } = testDashboard

  const ErudaProps = {
    page: page || 0,
  }
  const VconsoleProps = {
    page: page || 0,
  }
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
      <Tabs
        tabs={tabs}
        // initialPage={page}
        page={page}
        swipeable={true}
        prerenderingSiblingsNumber={4}
        onChange={(tab, index) => task.tabChange({ tab, index })}
      >
        <Eruda  {...ErudaProps} />
        <Vconsole {...VconsoleProps} />
        <Button
          // key='goToHtml5Test'
          className={`btn ${styles.testBtn}`}
          type="primary"
          onClick={task.goToHtml5Test}
        >HTML5 Test</Button>
        <More/>
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
