## Some test of Front-End development

### Question  

1. 如下题，答案是： ______    (10分)  

```   
var x = 3;
var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function() {
            return this.x;
        }
    }
}
var go = foo.baz.bar;
alert(go());
alert(foo.baz.bar());
```

2. 如何水平居中一个元素?垂直居中呢？（10分)
3. 什么是ajax，如何解决跨域问题（10分）
4. 从浏览器地址栏输入url到显示页面的步骤，以HTTP为例，(15分)
5. 什么时Css盒子模型，包含了哪些要素（15分
6. 如何进行前端性能优化（20分）
7. 使用div+css布局,写出三列响应式布局，如下：（20分）

### Answer

#### 1.开放性，考察闭包，作用域，this

3, 1 this指向执行时刻的作用域，go的作用域是全局，所以相当于window，取到的就是window.x，也就是var x=3;这里定义的x。而foo.baz.bar()里面，this指向foo.baz，所以取到的是这个上面的x，也就是1。

#### 2.考察css基本功

如果需要居中的元素为常规流中inline元素，为父元素设置text-align: center;即可实现  

如果需要居中的元素为常规流中block元素，1）为元素设置宽度，2）设置左右margin为auto。3）IE6下需在父元素上设置text-align: center;,再给子元素恢复需要的值  

```
body {
    background: #DDD;
    text-align: center; /* 3 */
}
.content {
    width: 500px;      /* 1 */
    text-align: left;  /* 3 */
    margin: 0 auto;    /* 2 */
    background: purple;
}
```

如果需要居中的元素为浮动元素，1）为元素设置宽度，2）position: relative;，3）浮动方向偏移量（left或者right）设置为50%，4）浮动方向上的margin设置为元素宽度一半乘以-1  

```
body {
    background: #DDD;
}
.content {
    width: 500px;         /* 1 */
    float: left;
    position: relative;   /* 2 */
    left: 50%;            /* 3 */
    margin-left: -250px;  /* 4 */
    background-color: purple;
    }  
```  

如果需要居中的元素为绝对定位元素，1）为元素设置宽度，2）偏移量设置为50%，3）偏移方向外边距设置为元素宽度一半乘以-1  

```
body {
    background: #DDD;
    position: relative;
}
.content {
    width: 800px;
    position: absolute;
    left: 50%;
    margin-left: -400px;
    background-color: purple;
}
```

如果需要居中的元素为绝对定位元素，1）为元素设置宽度，2）设置左右偏移量都为0,3）设置左右外边距都为auto  

```   
body {
    background: #DDD;
    position: relative;
}
.content {
    width: 800px;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    background-color: purple;
}
```

如何竖直居中一个元素

参考资料：6 Methods For Vertical Centering With CSS。 盘点8种CSS实现垂直居中

需要居中元素为单行文本，为包含文本的元素设置大于font-size的line-height

#### 3.javascript跨域通信

AJAX即“Asynchronous Javascript And XML”（异步JavaScript和XML），是指一种创建交互式网页应用的网页开发技术。
通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

同源：两个文档同源需满足
1.协议相同
2.域名相同
3.端口相同

跨域通信：js进行DOM操作、通信时如果目标与当前窗口不满足同源条件，浏览器为了安全会阻止跨域操作。跨域通信通常有以下方法
* 如果是log之类的简单单项通信，新建<img>,<script>,<link>,<iframe>元素，通过src，href属性设置为目标url。实现跨域请求
* 如果请求json数据，使用<script>进行jsonp请求
* 现代浏览器中多窗口通信使用HTML5规范的targetWindow.postMessage(data, origin);其中data是需要发送的对象，origin是目标窗口的origin。 window.addEventListener('message', handler, false);handler的event.data是postMessage发送来的数据，event.origin是发送窗口的 origin，event.source是发送消息的窗口引用
* 内部服务器代理请求跨域url，然后返回数据
* 跨域请求数据，现代浏览器可使用HTML5规范的CORS功能，只要目标服务器返回HTTP头部Access-Control-Allow-Origin: *即可像普通ajax一样访问跨域资源

#### 4.开放性，考察对浏览器，http，DOM文档是否熟悉基本功

1. 在浏览器地址栏输入URL
2. 浏览器查看缓存，如果请求资源在缓存中并且新鲜，跳转到转码步骤 
    1. 如果资源未缓存，发起新请求
    2. 如果已缓存，检验是否足够新鲜，足够新鲜直接提供给客户端，否则与服务器进行验证。
    3. 检验新鲜通常有两个HTTP头进行控制Expires和Cache-Control： 
1. HTTP1.0提供Expires，值为一个绝对时间表示缓存新鲜日期
2. HTTP1.1增加了Cache-Control: max-age=,值为以秒为单位的最大新鲜时间
3. 浏览器解析URL获取协议，主机，端口，path
4. 浏览器组装一个HTTP（GET）请求报文
5. 浏览器获取主机ip地址，过程如下： 
    1. 浏览器缓存
    2. 本机缓存
    3. hosts文件
    4. 路由器缓存
    5. ISP DNS缓存
    6. DNS递归查询（可能存在负载均衡导致每次IP不一样）
6.  打开一个socket与目标IP地址，端口建立TCP链接，三次握手如下： 
    1.  客户端发送一个TCP的SYN=1，Seq=X的包到服务器端口
    2. 服务器发回SYN=1， ACK=X+1， Seq=Y的响应包
    3. 客户端发送ACK=Y+1， Seq=Z
