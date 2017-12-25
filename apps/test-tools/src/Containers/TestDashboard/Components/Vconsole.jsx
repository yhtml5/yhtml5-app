import React from 'react';
import VConsole from 'vconsole';
import styles from './Vconsole.pcss';

const vConsole = new VConsole();
class Vconsole extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
    this.toggleVconsole = this.toggleVconsole.bind(this)
    console.log('Vconsole.constructor')
  }
  componentWillMount() {
    console.log('Vconsole.componentWillMount')
  }
  componentDidMount() {
    window.APP.vConsole = vConsole
    if (this.props.page === 1) {
      vConsole.show()
    }
    console.log('Vconsole.componentDidMount')
  }
  componentWillReceiveProps() {
    console.log('Vconsole.componentWillReceiveProps')
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Vconsole.shouldComponentUpdate')
  //   return true
  // }
  componentWillUpdate() {
    console.log('Vconsole.componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('Vconsole.componentDidUpdate')
  }
  componentWillUnmount() {
    vConsole.hide()
    // window.APP.vConsole.destroy()
    // window.APP.vConsole = undefined
    console.log('Vconsole.componentWillUnmount')
  }
  componentDidCatch(error, info) {
    console.log('Vconsole.componentDidCatch', error, info)
  }
  toggleVconsole(bool) {
    if (this.props.page === 1) {
      vConsole.show()
    } else {
      vConsole.hide()
    }
  }
  render() {
    this.toggleVconsole()
    console.log('Vconsole.render')
    return (
      <div></div>
    )
  }
}


export default Vconsole
