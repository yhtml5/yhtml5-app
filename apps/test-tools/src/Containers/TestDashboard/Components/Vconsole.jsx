import React from 'react';
import VConsole from 'vconsole';
import styles from './Vconsole.pcss';

const vConsole = new VConsole();
class Vconsole extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
    this.toggleVconsole = this.toggleVconsole.bind(this)
    process.env.NODE_ENV === "production" || console.log('Vconsole.constructor')
  }
  componentWillMount() {
    process.env.NODE_ENV === "production" || console.log('Vconsole.componentWillMount')
  }
  componentDidMount() {
    window.APP.vConsole = vConsole
    if (this.props.page === 1) {
      vConsole.show()
    }
    process.env.NODE_ENV === "production" || console.log('Vconsole.componentDidMount')
  }
  componentWillReceiveProps() {
    process.env.NODE_ENV === "production" || console.log('Vconsole.componentWillReceiveProps')
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   process.env.NODE_ENV === "production" || console.log('Vconsole.shouldComponentUpdate')
  //   return true
  // }
  componentWillUpdate() {
    process.env.NODE_ENV === "production" || console.log('Vconsole.componentWillUpdate')
  }
  componentDidUpdate() {
    process.env.NODE_ENV === "production" || console.log('Vconsole.componentDidUpdate')
  }
  componentWillUnmount() {
    vConsole.hide()
    // window.APP.vConsole.destroy()
    // window.APP.vConsole = undefined
    process.env.NODE_ENV === "production" || console.log('Vconsole.componentWillUnmount')
  }
  componentDidCatch(error, info) {
    process.env.NODE_ENV === "production" || console.log('Vconsole.componentDidCatch', error, info)
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
    process.env.NODE_ENV === "production" || console.log('Vconsole.render')
    return (
      <div></div>
    )
  }
}


export default Vconsole
