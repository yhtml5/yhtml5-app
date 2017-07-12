const header = require('../Components/Header/Header.html')
const dashboard = require('../Components/Dashboard/Dashboard.html')
const modal = require('../Components/Modal/index.html')

function html() {
  return (
    `
    ${header}
    <div id='body'></div>
    ${dashboard}
    ${modal}
    `
  )
}

module.exports = html()