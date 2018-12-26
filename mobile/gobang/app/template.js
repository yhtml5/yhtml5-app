const template = (type) => {
  switch (type) {
    case 'index':
      return require('./pages/index.js')
    default:
      console.error('\ndo not match any type, please checkout HtmlWebpackPlugin')
      break;
  }
}

module.exports = template
