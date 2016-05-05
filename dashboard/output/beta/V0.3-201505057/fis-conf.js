/*
 *    "/"为绝对路径,  "./"相对当前目录， "../"上级目录
 *
 */

// 设置项目属性
fis.set('project.name', 'yhtml5-fis3');
fis.set('project.md5Length', 8);
fis.set('project.md5Connector ', '_');
//fis.set("project.ignore", ['test2/**', '.git/**', 'fis-conf.js', 'design/**', 'task/**', '*.psd', 'components/font-icon/**', '**.svg']);
//文件一定要精确
//fis.match('/components/**/(*.png)', {
//	release: '/static/img/$1',
//	url: '../static/img/$1'
//});
//fis.match('/components/**/(iconfont.*)', {
//	release: '/static/iconfont/$1',
//	//	url: '../static/iconfont/$1'
//})
//去掉依赖声明文本
//fis.match('*.html', {
//		optimizer: (function(content) {
//			return content.replace(/<!--([\s\s]*?)-->/g, "")
//		})
//	})

// components下的 js 调用 jswrapper 进行自动化组件化封装
//fis.match('/components/**/*.js', {
//	postprocessor: fis.plugin('jswrapper', {
//		type: 'commonjs'
//	})

//});

/**************************Beta******************************/
fis.media('beta')
    .set("project.ignore", ['/components/version/**', '**/**.test.js', '*.psd', '.git/**', '/components/**/demo.*', '/bower_components/**'])
    .match('::package', {
        // npm install [-g] fis3-postpackager-loader
        // 分析 {
    "res": {
        "app.js": {
            "uri": "/app.js",
            "type": "js",
            "deps": [
                "bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js",
                "bower_components/angular/angular.js",
                "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
                "bower_components/angular-animate/angular-animate.js",
                "bower_components/angular-ui-router/release/angular-ui-router.js",
                "bower_components/angular-ui-select/dist/select.js"
            ],
            "pkg": "p0"
        },
        "bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js": {
            "uri": "/bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js",
            "type": "js"
        },
        "bower_components/angular/angular.js": {
            "uri": "/bower_components/angular/angular.js",
            "type": "js"
        },
        "bower_components/angular-bootstrap/ui-bootstrap-tpls.js": {
            "uri": "/bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
            "type": "js"
        },
        "bower_components/angular-animate/angular-animate.js": {
            "uri": "/bower_components/angular-animate/angular-animate.js",
            "type": "js"
        },
        "bower_components/angular-ui-router/release/angular-ui-router.js": {
            "uri": "/bower_components/angular-ui-router/release/angular-ui-router.js",
            "type": "js"
        },
        "bower_components/angular-ui-select/dist/select.js": {
            "uri": "/bower_components/angular-ui-select/dist/select.js",
            "type": "js"
        },
        "components/appList-add/appList-add.css": {
            "uri": "/components/appList-add/appList-add.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p1"
        },
        "components/head/head.css": {
            "uri": "/components/head/head.css",
            "type": "css",
            "deps": [
                "bower_components/bootstrap/dist/css/bootstrap.css",
                "components/iconfont/iconfont.css"
            ],
            "pkg": "p1"
        },
        "bower_components/bootstrap/dist/css/bootstrap.css": {
            "uri": "/bower_components/bootstrap/dist/css/bootstrap.css",
            "type": "css"
        },
        "components/iconfont/iconfont.css": {
            "uri": "./static/iconfont/iconfont.css",
            "type": "css",
            "pkg": "p1"
        },
        "components/iconfont/iconfont.eot": {
            "uri": "./static/iconfont/iconfont.eot",
            "type": "eot"
        },
        "components/iconfont/iconfont.woff": {
            "uri": "./static/iconfont/iconfont.woff",
            "type": "woff"
        },
        "components/iconfont/iconfont.ttf": {
            "uri": "./static/iconfont/iconfont.ttf",
            "type": "ttf"
        },
        "components/iconfont/iconfont.svg": {
            "uri": "./static/iconfont/iconfont.svg",
            "type": "svg"
        },
        "components/appList-add/appList-add.html": {
            "uri": "/components/appList-add/appList-add.html",
            "type": "html",
            "deps": [
                "components/appList-add/appList-add.css"
            ]
        },
        "components/appList-display/appList-display.css": {
            "uri": "/components/appList-display/appList-display.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p1"
        },
        "components/appList-display/appList-display.html": {
            "uri": "/components/appList-display/appList-display.html",
            "type": "html",
            "deps": [
                "components/appList-display/appList-display.css"
            ]
        },
        "components/head/head.html": {
            "uri": "/components/head/head.html",
            "type": "html",
            "deps": [
                "components/head/head.css"
            ]
        },
        "components/head/shortcut-icon.png": {
            "uri": "./static/img/shortcut-icon.png",
            "type": "png"
        },
        "components/helpCenter/helpCenter.css": {
            "uri": "/components/helpCenter/helpCenter.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p1"
        },
        "components/helpCenter/helpCenter.html": {
            "uri": "/components/helpCenter/helpCenter.html",
            "type": "html",
            "deps": [
                "components/helpCenter/helpCenter.css"
            ]
        },
        "components/nav/logo-sdk.png": {
            "uri": "./static/img/logo-sdk.png",
            "type": "png"
        },
        "components/nav/nav.css": {
            "uri": "/components/nav/nav.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p1"
        },
        "components/nav/nav.html": {
            "uri": "/components/nav/nav.html",
            "type": "html",
            "deps": [
                "components/nav/nav.js",
                "components/nav/nav.css"
            ]
        },
        "components/nav/nav.js": {
            "uri": "/components/nav/nav.js",
            "type": "js",
            "deps": [
                "app.js",
                "components/nav/nav.css"
            ],
            "pkg": "p0"
        },
        "components/public/ctrl.js": {
            "uri": "/components/public/ctrl.js",
            "type": "js",
            "deps": [
                "app.js"
            ],
            "pkg": "p0"
        },
        "components/public/girl.gif": {
            "uri": "./static/img/girl.gif",
            "type": "gif"
        },
        "components/serviceAgreement/serviceAgreement.html": {
            "uri": "/components/serviceAgreement/serviceAgreement.html",
            "type": "html"
        },
        "components/userPanel/userPanel.html": {
            "uri": "/components/userPanel/userPanel.html",
            "type": "html"
        },
        "fis-conf.js": {
            "uri": "/fis-conf.js",
            "type": "js"
        },
        "view/account.detail/account.detail.html": {
            "uri": "/view/account.detail/account.detail.html",
            "type": "html"
        },
        "view/account.record/account.record.html": {
            "uri": "/view/account.record/account.record.html",
            "type": "html"
        },
        "view/account.topay/account.topay.html": {
            "uri": "/view/account.topay/account.topay.html",
            "type": "html"
        },
        "view/account.withdraw/account.withdraw.html": {
            "uri": "/view/account.withdraw/account.withdraw.html",
            "type": "html"
        },
        "view/account/account.css": {
            "uri": "/view/account/account.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p1"
        },
        "view/account/account.ctrl.js": {
            "uri": "/view/account/account.ctrl.js",
            "type": "js",
            "deps": [
                "app.js"
            ],
            "pkg": "p0"
        },
        "view/account/account.html": {
            "uri": "/view/account/account.html",
            "type": "html",
            "deps": [
                "view/account/account.ctrl.js",
                "view/account/account.css"
            ]
        },
        "view/appList/appList.html": {
            "uri": "/view/appList/appList.html",
            "type": "html",
            "deps": [
                "components/appList-display/appList-display.css",
                "components/appList-add/appList-add.css",
                "view/appList/appList.js"
            ]
        },
        "view/appList/appList.js": {
            "uri": "/view/appList/appList.js",
            "type": "js",
            "deps": [
                "app.js"
            ],
            "pkg": "p0"
        },
        "view/appsetting.api/appsetting.api.html": {
            "uri": "/view/appsetting.api/appsetting.api.html",
            "type": "html"
        },
        "view/appsetting.canal/appsetting.canal.html": {
            "uri": "/view/appsetting.canal/appsetting.canal.html",
            "type": "html"
        },
        "view/appsetting.channel/appsetting.channel.html": {
            "uri": "/view/appsetting.channel/appsetting.channel.html",
            "type": "html"
        },
        "view/appsetting.info/appsetting.info.html": {
            "uri": "/view/appsetting.info/appsetting.info.html",
            "type": "html"
        },
        "view/appsetting/appsetting.ctrl.js": {
            "uri": "/view/appsetting/appsetting.ctrl.js",
            "type": "js",
            "deps": [
                "app.js"
            ],
            "pkg": "p0"
        },
        "view/appsetting/appsetting.html": {
            "uri": "/view/appsetting/appsetting.html",
            "type": "html",
            "deps": [
                "view/appsetting/appsetting.ctrl.js"
            ]
        },
        "view/authentication.account/authentication.account.html": {
            "uri": "/view/authentication.account/authentication.account.html",
            "type": "html"
        },
        "view/authentication.agreement/authentication.agreement.html": {
            "uri": "/view/authentication.agreement/authentication.agreement.html",
            "type": "html"
        },
        "view/authentication.company/authentication.company.html": {
            "uri": "/view/authentication.company/authentication.company.html",
            "type": "html"
        },
        "view/authentication.person/authentication.person.html": {
            "uri": "/view/authentication.person/authentication.person.html",
            "type": "html"
        },
        "view/authentication.person/girl.gif": {
            "uri": "/view/authentication.person/girl.gif",
            "type": "gif"
        },
        "view/authentication/authentication.ctrl.js": {
            "uri": "/view/authentication/authentication.ctrl.js",
            "type": "js",
            "deps": [
                "app.js"
            ],
            "pkg": "p0"
        },
        "view/authentication/authentication.html": {
            "uri": "/view/authentication/authentication.html",
            "type": "html",
            "deps": [
                "view/authentication/authentication.ctrl.js"
            ]
        },
        "view/footer/footer.html": {
            "uri": "/view/footer/footer.html",
            "type": "html"
        },
        "view/nav-app/nav-app.html": {
            "uri": "/view/nav-app/nav-app.html",
            "type": "html",
            "deps": [
                "components/helpCenter/helpCenter.css"
            ]
        },
        "view/nav-authentication/nav-authentication.html": {
            "uri": "/view/nav-authentication/nav-authentication.html",
            "type": "html",
            "deps": [
                "components/helpCenter/helpCenter.css"
            ]
        },
        "view/nav-main/nav-main.html": {
            "uri": "/view/nav-main/nav-main.html",
            "type": "html",
            "deps": [
                "components/helpCenter/helpCenter.css"
            ]
        },
        "view/noteSimple/noteSimple.html": {
            "uri": "/view/noteSimple/noteSimple.html",
            "type": "html"
        },
        "view/payment/nav-main.js": {
            "uri": "/view/payment/nav-main.js",
            "type": "js",
            "deps": [
                "app.js"
            ],
            "pkg": "p0"
        },
        "view/payment/payment.html": {
            "uri": "/view/payment/payment.html",
            "type": "html"
        },
        "view/smsConfirm/smsConfirm.html": {
            "uri": "/view/smsConfirm/smsConfirm.html",
            "type": "html"
        },
        "view/undeveloped/undeveloped.html": {
            "uri": "/view/undeveloped/undeveloped.html",
            "type": "html"
        },
        "view/user.account/user.account.html": {
            "uri": "/view/user.account/user.account.html",
            "type": "html"
        },
        "view/user.agreement/user.agreement.html": {
            "uri": "/view/user.agreement/user.agreement.html",
            "type": "html"
        },
        "view/user.data/user.data.html": {
            "uri": "/view/user.data/user.data.html",
            "type": "html"
        },
        "view/user.password/user.password.html": {
            "uri": "/view/user.password/user.password.html",
            "type": "html"
        },
        "view/user.person/user.person.html": {
            "uri": "/view/user.person/user.person.html",
            "type": "html"
        },
        "view/user/user.ctrl.js": {
            "uri": "/view/user/user.ctrl.js",
            "type": "js",
            "deps": [
                "app.js"
            ],
            "pkg": "p0"
        },
        "view/user/user.html": {
            "uri": "/view/user/user.html",
            "type": "html",
            "deps": [
                "view/user/user.ctrl.js"
            ]
        }
    },
    "pkg": {
        "p0": {
            "uri": ".//static/yhtml5_e70e521a.js",
            "type": "js",
            "has": [
                "app.js",
                "view/account/account.ctrl.js",
                "view/appList/appList.js",
                "view/appsetting/appsetting.ctrl.js",
                "view/authentication/authentication.ctrl.js",
                "view/payment/nav-main.js",
                "view/user/user.ctrl.js",
                "components/nav/nav.js",
                "components/public/ctrl.js"
            ],
            "deps": [
                "bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js",
                "bower_components/angular/angular.js",
                "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
                "bower_components/angular-animate/angular-animate.js",
                "bower_components/angular-ui-router/release/angular-ui-router.js",
                "bower_components/angular-ui-select/dist/select.js",
                "components/nav/nav.css"
            ]
        },
        "p1": {
            "uri": ".//static/yhtml5_fe38506f.css",
            "type": "css",
            "has": [
                "components/iconfont/iconfont.css",
                "components/head/head.css",
                "view/account/account.css",
                "components/appList-add/appList-add.css",
                "components/appList-display/appList-display.css",
                "components/helpCenter/helpCenter.css",
                "components/nav/nav.css"
            ],
            "deps": [
                "bower_components/bootstrap/dist/css/bootstrap.css"
            ]
        }
    }
} 结构，来解决资源加载问题
        postpackager: fis.plugin('loader', {
            //allInOne: true, 默认 false, 配置是否合并零碎资源。
            resourceType: 'commonJs',
            useInlineMap: true, // 资源映射表内嵌
        })
    })
    // components源码目录下的资源被标注为组件,合并link链接
    .match('{/components/**,/view/**}', {
        isMod: true,
        useSameNameRequire: true,
    })
    .match('{/components/**/(*.gif),/components/**/(*.png)}', {
        release: 'static/img/$1',
        url: './static/img/$1',
    })
    .match('/components/**/(iconfont.*)', {
        release: 'static/iconfont/$1',
        url: './static/iconfont/$1'
    })
    .match('::package', {
        packager: fis.plugin('map'),
        spriter: fis.plugin('csssprites', {
            layout: 'matrix',
            margin: '15'
        })
    })
    .match('{/app.js,/components/**/*.js,/view/**/*.js}', {
        packTo: 'static/yhtml5.js'
    })
    .match('{/components/**/*.css,/view/**/*.css}', {
        packTo: 'static/yhtml5.css'
    })
    .match('head/**', {
        packOrder: 0
    })
    .match('header/**', {
        packOrder: 2
    })
    .match('components/*/*', {
        packOrder: 3
    })
    .match('footer/**', {
        packOrder: 9
    })
    .match('/static/{*.js,*css}', {
        release: '$0',
        url: './$0',
        useHash: true
    });
