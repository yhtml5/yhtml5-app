const markdown = require('../README.md')
const header = require('../Components/Header.html')
const footer = require('../Components/Footer.html')

function html() {
  return (
    `
    ${header}
    <div id='body' class="main-content">
    ${markdown}
    ${footer}
    </div>
    `
  )
}

module.exports = html()