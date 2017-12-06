import React from 'react';
import style from './index.pcss';

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: '400',
      height: '100%',
      src: '//2df.2dfire-pre.com/na'
    }
    this.handleClick = this.handleClick.bind(this)
    this.iFrameHeight = this.iFrameHeight.bind(this)
  }
  componentDidMount() {
    console.log(this.state)
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


export default Content
