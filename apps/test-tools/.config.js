/**
 * Author: yhtml5
 * Description: The configuration file for the yhtml5-scripts should not be packaged into the app
 * Notice: when this file changes, you should rerunning scripts
 */
const packageJson = require('./package.json')
const { getVersion } = require('yhtml5-dev-utils')
const outputPath = `dist/${getVersion(packageJson.version)}`

const envVar = {
  base: {
    APP_TITLE: 'SPA'
  },
  development: {
    customNodeEnv: 'development',
    fileBaseUrl: '../../file',
    shareApiBaeUrl: 'http://api.l.whereask.com',
    gatewayApiBase: '//gateway.2dfire-daily.com',
    gatewayApiEnv: '13cccf8b7b58467da82163d3cf540ef7'
  },
  production: {
    customNodeEnv: 'production',
    fileBaseUrl: '../../file',
    shareApiBaeUrl: 'http://api.l.whereask.com',
    gatewayApiBase: '//gateway.2dfire-daily.com',
    gatewayApiEnv: '13cccf8b7b58467da82163d3cf540ef7'
  },
  dev: {
    customNodeEnv: 'dev',
    fileBaseUrl: '../../file',
    shareApiBaeUrl: 'http://api.l.whereask.com',
    gatewayApiBase: '//gateway.2dfire-daily.com',
    gatewayApiEnv: '13cccf8b7b58467da82163d3cf540ef7'
  },
  daily: {
    customNodeEnv: 'daily',
    fileBaseUrl: '../../file',
    shareApiBaeUrl: 'http://api.l.whereask.com',
    gatewayApiBase: '//gateway.2dfire-daily.com',
    gatewayApiEnv: 'daily'
  },
  pre: {
    customNodeEnv: 'pre',
    fileBaseUrl: 'https://d.2dfire-pre.com/file',
    shareApiBaeUrl: 'https://meal.2dfire-pre.com',
    gatewayApiBase: '//gateway.2dfire-pre.com/',
    gatewayApiEnv: 'pre'
  },
  publish: {
    customNodeEnv: 'publish',
    fileBaseUrl: 'https://jscdn.2dfire.com/file',
    shareApiBaeUrl: 'https://meal.2dfire.com',
    gatewayApiBase: '//gateway.2dfire.com/',
    gatewayApiEnv: 'publish'
  },
};

const config = {
  devHost: '0.0.0.0',
  devPort: 2001,
  isAnalyze: true,
  analyzerPort: 2002,
  envVar: envVar,
  outputPath: outputPath,
  // host: './',

  entry: 'src/index.js',
  distributePort: 9993,
  pages: [{
    title: '测试1',
    key: 'index',
    filename: 'index.html',
    path: 'src/pages/resume.js'
  }, {
    key: 'luyan',
    title: '测试2',
    filename: 'luyan.html',
    path: 'src/pages/luyan.js'
  }],
  type: '',
  test: {
    // testMatch: ['demo/__test__/**/*.js?(x)'],
    // transformIgnorePatterns: ["node_modules/(?!(yhtml5-test|react-redux|react-native-button)/)"],
    // moduleNameMapper: webpackConfigAlias,
    // collectCoverageFrom: ['src/**/*.{js,jsx}'],
  }
}

module.exports = config

