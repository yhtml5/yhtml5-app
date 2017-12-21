'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Router from './Router';
import init from './utils/init';

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);

init()

console.log('\nindex.js', {
  process: process,
  'process.env': process.env,
})
