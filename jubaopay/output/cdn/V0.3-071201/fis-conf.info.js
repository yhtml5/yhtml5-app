/*
 * === fis3 ===
 *    fis.set设置项目属性
 *    fis.set("project.ignore", ['**', '**',]); 忽略的文件
 *    安装插件 npm install [-g] fis3-postpackager-loader
 *    fis3-postpackager-loader 分析 {
    "res": {
        "fis-conf.demo.js": {
            "uri": "/fis-conf.demo.js",
            "type": "js"
        },
        "fis-conf.info.js": {
            "uri": "/fis-conf.info.js",
            "type": "js"
        },
        "fis-conf.js": {
            "uri": "/fis-conf.js",
            "type": "js"
        },
        "node.css": {
            "uri": "/node.css",
            "type": "css",
            "deps": [
                "bower_components/html5-boilerplate/dist/css/normalize.css",
                "bower_components/html5-boilerplate/dist/css/main.css",
                "bower_components/bootstrap/dist/css/bootstrap.min.css",
                "server/author.css",
                "components/iconfont/iconfont.css",
                "components/css/cover.css",
                "components/css/animation.css",
                "components/css/custom.css",
                "components/css/base.css",
                "components/nav/nav.css",
                "view/download/download.css",
                "view/production/production.css",
                "view/footer/footer.css"
            ]
        },
        "node.js": {
            "uri": "/node.js",
            "type": "js",
            "deps": [
                "bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js",
                "bower_components/angular/angular.min.js",
                "bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
                "bower_components/angular-animate/angular-animate.min.js",
                "bower_components/angular-ui-router/release/angular-ui-router.min.js",
                "server/author.js",
                "components/js/router.js",
                "components/js/ctrl.js",
                "components/js/tj.js"
            ]
        },
        "server/author.css": {
            "uri": "/server/author.css",
            "type": "css"
        },
        "server/author.js": {
            "uri": "/server/author.js",
            "type": "js"
        },
        "view/download/download.css": {
            "uri": "/view/download/download.css",
            "type": "css"
        },
        "view/footer/footer.css": {
            "uri": "/view/footer/footer.css",
            "type": "css"
        },
        "view/production/production.css": {
            "uri": "/view/production/production.css",
            "type": "css"
        },
        "bower_components/html5-boilerplate/dist/css/normalize.css": {
            "uri": "/dist/bower_components/html5-boilerplate/dist/css/normalize.css",
            "type": "css"
        },
        "bower_components/html5-boilerplate/dist/css/main.css": {
            "uri": "/dist/bower_components/html5-boilerplate/dist/css/main.css",
            "type": "css"
        },
        "bower_components/bootstrap/dist/css/bootstrap.min.css": {
            "uri": "/dist/bower_components/bootstrap/dist/css/bootstrap.min.css",
            "type": "css",
            "extras": {}
        },
        "components/iconfont/iconfont.css": {
            "uri": "/static/iconfont/iconfont_447deb44.css",
            "type": "css",
            "pkg": "p0"
        },
        "components/css/cover.css": {
            "uri": "/dist/components/css/cover.css",
            "type": "css",
            "pkg": "p0"
        },
        "components/css/animation.css": {
            "uri": "/dist/components/css/animation.css",
            "type": "css",
            "pkg": "p0"
        },
        "components/css/custom.css": {
            "uri": "/dist/components/css/custom.css",
            "type": "css",
            "pkg": "p0"
        },
        "components/css/base.css": {
            "uri": "/dist/components/css/base.css",
            "type": "css",
            "pkg": "p0"
        },
        "components/nav/nav.css": {
            "uri": "/dist/components/nav/nav.css",
            "type": "css",
            "pkg": "p0"
        },
        "bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js": {
            "uri": "/dist/bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js",
            "type": "js"
        },
        "bower_components/angular/angular.min.js": {
            "uri": "/dist/bower_components/angular/angular.min.js",
            "type": "js",
            "extras": {}
        },
        "bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js": {
            "uri": "/dist/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
            "type": "js"
        },
        "bower_components/angular-animate/angular-animate.min.js": {
            "uri": "/dist/bower_components/angular-animate/angular-animate.min.js",
            "type": "js",
            "extras": {}
        },
        "bower_components/angular-ui-router/release/angular-ui-router.min.js": {
            "uri": "/dist/bower_components/angular-ui-router/release/angular-ui-router.min.js",
            "type": "js",
            "extras": {}
        },
        "components/js/router.js": {
            "uri": "/dist/components/js/router.js",
            "type": "js",
            "pkg": "p1"
        },
        "components/js/ctrl.js": {
            "uri": "/dist/components/js/ctrl.js",
            "type": "js",
            "pkg": "p1"
        },
        "components/js/tj.js": {
            "uri": "/dist/components/js/tj.js",
            "type": "js",
            "pkg": "p1"
        }
    },
    "pkg": {
        "p0": {
            "uri": "/static/yhtml5_69475841.css",
            "type": "css",
            "has": [
                "components/iconfont/iconfont.css",
                "components/css/cover.css",
                "components/css/animation.css",
                "components/css/custom.css",
                "components/css/base.css",
                "components/nav/nav.css"
            ]
        },
        "p1": {
            "uri": "/static/yhtml5_ed9db2e7.js",
            "type": "js",
            "has": [
                "components/js/router.js",
                "components/js/ctrl.js",
                "components/js/tj.js"
            ]
        }
    }
} 结构，来解决资源加载问题？
 *
 * === path ===
 *    "/"为绝对路径,  "./"相对当前目录， "../"上级目录
 *    $0 代表的是 match 到的整个字符串
 *    release输出相对于fis-conf.js文件的绝对定位
 *    js里的资源定位需要加上__uri() //不是__url()
 *    domain设置域名，相对路径配置"."
 *
 * === plugin ===
 *     启用打包插件，必须匹配 ::package
 *    'keepBreaks': false, //保持一个规则一个换行
 *     useSprite: true // 给匹配到的文件分配属性 `useSprite`
 *     useInlineMap: true, // 资源映射表内嵌
 *     allInOne: true, 默认 false, 配置是否合并零碎资源。
 *     isMod 标记文件为组件化文件。被标记成组件化的文件会入map.json表。并且会对js文件进行组件化包装。
 *     packOrder:用来控制合并时的顺序，值越小越在前面。配合 packTo 一起使用。默认值：0
 *     packTo:分配到这个属性的文件将会合并到这个属性配置的文件中
 *            设置的是源码路径，也会受到已经设置的 fis.match 规则的影响
 *     useSameNameRequire: 当设置开启同名依赖，模板会依赖同名css、js；js 会依赖同名 css，不需要显式引用。合并link链接
 *     expect: ['','']  不想被压缩的
 *
 *
 * === qustion ===
 *    ignore文件，如果有链接指向，或被依赖关系存在，就会重新输出；同名依赖？是否组件？
 *    不输出组件，已打包过的文件？
 *    压缩影响注释、封号结果
 *    加入依赖文件，才能打包
 *
 */
// components下的 js 调用 jswrapper 进行自动化组件化封装
fis.match('/components/**/*.js', {
    postprocessor: fis.plugin('jswrapper', {
        type: 'commonjs'
    })
});