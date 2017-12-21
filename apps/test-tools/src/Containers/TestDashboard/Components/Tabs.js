import React from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

const tabs = [
  { title: <Badge text={'new'}>Eruda</Badge> },
  { title: <Badge>vConsole</Badge> },
  { title: <Badge>HTML5 test</Badge> },
  { title: <Badge dot>more</Badge> },
];

const TabsComponent = () => (
  <div>
    <Tabs tabs={tabs}
      initialPage={1}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of first tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of second tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>

      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
       即将支持更多调试工具
      </div>
    </Tabs>
    <WhiteSpace />
  </div>
);



export default TabsComponent


