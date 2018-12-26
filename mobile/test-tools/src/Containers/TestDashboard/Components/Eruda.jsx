import React from 'react';
import eruda from 'eruda';
import erudaFps from 'eruda-fps';
import erudaMemory from 'eruda-memory';
import erudaTiming from 'eruda-timing';
import erudaFeatures from 'eruda-features';
import styles from './Eruda.pcss';

eruda.init();
eruda.add(erudaFps);
eruda.add(erudaMemory);
eruda.add(erudaTiming);
eruda.add(erudaFeatures);

class Eruda extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.toggleEruda = this.toggleEruda.bind(this)
    process.env.NODE_ENV === "production" || console.log('Eruda.constructor')
  }
  componentWillMount() {
    process.env.NODE_ENV === "production" || console.log('Eruda.componentWillMount')
  }
  componentDidMount() {
    window.APP.eruda = eruda
    if (this.props.page === 0) {
      eruda.show()
    }
    process.env.NODE_ENV === "production" || console.log('Eruda.componentDidMount')
  }
  shouldComponentUpdate(nextProps, nextState) {
    // const isSrcChange = this.state.src !== nextState.src
    process.env.NODE_ENV === "production" || console.log('Eruda.shouldComponentUpdate')
    return true
  }
  componentWillUpdate() {
    process.env.NODE_ENV === "production" || console.log('Eruda.componentWillUpdate')
  }
  componentDidUpdate() {
    process.env.NODE_ENV === "production" || console.log('Eruda.componentDidUpdate')
  }
  componentWillUnmount() {
    eruda.hide()
    // if (this.props.page !== 0) {
    // }
    // eruda.destroy()
    // eruda = undefined
    process.env.NODE_ENV === "production" || console.log('Eruda.componentWillUnmount')
  }
  toggleEruda(bool) {
    if (this.props.page === 0) {
      eruda.show()
    } else {
      eruda.hide()
    }
  }
  render() {
    this.toggleEruda()
    process.env.NODE_ENV === "production" || console.log('Eruda.render', this.props)
    return (
      <div></div>
    )
  }
}


export default Eruda
