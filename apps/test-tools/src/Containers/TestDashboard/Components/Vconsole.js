import React from 'react';
import VConsole from 'vconsole';
import styles from './Vconsole.pcss';

class Vconsole extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: '400',
      height: '100%',
      src: 'https://2df.me/PQZcj-jqsaz4'
    }
    // this.handleClick = this.handleClick.bind(this)
    // this.iFrameHeight = this.iFrameHeight.bind(this)
  }
  componentWillMount() {
    console.log('Vconsole.componentWillMount')
  }
  componentDidMount() {
    window.vConsole = new VConsole();
    console.log('Vconsole.componentDidMount')
  }
  shouldComponentUpdate(nextProps, nextState) {
    const isSrcChange = this.state.src !== nextState.src
    console.warn('Vconsole.shouldComponentUpdate')
    return true
  }
  componentWillUpdate() {
    console.log('Vconsole.componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('Vconsole.componentDidUpdate')
  }
  componentWillUnmount() {
    window.vConsole.hide()
    window.vConsole.destroy()
    window.vConsole = undefined
    console.log('Vconsole.componentWillUnmount')
  }
  render() {
    console.log('Vconsole.render')
    return (
      <div></div>
    )
  }
}


export default Vconsole
