//======== 设置项目属性
//fis.set('project.files', ['*.html', 'map.json', '/test/*']);
fis.set('project.ignore', ['*.bak', '**.test.js', '*.psd', '.git/**', '/components/**', '/bower_components/**']); // set 为覆盖不是叠加
fis.set('project.md5Length', 9);
fis.set('project.md5Connector ', '.');
fis.set('project.name', 'yhtml5');
fis.set('project.static', '/static');

// 引入模块化开发插件，设置规范为 commonJs 规范。

//fis.hook('commonjs', {
//  baseUrl: './modules',
//  extList: ['.js', '.es']
//});

/*************************目录规范*****************************/

// 开启同名依赖
//fis.match('/modules/**', {
//  useSameNameRequire: true
//});

// ------ 配置lib
fis.match('/lib/**.js', {
    release: '${project.static}/$&'
});

// ------ 配置components
fis.match('/components/**', {
    release: '${project.static}/$&'
});
fis.match('/components/**.css', {
    isMod: true,
    release: '${project.static}/$&'
});
fis.match('/components/**.js', {
    isMod: true,
    release: '${project.static}/$&'
});

// ------ 配置modules
fis.match('/modules/(**)', {
    release: '${project.static}/$1'
})

// 配置css
fis.match(/^\/modules\/(.*\.scss)$/i, {
    rExt: '.css',
    isMod: true,
    release: '${project.static}/$1',
    parser: fis.plugin('sass', {
        include_paths: ['modules/css', 'components'] // 加入文件查找目录
    }),
    postprocessor: fis.plugin('autoprefixer', {
        browsers: ['> 1% in CN', "last 2 versions", "IE >= 8"] // pc
            // browsers: ["Android >= 4", "ChromeAndroid > 1%", "iOS >= 6"] // wap
    })
});
fis.match(/^\/modules\/(.*\.css)$/i, {
    isMod: true,
    release: '${project.static}/$1',
    postprocessor: fis.plugin('autoprefixer', {
        browsers: ['> 1% in CN', "last 2 versions", "IE >= 8"] // pc
            // browsers: ["Android >= 4", "ChromeAndroid > 1%", "iOS >= 6"] // wap
    })
})
fis.match(/^\/modules\/(.*\.(?:png|jpg|gif))$/i, {
    release: '${project.static}/$1'
});

// 配置js
fis.match(/^\/modules\/(.*\.es)$/i, {
    parser: fis.plugin('babel-5.x'),
    rExt: 'js',
    isMod: true,
    release: '${project.static}/$1'
});
fis.match(/^\/modules\/(.*\.js)$/i, {
    isMod: true,
    release: '${project.static}/$1'
});

// ------ 配置前端模版 使用template.js
fis.match('**.tmpl', {
    parser: fis.plugin('template', {
        sTag: '<#',
        eTag: '#>',
        global: 'template'
    }),
    isJsLike: true,
    release: false
});

// ------ 配置模拟数据
fis.match('/test/**', {
    release: '$0'
});
fis.match('/test/server.conf', {
    release: '/config/server.conf'
});

/*************************打包规范*****************************/

// 因为是纯前端项目，依赖不能自断被加载进来，所以这里需要借助一个 loader 来完成，
// 注意：与后端结合的项目不需要此插件!!!
// npm install [-g] fis3-postpackager-loader
// 分析 {
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
            "uri": "./static/index_b5c3bee9f.css",
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
            "uri": "./static/index_2b5bc5809.js",
            "type": "js",
            "has": [
                "server/author.js",
                "components/js/ctrl.js",
                "components/js/router.js",
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
} 结构，来解决资源加载问题
fis.match('::package', {
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true // 资源映射表内嵌
    })
});

// 公用js
var map = {
    'prd-debug': {
        host: '',
        path: ''
    },
    'prd': {
        host: 'http://yanhaijing.com',
        path: '/${project.name}'
    }
};

fis.util.map(map, function(k, v) {
    var domain = v.host + v.path;
    fis.media(k)
        .match('**.{es,js}', {
            useHash: true,
            domain: domain
        })
        .match('**.{scss,css}', {
            useSprite: true,
            useHash: true,
            domain: domain
        })
        .match('::image', {
            useHash: true,
            domain: domain
        })
        .match('**/(*_{x,y,z}.png)', {
            release: '/pkg/$1'
        })
        // 启用打包插件，必须匹配 ::package
        .match('::package', {
            spriter: fis.plugin('csssprites', {
                layout: 'matrix',
                // scale: 0.5, // 移动端二倍图用
                margin: '10'
            }),
            postpackager: fis.plugin('loader', {
                allInOne: true,
            })
        })
        .match('/lib/es5-{shim,sham}.js', {
            packTo: '/pkg/es5-shim.js'
        })
        .match('/components/**.css', {
            packTo: '/pkg/components.css'
        })
        .match('/components/**.js', {
            packTo: '/pkg/components.js'
        })
        .match('/modules/**.{scss,css}', {
            packTo: '/pkg/modules.css'
        })
        .match('/modules/css/**.{scss,css}', {
            packTo: ''
        })
        .match('/modules/css/common.scss', {
            packTo: '/pkg/common.css'
        })
        .match('/modules/**.{es,js}', {
            packTo: '/pkg/modules.js'
        })
        .match('/modules/app/**.{es,js}', {
            packTo: '/pkg/aio.js'
        })
});

// 发布产品库
fis.media('prd')
    .match('**.{es,js}', {
        optimizer: fis.plugin('uglify-js')
    })
    .match('**.{scss,css}', {
        optimizer: fis.plugin('clean-css', {
            'keepBreaks': true //保持一个规则一个换行
        })
    });