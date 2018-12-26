import React from 'react';
import { List, Switch } from 'antd-mobile';

class ArrayMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    process.env.NODE_ENV === "production" || console.log('ArrayMap.constructor')
  }
  componentWillMount() {
    process.env.NODE_ENV === "production" || console.log('ArrayMap.componentWillMount')
  }
  componentDidMount() {
    process.env.NODE_ENV === "production" || console.log('ArrayMap.componentDidMount')
  }
  componentWillReceiveProps() {
    process.env.NODE_ENV === "production" || console.log('ArrayMap.componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps, nextState) {
    process.env.NODE_ENV === "production" || console.log('ArrayMap.shouldComponentUpdate')
    return true
  }
  componentWillUpdate() {
    process.env.NODE_ENV === "production" || console.log('ArrayMap.componentWillUpdate')
  }
  componentDidUpdate() {
    process.env.NODE_ENV === "production" || console.log('ArrayMap.componentDidUpdate')
  }
  componentWillUnmount() {
    process.env.NODE_ENV === "production" || console.log('ArrayMap.componentWillUnmount')
  }
  componentDidCatch(error, info) {
    process.env.NODE_ENV === "production" || console.log('ArrayMap.componentDidCatch', error, info)
  }
  render() {
    process.env.NODE_ENV === "production" || console.log('ArrayMap.render', this.props)
    const { items = [] } = this.props

    return (
      <List
        style={{ fontSize: '.14px' }}
        renderHeader={() => '设置'}
      >
        {items.map((value, index) =>
          <List.Item
            key={index}
            extra={<Switch
              onClick={(checked) => { }}
            />}
          >{value.title}</List.Item>
        )}
      </List>
    )
  }
}

export default ArrayMap
