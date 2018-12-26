const header = require('../Components/Header/Header.html')
const footer = require('../Components/Footer/Footer.html')
const dashboard = require('../Components/Dashboard/Dashboard.html')
const modal = require('../Components/Modal/index.html')

function html() {
  return (
    `
    ${header}
    <div id='body'></div>
    ${dashboard}
    ${footer}
    ${modal}
    `
  )
}

module.exports = html()