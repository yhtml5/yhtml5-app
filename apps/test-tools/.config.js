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
    APP_TITLE: 'Testing Tools'
  },
  development: {
    customNodeEnv: 'development',
    fileBaseUrl: '../../file',
    shareApiBaeUrl: 'http://api.l.whereask.com',
    gatewayApiBase: '//gateway.2dfire-daily.com',
    gatewayApiEnv: '13cccf8b7b58467da82163d3cf540ef7'
  },
  production: {},
  dev: {},
  daily: {},
  pre: {},
  publish: {},
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
  // type: 'SPA',
  test: {
    // testMatch: ['demo/__test__/**/*.js?(x)'],
    // transformIgnorePatterns: ["node_modules/(?!(yhtml5-test|react-redux|react-native-button)/)"],
    // moduleNameMapper: webpackConfigAlias,
    // collectCoverageFrom: ['src/**/*.{js,jsx}'],
  }
}


module.exports = config

