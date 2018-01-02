import React from 'react';
import connect from 'react-redux/es/connect/connect'
// import { Button, Tabs, WhiteSpace, Badge } from 'antd-mobile';
// import { toggleTestDashboard } from './task'
// import More from './Components/More.jsx';
import ArrayPush from './Components/ArrayPush.jsx';
import ArrayMap from './Components/ArrayMap.jsx';
// import Html5test from './Components/Html5test.jsx';
// import Vconsole from './Components/Vconsole.jsx';
// import Eruda from './Components/Eruda.jsx';
// import styles from './Components/index.pcss';
// import task from './task';

function Component({
  dispatch,
  cases = {}
}) {

  const arrayPushProps = {
    items: cases.items || [],
  }
  const arrayMapProps = {
    items: cases.items || [],
  }

  return (
    <div>
      <ArrayPush {...arrayPushProps} />
      <ArrayMap {...arrayMapProps} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cases: state.cases,
    router: state.router,
  }
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Component)
