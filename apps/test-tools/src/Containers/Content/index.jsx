import React from 'react';
import connect from 'react-redux/es/connect/connect'
import TabBarNav from '../TabBarNav/index';
import Home from '../Home';
import TestFrame from '../TestFrame';
import SettingList from '../SettingList';
import Demo from '../Demo';
import TestDashboard from '../TestDashboard';

function Component(props) {
  const { selectedTab = '' } = props.tabBarNav

  let Content = null
  switch (selectedTab) {
    case 'home':
      Content = Home
      break;
    case 'view':
      Content = TestFrame
      break;
    case 'analysis':
      Content = TestDashboard
      break;
    case 'setting':
      Content = SettingList
      break;
    case 'demo':
      Content = Demo
      break;
    default:
      Content = Home
      break;
  }

  const isView = selectedTab === 'view'

  console.warn('Content', {
    selectedTab
  })
  return (
    <div>
      {isView ? null : <Content />}
      <div style={{ display: isView ? 'block' : 'none' }} >
        <TestFrame />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tabBarNav: state.tabBarNav,
  }
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Component)




