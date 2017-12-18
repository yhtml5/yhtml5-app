## scan qrcode

### 作用

* 不侵入业务逻辑代码, (遗忘发到正式环境)
* 多重测试手段, 集成 vconsole, e, html5
* 远程线上测试, 快速定位问题, 减少pc复现, 抓包等工作

- [ ] wechat 
- [ ] alipay
- [ ] upload

* state 是一个项目的核心, 维持一套合适的数据结构至为重要, 最好标明一个状态的来源(reaponse, session)
* 展示型逻辑几种在container(mapStateToProps), 事件型逻辑存放在task(mapDispatchToProps)
* sessionStorage 注意命名空间

命名规范:

* requestBase
* Store/Action
* Container/Component
* ACTION_TYPE
