import React from 'react';
import style from './index.pcss';

class TestFrame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: '400',
      height: '100%',
      src: 'https://2df.me/PQZcj-jqsaz4'
    }
    this.handleClick = this.handleClick.bind(this)
    this.iFrameHeight = this.iFrameHeight.bind(this)
  }
  componentDidMount() {
    console.log('componentDidMount',this.state)
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   const isSrcChange = this.state.src !== nextState.src
  //   console.warn('shouldComponentUpdate',isSrcChange)
  //   return false
  // }
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  iFrameHeight() {
    console.log('iFrameHeight')
    // var ifm = document.getElementById("iframepage");
    // var subWeb = document.frames ? document.frames["iframepage"].document : ifm.contentDocument;
    // if (ifm != null && subWeb != null) {
    //   ifm.height = subWeb.body.scrollHeight;
    //   ifm.width = subWeb.body.scrollWidth;
    // }
  }
  async handleClick() {
    // const print1 = await loadPrint()
    // await timer(1000)
    // print1(1)
    // const print2 = await loadPrint2()
    // print2(2)

    const [print3, print4] = await Promise.all([loadPrint(), loadPrint2()]);
    await timer(1000)
    print3(1)
    print4(2)

    console.log('\nApp.js\n', {})
  }

  render() {
    console.log('render')
    return (
      <div className={style.content}>
        <iframe
          src={this.state.src}
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
