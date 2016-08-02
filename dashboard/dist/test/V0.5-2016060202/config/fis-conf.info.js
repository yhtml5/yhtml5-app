/*
 * === fis3 ===
 *    fis.set设置项目属性
 *    fis.set("project.ignore", ['**', '**',]); 忽略的文件
 *    安装插件 npm install [-g] fis3-postpackager-loader
 *    fis3-postpackager-loader 分析 {
    "res": {
        "fis-conf.demo.js": {
            "uri": "/config/fis-conf.demo.js",
            "type": "js"
        },
        "fis-conf.info.js": {
            "uri": "/config/fis-conf.info.js",
            "type": "js"
        },
        "fis-conf.js": {
            "uri": "/config/fis-conf.js",
            "type": "js"
        },
        "server/author.css": {
            "uri": "/server/author.css",
            "type": "css",
            "pkg": "p0"
        },
        "bower_components/html5-boilerplate/dist/css/normalize.css": {
            "uri": "/static/lib/normalize.css",
            "type": "css",
            "pkg": "p1"
        },
        "bower_components/html5-boilerplate/dist/css/main.css": {
            "uri": "/static/lib/main.css",
            "type": "css",
            "pkg": "p1"
        },
        "bower_components/bootstrap/dist/css/bootstrap.css": {
            "uri": "/static/lib/bootstrap.css",
            "type": "css",
            "pkg": "p1"
        },
        "components/iconfont/iconfont.css": {
            "uri": "./iconfont/iconfont.css",
            "type": "css",
            "pkg": "p0"
        },
        "components/css/cover.css": {
            "uri": "/static/components/css/cover.css",
            "type": "css",
            "deps": [
                "bower_components/bootstrap/dist/css/bootstrap.css"
            ],
            "pkg": "p0"
        },
        "components/css/bootstrap.ex.css": {
            "uri": "/static/components/css/bootstrap.ex.css",
            "type": "css",
            "pkg": "p0"
        },
        "components/css/animation.css": {
            "uri": "/static/components/css/animation.css",
            "type": "css",
            "pkg": "p0"
        },
        "components/css/custom.css": {
            "uri": "/static/components/css/custom.css",
            "type": "css",
            "pkg": "p0"
        },
        "components/css/base.css": {
            "uri": "/static/components/css/base.css",
            "type": "css",
            "pkg": "p0"
        },
        "components/css/box.css": {
            "uri": "/static/components/css/box.css",
            "type": "css",
            "pkg": "p0"
        },
        "components/css/account.css": {
            "uri": "/static/components/css/account.css",
            "type": "css",
            "pkg": "p0"
        },
        "components/nav/nav.css": {
            "uri": "/static/components/nav/nav.css",
            "type": "css",
            "deps": [
                "../head/head.css"
            ],
            "pkg": "p0"
        },
        "components/appList-add/appList-add.css": {
            "uri": "/static/components/appList-add/appList-add.css",
            "type": "css",
            "deps": [
                "../head/head.css"
            ],
            "pkg": "p0"
        },
        "components/appList-display/appList-display.css": {
            "uri": "/static/components/appList-display/appList-display.css",
            "type": "css",
            "pkg": "p0"
        },
        "components/helpCenter/helpCenter.css": {
            "uri": "/static/components/helpCenter/helpCenter.css",
            "type": "css",
            "deps": [
                "../head/head.css"
            ],
            "pkg": "p0"
        },
        "server/author.js": {
            "uri": "/server/author.js",
            "type": "js",
            "pkg": "p2"
        },
        "bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js": {
            "uri": "/static/lib/modernizr-2.8.3.min.js",
            "type": "js",
            "pkg": "p3"
        },
        "bower_components/angular/angular.js": {
            "uri": "/static/lib/angular.js",
            "type": "js",
            "pkg": "p3"
        },
        "bower_components/angular-bootstrap/ui-bootstrap-tpls.js": {
            "uri": "/static/lib/ui-bootstrap-tpls.js",
            "type": "js",
            "pkg": "p3"
        },
        "bower_components/angular-animate/angular-animate.js": {
            "uri": "/static/lib/angular-animate.js",
            "type": "js",
            "pkg": "p3"
        },
        "bower_components/angular-ui-router/release/angular-ui-router.js": {
            "uri": "/static/lib/angular-ui-router.js",
            "type": "js",
            "pkg": "p3"
        },
        "bower_components/angular-ui-select/dist/select.js": {
            "uri": "/static/lib/select.js",
            "type": "js",
            "pkg": "p3"
        },
        "bower_components/ng-file-upload/ng-file-upload.js": {
            "uri": "/static/lib/ng-file-upload.js",
            "type": "js",
            "pkg": "p3"
        },
        "bower_components/ng-file-upload-shim/ng-file-upload-shim.js": {
            "uri": "/static/lib/ng-file-upload-shim.js",
            "type": "js",
            "pkg": "p3"
        },
        "components/js/router.js": {
            "uri": "/static/components/js/router.js",
            "type": "js",
            "deps": [
                "components/js/ctrl.js",
                "bower_components/angular-ui-router/release/angular-ui-router.js"
            ],
            "pkg": "p2"
        },
        "components/js/ctrl.js": {
            "uri": "/static/components/js/ctrl.js",
            "type": "js",
            "deps": [
                "components/js/router.js"
            ],
            "pkg": "p2"
        },
        "components/js/factory.js": {
            "uri": "/static/components/js/factory.js",
            "type": "js",
            "pkg": "p2"
        },
        "components/js/directive.js": {
            "uri": "/static/components/js/directive.js",
            "type": "js",
            "pkg": "p2"
        },
        "view/nav/nav.ctrl.js": {
            "uri": "/view/nav/nav.ctrl.js",
            "type": "js",
            "deps": [
                "components/js/ctrl.js"
            ],
            "pkg": "p2"
        },
        "view/account/account.ctrl.js": {
            "uri": "/view/account/account.ctrl.js",
            "type": "js",
            "pkg": "p2"
        },
        "view/appList/appList.ctrl.js": {
            "uri": "/view/appList/appList.ctrl.js",
            "type": "js",
            "pkg": "p2"
        },
        "view/appsetting/appsetting.ctrl.js": {
            "uri": "/view/appsetting/appsetting.ctrl.js",
            "type": "js",
            "pkg": "p2"
        },
        "view/authentication/authentication.ctrl.js": {
            "uri": "/view/authentication/authentication.ctrl.js",
            "type": "js",
            "pkg": "p2"
        },
        "view/user/user.ctrl.js": {
            "uri": "/view/user/user.ctrl.js",
            "type": "js",
            "pkg": "p2"
        },
        "server/head.css": {
            "uri": "/server/head.css",
            "type": "css",
            "deps": [
                "../../bower_components/html5-boilerplate/dist/css/normalize.css",
                "../../bower_components/html5-boilerplate/dist/css/main.css",
                "../../bower_components/bootstrap/dist/css/bootstrap.css",
                "../iconfont/iconfont.css"
            ]
        },
        "view/payment/payment.js": {
            "uri": "/view/payment/payment.js",
            "type": "js",
            "pkg": "p2"
        }
    },
    "pkg": {
        "p0": {
            "uri": "./static/index_0e79c88ea.css",
            "type": "css",
            "has": [
                "server/author.css",
                "components/iconfont/iconfont.css",
                "components/css/cover.css",
                "components/css/bootstrap.ex.css",
                "components/css/animation.css",
                "components/css/custom.css",
                "components/css/base.css",
                "components/css/box.css",
                "components/css/account.css",
                "components/nav/nav.css",
                "components/appList-add/appList-add.css",
                "components/appList-display/appList-display.css",
                "components/helpCenter/helpCenter.css"
            ],
            "deps": [
                "bower_components/bootstrap/dist/css/bootstrap.css",
                "../head/head.css"
            ]
        },
        "p1": {
            "uri": "./static/yhtml5_fe8a4074d.css",
            "type": "css",
            "has": [
                "bower_components/html5-boilerplate/dist/css/normalize.css",
                "bower_components/html5-boilerplate/dist/css/main.css",
                "bower_components/bootstrap/dist/css/bootstrap.css"
            ]
        },
        "p2": {
            "uri": "./static/index_df9e80e76.js",
            "type": "js",
            "has": [
                "server/author.js",
                "components/js/ctrl.js",
                "components/js/router.js",
                "components/js/factory.js",
                "components/js/directive.js",
                "view/nav/nav.ctrl.js",
                "view/account/account.ctrl.js",
                "view/appList/appList.ctrl.js",
                "view/appsetting/appsetting.ctrl.js",
                "view/authentication/authentication.ctrl.js",
                "view/user/user.ctrl.js",
                "view/payment/payment.js"
            ],
            "deps": [
                "bower_components/angular-ui-router/release/angular-ui-router.js"
            ]
        },
        "p3": {
            "uri": "./static/yhtml5_e1c135248.js",
            "type": "js",
            "has": [
                "bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js",
                "bower_components/angular/angular.js",
                "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
                "bower_components/angular-animate/angular-animate.js",
                "bower_components/angular-ui-router/release/angular-ui-router.js",
                "bower_components/angular-ui-select/dist/select.js",
                "bower_components/ng-file-upload/ng-file-upload.js",
                "bower_components/ng-file-upload-shim/ng-file-upload-shim.js"
            ]
        }
    }
} 结构，来解决资源加载问题？
 *    media 默认为dev
 *    fis配置都是相对于fis-conf.js文件的绝对定位
 *
 *
 * === path ===
 *    "/"为绝对路径,  "./"相对当前目录， "../"上级目录
 *    $0 代表的是 match 到的整个字符串
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
 *
 */
// components下的 js 调用 jswrapper 进行自动化组件化封装
fis.match('/components/**/*.js', {
    postprocessor: fis.plugin('jswrapper', {
        type: 'commonjs'
    })
});
// 处理依赖关系，加载依赖资源,只有被依赖才能加载，
postpackager: fis.plugin('loader', {
    resourceType: 'commonJs',
    useInlineMap: true,
})