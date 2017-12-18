import React from 'react';
import TabBarNav from '../Containers/TabBarNav';
import Banner from '../Containers/Banner';
import AnalysisFrame from '../Containers/AnalysisFrame';
import TestDashboard from '../Containers/TestDashboard';

function Analysis(params) {
  return (
    <div>
      <TestDashboard/>
      <AnalysisFrame />
      <TabBarNav />
    </div>
  )
}

export default Analysis
