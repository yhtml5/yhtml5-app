import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect'
import Banner from './Components/Banner.jsx';
import ScanButton from './Components/ScanButton.jsx';
import styles from './Components/index.pcss';
import task from './task';

function Home({
  dispatch,
  testDashboard
}) {
  const {
    dashboardVisibility = false,
    page = 0
  } = testDashboard

  const BannerProps = {}
  const ScanButtonProps = {
    onClick: task.scanQrcode || function () { }
  }

  return (
    <div className={styles.app}>
      <Banner  {...BannerProps} />
      <ScanButton {...ScanButtonProps} />
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
)(Home)



