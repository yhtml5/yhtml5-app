import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect'
import Frame from './Components/Frame.jsx';
import ScanButton from '../Home/Components/ScanButton';
import task from './task';
import homeTask from '../Home/task';

function TestFrame({
  dispatch = function () { },
  testFrame = {}
}) {
  const { src = '' } = testFrame
  const FrameProps = { src }
  const ScanButtonProps = {
    onClick: homeTask.scanQrcode || function () { }
  }

  return (
    src
      ? <Frame {...FrameProps} />
      : <ScanButton />
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



