import React from 'react';
import styles from './Frame.pcss';

// class TestFrame extends React.PureComponent {
class TestFrame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // width: '400',
      // height: '100%',
    }
    this.iFrameHeight = this.iFrameHeight.bind(this)
  }
  componentDidMount() {
    console.log('TestFrame.componentDidMount', this.state)
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   const isSrcChange = this.state.src !== nextState.src
  //   console.warn('shouldComponentUpdate',isSrcChange)
  //   return false
  // }
  componentWillUpdate() {
    console.log('TestFrame.componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('TestFrame.componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('TestFrame.componentWillUnmount')
  }
  iFrameHeight() {
    // console.log('iFrameHeight')
    // var ifm = document.getElementById("iframepage");
    // var subWeb = document.frames ? document.frames["iframepage"].document : ifm.contentDocument;
    // if (ifm != null && subWeb != null) {
    //   ifm.height = subWeb.body.scrollHeight;
    //   ifm.width = subWeb.body.scrollWidth;
    // }
  }

  render() {
    console.log('TestFrame.render', this.props)

    return (
      <div className={styles.content}>
        <iframe
          src={this.props.src}
          // width='400 !important'
          // height='600'
          frameBorder="0"
          marginHeight='0'
          marginWidth='0'
          scrolling='no'
          onLoad={this.iFrameHeight()}
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
    )
  }
}


export default TestFrame
