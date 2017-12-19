'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import init from './utils/init';
import './index.css'

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);

init()

console.log('\nindex.js', {
  process: process,
  'process.env': process.env,
})
