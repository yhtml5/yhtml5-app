const header = require('../Components/Header/Header.html')

function html() {
  return (
    `
    ${header}
    <div id='body'></div>
    `
  )
}

module.exports = html()