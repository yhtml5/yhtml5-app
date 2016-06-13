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
   - [x] 增加支付查询显示更多功能

### 文件改动
   - [x] 20160612 payment 增加日期控件, 视图优化
   - [x] 20160612 account.record 增加日期控件, 视图优化, 删除弹窗, 展开详情
   - [x] 20160612 account.detail 增加日期控件, 排列优化, 详情弹窗







