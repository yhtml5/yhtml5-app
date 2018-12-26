import React from 'react';
import { TabBar, Icon } from 'antd-mobile';
import styles from './index.pcss';
import './index.css';

class TabBarNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress(selectedTab) {
    this.setState({
      selectedTab: selectedTab,
    });
  }

  renderContent(pageText) {
    return (
      < div >
        hellow world
      </div >
      // <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
      //   <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
      //   <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }} onClick={(e) => {
      //     e.preventDefault();
      //     this.setState({
      //       hidden: !this.state.hidden,
      //     });
      //   }}
      //   >
      //     点击切换 tab-bar 显示/隐藏
      //   </a>
      // </div>
    );
  }

  render() {
    const {
      selectedTab = 'redTab',
      hidden = false,
      onPress = () => { }
    } = this.props

    return (
      <div className={styles.tabBar}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div style={{
              width: '0.22rem',
              height: '0.22rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.21rem 0.21rem no-repeat'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '0.22rem',
              height: '0.22rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.21rem 0.21rem no-repeat'
            }}
            />
            }
            selected={selectedTab === 'home'}
            // badge={1}
            onPress={() => onPress({
              selectedTab: 'home',
              path: '/'
            })}
            data-seed="logId"
          >
            {/* {this.renderContent('生活')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '0.22rem',
                height: '0.22rem',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.21rem 0.21rem no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '0.22rem',
                height: '0.22rem',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.21rem 0.21rem no-repeat'
              }}
              />
            }
            title="view"
            key="view"
            dot
            selected={selectedTab === 'view'}
            onPress={() => onPress({
              selectedTab: 'view',
              path: '/view'
            })}
          >
            {/* {this.renderContent('朋友')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '0.22rem',
                height: '0.22rem',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.21rem 0.21rem no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '0.22rem',
                height: '0.22rem',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.21rem 0.21rem no-repeat'
              }}
              />
            }
            title="分析"
            key="analysis"
            // badge={'new'}
            selected={selectedTab === 'analysis'}
            onPress={() => onPress({
              selectedTab: 'analysis',
              path: '/analysis'
            })}
            data-seed="logId1"
          >
            {/* {this.renderContent('口碑')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="设置"
            key="setting"
            selected={selectedTab === 'setting'}
            onPress={() => onPress({
              selectedTab: 'setting',
              path: '/setting'
            })}
          >
            {/* {this.renderContent('我的')} */}
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

export default TabBarNav






