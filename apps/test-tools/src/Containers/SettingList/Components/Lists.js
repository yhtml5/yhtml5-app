import React from 'react';
import { List, Switch } from 'antd-mobile';
import { createForm } from 'rc-form';

let Lists = ({ form }) => {
  const { getFieldProps } = form;
  return (
    <List
      renderHeader={() => '设置'}
    >
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch1', {
            initialValue: true,
            valuePropName: 'checked',
          }) }
          onClick={(checked) => { console.log(checked); }}
        />}
      >On</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch2', {
            initialValue: false,
            valuePropName: 'checked',
          }) }
          onClick={(checked) => { console.log(checked); }}
        />}
      >Off</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch3', {
            initialValue: false,
            valuePropName: 'checked',
          }) }
          onClick={(checked) => { console.log(checked); }}
          disabled
        />}
      >Disabled off</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch4', {
            initialValue: true,
            valuePropName: 'checked',
          }) }
          onClick={(checked) => { console.log(checked); }}
          disabled
        />}
      >Disabled on</List.Item>
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
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch7', {
            initialValue: true,
            valuePropName: 'checked',
          }) }
          platform="ios"
        />}
      >Style for iOS</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch8', {
            initialValue: true,
            valuePropName: 'checked',
          }) }
          platform="ios"
          color="red"
        />}
      >Color for iOS</List.Item>
    </List>
  );
}

Lists = createForm()(Lists);

export default Lists