//因为html文件在template文件夹下，且是相对路径，所以需要更改资源url
//js里的资源定位需要加上__url()
//	.match('{/static/**,/server/**}', {
//		url: '..$0'
//	});
/*************************java模板*****************************/
/*
 *要求：包含编译后的demo、template、reademe
 *      文件路径为绝对路径
 *
 */

fis.media('java')
    .set("project.ignore", ['*.psd', '.git/**'])
    .match('::package', {
        postpackager: fis.plugin('loader', {
            resourceType: 'commonJs',
            useInlineMap: true,
        })
    })
    .match('::package', {
        packager: fis.plugin('map'),
        spriter: fis.plugin('csssprites', {
            layout: 'matrix',
            margin: '15'
        })
    })
    .match('/components/**/*', {
        isMod: true,
        useSameNameRequire: true,
    })
    //java 不打包、不发布的文件,后面的规则会覆盖前面的
    //和__url()冲突
    .match('{/static/lib/angular/**,/server/**}', {
        release: false
    })
    .match('/template/(**.html)', {
        release: '/demo/$1',
    })
    .match('{*.log,map.json}', {
        release: '/config/$0'
    })
    .match('Reademe.html', {
        release: '/$0',
    })
    .match('/components/(**)', {
        release: 'others/$1',
    })
    .match('/components/*/(*.html)', {
        release: '/widget/$1',
    })
    .match('{/components/**/(*.gif),/components/**/(*.png)}', {
        release: '/static/img/$1',
        url: '../static/img/$1',
    })
    .match('/components/**/(iconfont.*)', {
        release: '/static/iconfont/$1',
        url: '../static/iconfont/$1'
    })
    .match('/components/**/*.js', {
        packTo: '/static/yhtml5.js'
    })
    .match('/components/**/*.css', {
        packTo: '/static/yhtml5.css'
    })
    .match('head/**', {
        packOrder: 0
    })
    .match('header/**', {
        packOrder: 2
    })
    .match('components/*/*', {
        packOrder: 3
    })
    .match('footer/**', {
        packOrder: 9
    })
    .match('/static/{*.js,*css}', {
        release: '/$0',
        useHash: true
    })
    .match('/static/**', {
        url: '..$0'
    });
