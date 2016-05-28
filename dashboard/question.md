## Questions

####这里记录前端开发过程中遇到的问题与解析

### 开发心得
  * 开发大型javascript应用和做几个demo页面玩一玩最大的区别在于，要对一开始的文件组织和模块划分要有更清晰的认识
  * 后台只须提供REST风格的API
  *

### 开发难题
  * 界面管理混乱
  * 太多dom操作，用jQuery越写越乱，代码维护性差

### 开发问题
 - [] angular-ui 视图切换动画如何实现
      **参考 angular-phonecat**
 - [] angular-ui-bootstrap modal 中 select选择包含在script，不生成option
 - [] select 默认value属性如何实现
 - [] ng-repeat 嵌套多个元素，并且展示
      **参考account.record.html
 - [] 如何处理获取到的json数据，并且展示
      **使用$http服务，将获取到json的数组、对象映射到作用域，绑定作用域到template，参考account.record.html
 - [] 开户行所在地、支行名称、地域名称，数据来源问题
 - [] angular 去特定数组中的数据
 - [] angular 上传插件
 - [] html 识别excel数据并显示
 - [] 文件上传（ng-file-upload），文件限制、大小限制、上传进度、拖拽上传、断点续传
 - [] restful API
 - [] lazyload 延迟加载view所需的controller、resource、json
 - [] repeat 表格数据和其它内容数据如何绑定
 - [x] get modal 404
      **template 没有引用ui-view="modal"
      **app.js 中没有设置modal指向链接地址
      **没有设置触发按钮
 - [] 引用modal时候，会隐藏滚动条，引起的回流重绘。可否一直显示隐藏滚动条
 - [] angular 发送数据问题
 - [] 校验，所有界面超时跳转
 - [] api接口定义
 - [] angular按需请求css、js文件
 - [] fis3 处理ng-src问题，文件路径，md5戳问题
      **手动配置路径，依赖目录规范
      **__uri() 获取路径
 - [] angular repeat 绑定json数据中的一个值与class对应
      ** ng-class="{'icon-pc':x.appType == 1}"
 - [] 跨域问题，使用jsonp或者设置响应头
 - [] http开发常见问题：
      ** 访问本地文件
      ** 跨域问题 XMLHttpRequest cannot load | Access-Control-Allow-Origin
 - [] 不同controller之间传参
      ** 使用provider、factory、service
 - [] select默认值为空
 - [] 创建应用后，刷新页面
 - [] 商户后台页面走不通的地方，页面还唯有的

 ### 联调
 - [] #/user/person 通讯地址省、市默认显示数据 参考#/user/account/ 开户行所在地（select默认值为空）
 - [] #/account/ $http请求时间过长，请求俩次
 - [] 响应头中文乱码问题
 - [] #/authentication/person、#/authentication/account分部提交数据
 - [] #/account/record、#/account/detail、#/payment 表单page
 - [] #/account/topay  开户银行，开户银行所在地优化
 - [] #/appsetting/api 通知地址、支付地址弹窗
 - [] #user/password 忘记密码联调
 - [] #appseting/info 保存发送表单
 - [] #account/record 表单状态、数据
 - [] #account/detail 查询导出


### 性能优化
 - [] 减少标签嵌套深度
 - [] 选择器高复用、可维护写法优先、适当减少选择器
 - [] 优化nav、helpCenter部分，参考smsConfirm

### 项目规范
 - [] angular-ui-bootstrap modal id 统一为template.modal.html
 - [] 分类排序head.html
 - [x] 提取字体图标为单独组件
 - [] 解耦 样式（css）、模板（template）、业务逻辑（logic）





