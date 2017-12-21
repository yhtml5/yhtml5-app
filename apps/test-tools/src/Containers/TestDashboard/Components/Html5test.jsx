import React from 'react';
import style from './Html5test.pcss';

class Html5test extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={style.content}>
        <iframe
          src= 'http://html5test.com/'
          frameBorder="0"
          marginHeight='0'
          marginWidth='0'
          scrolling='no'
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
    )
  }
}


export default Html5test
