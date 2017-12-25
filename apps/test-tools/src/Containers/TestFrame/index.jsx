import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect'
import Frame from './Components/Frame.jsx';
import task from './task';

function TestFrame({
  dispatch = function () { },
  testFrame = {}
}) {
  const { src = '' } = testFrame
  const FrameProps = { src }

  return (
    <Frame {...FrameProps} />
  )
}

const mapStateToProps = (state) => {
  return {
    testFrame: state.testFrame,
    router: state.router,
  }
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(TestFrame)



