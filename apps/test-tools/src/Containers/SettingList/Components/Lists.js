import React from 'react';
import { List, Switch } from 'antd-mobile';
import { createForm } from 'rc-form';

let Lists = ({ form }) => {
  const { getFieldProps } = form;
  return (
    <List
      style={{fontSize:'.14px'}}
      renderHeader={() => '设置'}
    >
      <List.Item
        extra={<Switch
          {...getFieldProps('vConsole', {
            initialValue: true,
            valuePropName: 'checked',
          }) }
          onClick={(checked) => { console.log(checked); }}
        />}
      >vConsole</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('eruda', {
            initialValue: true,
            valuePropName: 'checked',
          }) }
          onClick={(checked) => { console.log(checked); }}
        />}
      >eruda</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch5', {
            initialValue: true,
            valuePropName: 'checked',
          }) }
          platform="android"
        />}
      >Style for Android</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch6', {
            initialValue: true,
            valuePropName: 'checked',
          }) }
          platform="android"
          color="red"
        />}
      >Color for Android</List.Item>
    </List>
  );
}

Lists = createForm()(Lists);

export default Lists

