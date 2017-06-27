const resume = (type) => {
  switch (type) {
    case 'index':
      return require('./pages/resume.js')
    default:
      console.error('\ndo not match any type, please checkout HtmlWebpackPlugin')
      break;
  }
}

module.exports = resume
