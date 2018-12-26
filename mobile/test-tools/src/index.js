'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import init from './utils/init';
import Router from './Router';

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);

init()

process.env.NODE_ENV === "production" || console.log('\nindex.js', {
  process: process,
  'process.env': process.env,
})
