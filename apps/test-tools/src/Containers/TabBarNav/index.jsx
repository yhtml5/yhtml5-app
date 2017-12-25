import React from 'react';
import connect from 'react-redux/es/connect/connect'
import { onPress } from './task'
import TabBarNav from './Components/TabBarNav.jsx';

function Component(props) {
  const { dispatch } = props
  const { selectedTab, hidden } = props.tabBarNav
  const tabBarNavProps = {
    selectedTab: selectedTab || 'home',
    hidden: hidden || false,
    onPress: onPress || function () { },
  }
  return (
    <TabBarNav {...tabBarNavProps} />
  )
}

const mapStateToProps = (state) => {
  return {
    tabBarNav: state.tabBarNav,
    router: state.router,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onPress: (selectedTab) => {
//       dispatch(updateState(selectedTab))
//     }
//   }
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Component)
