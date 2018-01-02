import React from 'react';
import { List, Switch } from 'antd-mobile';

class ArrayPush extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    process.env.NODE_ENV === "production" || console.log('ArrayPush.constructor')
  }
  componentWillMount() {
    process.env.NODE_ENV === "production" || console.log('ArrayPush.componentWillMount')
  }
  componentDidMount() {
    process.env.NODE_ENV === "production" || console.log('ArrayPush.componentDidMount')
  }
  componentWillReceiveProps() {
    process.env.NODE_ENV === "production" || console.log('ArrayPush.componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps, nextState) {
    process.env.NODE_ENV === "production" || console.log('ArrayPush.shouldComponentUpdate')
    return true
  }
  componentWillUpdate() {
    process.env.NODE_ENV === "production" || console.log('ArrayPush.componentWillUpdate')
  }
  componentDidUpdate() {
    process.env.NODE_ENV === "production" || console.log('ArrayPush.componentDidUpdate')
  }
  componentWillUnmount() {
    process.env.NODE_ENV === "production" || console.log('ArrayPush.componentWillUnmount')
  }
  componentDidCatch(error, info) {
    process.env.NODE_ENV === "production" || console.log('ArrayPush.componentDidCatch', error, info)
  }
  render() {
    process.env.NODE_ENV === "production" || console.log('ArrayPush.render', this.props)
    const { items = [] } = this.props
    let listView = []

    items.map((value, index) => {
      listView.push(
        <List.Item
          key={index}
          extra={<Switch
            onClick={(checked) => { }}
          />}
        >{value.title}</List.Item>
      )
    })

    return (
      <List
        style={{ fontSize: '.14px' }}
        renderHeader={() => '设置'}
      >
        {listView}
      </List>
    )
  }
}

export default ArrayPush