/**********************Production规范**************************/
// 因为是纯前端项目，依赖不能自断被加载进来，所以这里需要借助一个 loader 来完成，
// 注意：与后端结合的项目不需要此插件!!!

fis.media('pro')
    // 启用打包插件，必须匹配 ::package
    .match('::package', {
        packager: fis.plugin('map'),
        spriter: fis.plugin('csssprites', {
            layout: 'matrix',
            margin: '15'
        })
    })
    .match('/components/**/*.js', {
        packTo: '/static/yhtml5.js'
    })
    .match('/components/**/*.css', {
        packTo: '/static/yhtml5.css'
    })
    .match('conmon/**', {
        packOrder: 1
    })
    .match('header/**', {
        packOrder: 2
    })
    .match('footer/**', {
        packOrder: 3
    })
    .match('/static/{*.js,*css}', {
        release: '/$0',
        url: '..$0',
        useHash: true
    });

/*************************CDN规范*****************************/
// optimize
fis.media('cdn')
    .match('*.js', {
        optimizer: fis.plugin('uglify-js', {
            mangle: {
                expect: ['require', 'define', 'some string'] //不想被压的
            }
        })
    })
    .match('*.css', {
        optimizer: fis.plugin('clean-css', {
            'keepBreaks': false, //保持一个规则一个换行
            useSprite: true // 给匹配到的文件分配属性 `useSprite`
        })
    })
    .match('*.{jpg,png}', {
        useHash: true
    });

// pack
fis.media('cdn')
    // 启用打包插件，必须匹配 ::package
    .match('::package', {
        packager: fis.plugin('map'),
        spriter: fis.plugin('csssprites', {
            layout: 'matrix',
            margin: '15'
        })
    })
    .match('*.js', {
        packTo: '/static/others.js'
    })
    .match('*.css', {
        packTo: '/staitc/others.css'
    })
    .match('/components/**/*.js', {
        packTo: '/static/yhtml5.js'
    })
    .match('/components/**/*.css', {
        packTo: '/static/yhtml5.css'
    });