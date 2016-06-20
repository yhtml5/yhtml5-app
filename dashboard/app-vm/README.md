## 简介
   * 本版本使用jquery替代Angular指令, 使用VM java模板替换angular model, $scope, server

### vm版本说明
   - [-] 去除factory.js,
   - [-] 去除angular相关指令: ng-model, ng-bind, ng-init, ng-click
   - [-] 去除上传组件, 搜索组件, 省市地址组件, 银行组件, 经营范围等angular支持
   - [-] 去除无用的$scope, model,
   - [-] 去除UI-Router中已用vm写的部分
   - [-] 去除多余的http请求

### 新增内容
   - [x] 引入jquey.js, bootstrap.js
   - [x] 用jquery重写下拉组件,
   - [-] 用jquery重写文件上传组件,
   - [x] 用jquery重写日期组件,列出组件功能
       - [x] 时间格式用"2016-11-11 11:11",  //format: "yyyy-mm-dd hh:ii",
   - [-] 用jquery重写弹窗事件, 账户详情, 成功窗口
   - [x] 弹窗,只有当点击关闭才能关闭,其它空白区设置为无反应状态
       - [x] 在class为modal 的标签中,加上 data-backdrop="static"
   - [x] 增加支付查询显示更多功能
   - [-] 用jQuery重写倒计时
   - [x] 抽离smsConfirm,realNameModal
   - [x] 用户设置tab标签重写

### 文件改动
   - [x] 20160612 payment 增加日期控件, 视图优化
   - [x] 20160612 account.record 增加日期控件, 视图优化, 展开详情
   - [x] 20160612 account.detail 增加日期控件, 排列优化
   - [x] 20160613 account 去除angular属性,
   - [x] 20160613 account.detail 增加日期控件; 优化排列; 重写详情弹窗
   - [x] 20160613 account.record 增加日期控件, 展开详情; 优化视图UI,表格显示; 重写删除弹窗
   - [x] 20160613 account.topay 重写批量代付弹窗,批量复合弹窗
   - [x] 20160613 account.withdraw 用jquery重写弹窗
   - [x] 20160613 payment 增加日期控件; 优化视图UI,表格显示; 重写补发通知弹窗
   - [x] 20160613 account.topay 重写单笔复核弹窗, 优化radio选项
   - [x] 20160615 user.data 重写tab标签切换,优化试图UI
   - [x] 20160615 user.data 增加网络图片上传



### jQuery命名规范
   动词代表触发事件对象, 名词代表响应事件的实体, 用属性选择器获取内容
   (尽量避免使用class属性选择器当做操作dom的节点, id选择器仅当元素唯一时使用)
   - [x] Event object: y-open="demoFormBtn"
   - [x] contant: y-modal="demoForm", y-tab="demo"
   - [x] get attribute: $('[y-open="demoFormBtn"], [y-modal="demoForm"], .y-open, #y-open')


