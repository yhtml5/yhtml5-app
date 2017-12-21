import React from 'react';
import TabBarNav from '../Containers/TabBarNav';
import Banner from '../Containers/Banner';
import TestDashboard from '../Containers/TestDashboard';

function Analysis(params) {
  return (
    <div>
      <TestDashboard/>
      <TabBarNav />
    </div>
  )
}

export default Analysis
