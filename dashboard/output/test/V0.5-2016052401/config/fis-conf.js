//======== 设置项目属性 set为覆盖不是叠加
fis.set('project.md5Length', 9);
fis.set('project.md5Connector ', '_');
fis.set('project.name', 'yhtml5');
fis.set('project.static', '/static');
fis.set('project.ignore', ['**/*.test.js', '*.psd', '.git/**', '/components/**', '/bower_components/**']);

/*************************目录规范*****************************/
//fis.match('**.**', {
//  useCache: false
//});
fis.match('{/components/**,/bower_components/**}', {
    release: '${project.static}/$&'
});
fis.match('/components/**/(*.{png,gif,jpg,jpeg})', {
    release: '${project.static}/img/$1'
});
fis.match('/components/**/(iconfont.*)', {
    release: '${project.static}/iconfont/$1',
    url:'/iconfont/$1'//本地打开路径 整合到 local
});
fis.match('/bower_components/**/(*.{js,css})', {
    release: '${project.static}/lib/$1'
});
fis.match('/bower_components/**/fonts/(**)', {
    release: '${project.static}/lib/$1'
});
fis.match('{/components/**/*.css,/components/**/*.js}', {
    release: '${project.static}/$&'
});
fis.match('{/map.json,fis-conf.*}', {
    release: '/config/$0'
});
/*************************打包规范*****************************/

// 因为是纯前端项目，依赖不能自断被加载进来，所以这里需要借助一个 loader 来完成，
// 注意：与后端结合的项目不需要此插件!!!
// npm install [-g] fis3-postpackager-loader
fis.match('::package', {
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true // 资源映射表内嵌,分析 {
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
    })
})
fis.match('/bower_components/**/*.js', {
    packTo: '${project.static}/yhtml5.js',
})
fis.match('{/server/author.js,/components/**/*.js,/view/**/*.js}', {
    packTo: '${project.static}/index.js'
})
fis.match('/bower_components/**/*.css', {
    packTo: '${project.static}/yhtml5.css'
})
fis.match('{/server/author.css,/components/**/*.css}', {
    packTo: '${project.static}/index.css'
})
fis.match('{/static/**,/components/**/*.{png,gif,jpg,jpeg}}', {
    useHash: true
})
fis.match('{/static/**,/components/**/*.{png,gif,jpg,jpeg},/components/**/(iconfont.*)}', {
    domain: '.'
});
/*************************CDN规范*****************************/

// optimize
fis.media('pro')
    .match('::package', {
        packager: fis.plugin('map'),
        spriter: fis.plugin('csssprites', {
            layout: 'matrix',
            margin: '15'
        })
    })
    .match('{/static/**,**.{gif,png}}', {
        useHash: true
    })
    .match('*.css', {
        optimizer: fis.plugin('clean-css', {
            'keepBreaks': false,
            useSprite: true
        })
    })
    .match('*.js', {
        optimizer: fis.plugin('uglify-js', {
            mangle: {
                expect: ['require', 'define', 'some string']
            }
        })
    })
    //去掉依赖声明文本
    .match('*.html', {
        optimizer: (function(content) {
            return content.replace(/<!--([\s\s]*?)-->/g, "")
        })
    })