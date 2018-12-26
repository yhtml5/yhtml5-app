import React from 'react';
import connect from 'react-redux/es/connect/connect'
// import { onPress } from './task'
import Lists from './Components/Lists.jsx';

function Component(props) {
  const { dispatch } = props
  const { selectedTab, hidden } = props.tabBarNav
  const listsProps = {
    selectedTab: selectedTab || 'redTab',
    hidden: hidden || false,
    // onPress: onPress || function () { },
  }
  return (
    <Lists {...listsProps} />
  )
}

const mapStateToProps = (state) => {
  return {
    tabBarNav: state.tabBarNav,
    router: state.router,
  }
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Component)
