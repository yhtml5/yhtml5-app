const header = require('../Components/Header/Header.html')
const dashboard = require('../Components/Dashboard/Dashboard.html')

function html() {
  return (
    `
    ${header}
    <div id='body'></div>
    ${dashboard}
    `
  )
}

module.exports = html()