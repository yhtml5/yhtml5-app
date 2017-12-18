import React from 'react';
import connect from 'react-redux/es/connect/connect'
import { toggleTestDashboard } from './task'
import TestButton from './Components/TestButton';
import Dashboard from './Components/Dashboard';

function Component({
  dispatch,
  testDashboard
}) {
  const { dashboardVisibility = false } = testDashboard

  const dashboardProps = {
    visibility: dashboardVisibility || false,
  }
  const testButtonProps = {
    onClick: toggleTestDashboard || function () { },
  }

  return (
    <div>
      <Dashboard {...dashboardProps} />
      <TestButton {...testButtonProps} />
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