7. TCP链接建立后发送HTTP请求
8. 服务器接受请求并解析，将请求转发到服务程序，如虚拟主机使用HTTP Host头部判断请求的服务程序
9. 服务器检查HTTP请求头是否包含缓存验证信息如果验证缓存新鲜，返回304等对应状态码
10. 处理程序读取完整请求并准备HTTP响应，可能需要查询数据库等操作
11. 服务器将响应报文通过TCP连接发送回浏览器
12. 浏览器接收HTTP响应，然后根据情况选择关闭TCP连接或者保留重用，关闭TCP连接的四次握手如下： 
    1. 主动方发送Fin=1， Ack=Z， Seq= X报文
    2. 被动方发送ACK=X+1， Seq=Z报文
    3. 被动方发送Fin=1， ACK=X， Seq=Y报文
    4. 主动方发送ACK=Y， Seq=X报文
13. 浏览器检查响应状态吗：是否为1XX，3XX， 4XX， 5XX，这些情况处理与2XX不同
14. 如果资源可缓存，进行缓存
15. 对响应进行解码（例如gzip压缩）
16. 根据资源类型决定如何处理（假设资源为HTML文档）
17. 解析HTML文档，构件DOM树，下载资源，构造CSSOM树，执行js脚本，这些操作没有严格的先后顺序，以下分别解释
18. 构建DOM树： 
    1. Tokenizing：根据HTML规范将字符流解析为标记
    2. Lexing：词法分析将标记转换为对象并定义属性和规则
    3. DOM construction：根据HTML标记关系将对象组成DOM树
19. 解析过程中遇到图片、样式表、js文件，启动下载
20. 构建CSSOM树： 
    1. Tokenizing：字符流转换为标记流
    2. Node：根据标记创建节点
    3. CSSOM：节点创建CSSOM树
21. 根据DOM树和CSSOM树构建渲染树: 
    1. 从DOM树的根节点遍历所有可见节点，不可见节点包括：1）script,meta这样本身不可见的标签。2)被css隐藏的节点，如display: none
    2. 对每一个可见节点，找到恰当的CSSOM规则并应用
    3. 发布可视节点的内容和计算样式
22. js解析如下： 
    1. 浏览器创建Document对象并解析HTML，将解析到的元素和文本节点添加到文档中，此时document. readystate为loading
    2. HTML解析器遇到没有async和defer的script时，将他们添加到文档中，然后执行行内或外部脚本。这些脚本会同步执行，并且在脚本下载和执行时解析器会暂停。这样就可以用document. write()把文本插入到输入流中。同步脚本经常简单定义函数和注册事件处理程序，他们可以遍历和操作script和他们之前的文档内容
    3. 当解析器遇到设置了async属性的script时，开始下载脚本并继续解析文档。脚本会在它下载完成后尽快执行，但是解析器不会停下来等它下载。异步脚本禁止使用document. write()，它们可以访问自己script和之前的文档元素
    4. 当文档完成解析，document. readState变成interactive
    5. 所有defer脚本会按照在文档出现的顺序执行，延迟脚本能访问完整文档树，禁止使用document. write()
    6. 浏览器在Document对象上触发DOMContentLoaded事件
    7. 此时文档完全解析完成，浏览器可能还在等待如图片等内容加载，等这些内容完成载入并且所有异步脚本完成载入和执行，document. readState变为complete,window触发load事件
23. 显示页面（HTML解析过程中会逐步显示页面）

#### 5.答案：开放性，考察html，css基本功

#### 6.开放性，考察网站性能优化掌握度，可以从服务端，客户端，代码规范上着手，以及是否用到构建工具

* content方面
    1. 减少HTTP请求：合并文件、CSS精灵、inline Image
    2. 减少DNS查询：DNS查询完成之前浏览器不能从这个主机下载任何任何文件。方法：DNS缓存、将资源分布到恰当数量的主机名，平衡并行下载和DNS查询
    3. 避免重定向：多余的中间访问
    4. 使Ajax可缓存
    5. 非必须组件延迟加载
    6. 未来所需组件预加载
    7. 减少DOM元素数量
    8. 将资源放到不同的域下：浏览器同时从一个域下载资源的数目有限，增加域可以提高并行下载量
    9. 减少iframe数量
    10. 不要404,减少重定向
* Server方面
    1. 使用CDN
    2. 添加Expires或者Cache-Control响应头
    3. 对组件使用Gzip压缩
    4. 配置ETag
    5. Flush Buffer Early
    6. Ajax使用GET进行请求
    7. 避免空src的img标签
* Cookie方面 
    1. 减小cookie大小
    2. 引入资源的域名不要包含cookie
* css方面 
    1. 将样式表放到页面顶部
    2. 不使用CSS表达式
    3. 使用不使用@import
    4. 不使用IE的Filter
* Javascript方面 
    1. 将脚本放到页面底部
    2. 将javascript和css从外部引入
    3. 压缩javascript和css
    4. 删除不需要的脚本
    5. 减少DOM访问
    6. 合理设计事件监听器
* 图片方面
1. 优化图片：根据实际颜色需要选择色深、压缩
2. 优化css精灵
3. 不要在HTML中拉伸图片
4. 保证favicon. ico小并且可缓存

#### 7.答案：开放性，考察html，css基本功