// 设置项目属性
fis.set('project.name', 'yhtml5-fis3');
fis.set('project.md5Length', 8);
fis.set('project.md5Connector ', '_');
//fis.set("project.ignore", ['test2/**', '.git/**', 'fis-conf.js', 'design/**', 'task/**', '*.psd', 'components/font-icon/**', '**.svg']);

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
	.set("project.ignore", ['*.psd', '.git/**'])
	.match('::package', {
		// npm install [-g] fis3-postpackager-loader
		// 分析 {
    "res": {
        "components/account copy/account.css": {
            "uri": "/components/account copy/account.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p0"
        },
        "components/head/head.css": {
            "uri": "/components/head/head.css",
            "type": "css",
            "deps": [
                "static/lib/bootstrap/bootstrap.css"
            ],
            "pkg": "p0"
        },
        "static/lib/bootstrap/bootstrap.css": {
            "uri": "../static/lib/bootstrap/bootstrap.css",
            "type": "css"
        },
        "components/head/iconfont.eot": {
            "uri": "../static/iconfont/iconfont.eot",
            "type": "eot"
        },
        "components/head/iconfont.woff": {
            "uri": "../static/iconfont/iconfont.woff",
            "type": "woff"
        },
        "components/head/iconfont.ttf": {
            "uri": "../static/iconfont/iconfont.ttf",
            "type": "ttf"
        },
        "components/head/iconfont.svg": {
            "uri": "../static/iconfont/iconfont.svg",
            "type": "svg"
        },
        "components/account copy/account.html": {
            "uri": "/components/account copy/account.html",
            "type": "html",
            "deps": [
                "components/account copy/account.css"
            ]
        },
        "components/account-record/account-record.html": {
            "uri": "/components/account-record/account-record.html",
            "type": "html"
        },
        "components/account-withdraw/account-withdraw.html": {
            "uri": "/components/account-withdraw/account-withdraw.html",
            "type": "html"
        },
        "components/account-withdraw/account.css": {
            "uri": "/components/account-withdraw/account.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p0"
        },
        "components/account/account.css": {
            "uri": "/components/account/account.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p0"
        },
        "components/account/account.html": {
            "uri": "/components/account/account.html",
            "type": "html",
            "deps": [
                "components/account/account.css"
            ]
        },
        "components/undeveloped/undeveloped.html": {
            "uri": "/components/undeveloped/undeveloped.html",
            "type": "html"
        },
        "components/canal-add/canal-add.html": {
            "uri": "/components/canal-add/canal-add.html",
            "type": "html"
        },
        "components/canal-delete/canal-delete.html": {
            "uri": "/components/canal-delete/canal-delete.html",
            "type": "html"
        },
        "components/canal-reset/canal-reset.html": {
            "uri": "/components/canal-reset/canal-reset.html",
            "type": "html"
        },
        "components/canal/canal.css": {
            "uri": "/components/canal/canal.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p0"
        },
        "components/canal/canal.html": {
            "uri": "/components/canal/canal.html",
            "type": "html",
            "deps": [
                "components/canal/canal.css"
            ]
        },
        "components/dashboard-delete/dashboard-delete.html": {
            "uri": "/components/dashboard-delete/dashboard-delete.html",
            "type": "html"
        },
        "components/dashboard-header/dashboard-header.css": {
            "uri": "/components/dashboard-header/dashboard-header.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p0"
        },
        "components/dashboard-header/dashboard-header.html": {
            "uri": "/components/dashboard-header/dashboard-header.html",
            "type": "html",
            "deps": [
                "components/dashboard-header/dashboard-header.css"
            ]
        },
        "components/dashboard-header/logo-sdk.png": {
            "uri": "../static/img/logo-sdk.png",
            "type": "png"
        },
        "components/dashboard-payment/dashboard-payment.html": {
            "uri": "/components/dashboard-payment/dashboard-payment.html",
            "type": "html"
        },
        "components/dashboard-set/dashboard-set.css": {
            "uri": "/components/dashboard-set/dashboard-set.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p0"
        },
        "components/dashboard-set/dashboard-set.html": {
            "uri": "/components/dashboard-set/dashboard-set.html",
            "type": "html",
            "deps": [
                "components/dashboard-set/dashboard-set.css"
            ]
        },
        "components/footer/footer.html": {
            "uri": "/components/footer/footer.html",
            "type": "html",
            "deps": [
                "components/footer/footer.js"
            ]
        },
        "static/lib/jquery/jquery.min.js": {
            "uri": "../static/lib/jquery/jquery.min.js",
            "type": "js"
        },
        "static/lib/bootstrap/bootstrap.js": {
            "uri": "../static/lib/bootstrap/bootstrap.js",
            "type": "js",
            "deps": [
                "static/lib/jquery/jquery.min.js"
            ]
        },
        "components/public/jq-index.js": {
            "uri": "/components/public/jq-index.js",
            "type": "js",
            "deps": [
                "static/lib/bootstrap/bootstrap.js",
                "static/lib/jquery/jquery.min.js"
            ],
            "pkg": "p1"
        },
        "components/public/ng-app.js": {
            "uri": "/components/public/ng-app.js",
            "type": "js",
            "deps": [
                "components/public/jq-index.js",
                "static/lib/angular/angular.min.js"
            ],
            "pkg": "p1"
        },
        "static/lib/angular/angular.min.js": {
            "uri": "../static/lib/angular/angular.min.js",
            "type": "js"
        },
        "components/public/ng-ctrl.js": {
            "uri": "/components/public/ng-ctrl.js",
            "type": "js",
            "pkg": "p1"
        },
        "components/footer/footer.js": {
            "uri": "/components/footer/footer.js",
            "type": "js",
            "pkg": "p1"
        },
        "components/head/head.html": {
            "uri": "/components/head/head.html",
            "type": "html",
            "deps": [
                "components/head/head.css"
            ]
        },
        "components/head/shortcut-icon.png": {
            "uri": "../static/img/shortcut-icon.png",
            "type": "png"
        },
        "components/header/header.css": {
            "uri": "/components/header/header.css",
            "type": "css",
            "deps": [
                "head.css"
            ],
            "pkg": "p0"
        },
        "components/header/header.html": {
            "uri": "/components/header/header.html",
            "type": "html",
            "deps": [
                "components/header/header.css"
            ]
        },
        "components/header/logo-sdk.png": {
            "uri": "../static/img/logo-sdk.png",
            "type": "png"
        },
        "components/help-center/help-center.css": {
            "uri": "/components/help-center/help-center.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p0"
        },
        "components/help-center/help-center.html": {
            "uri": "/components/help-center/help-center.html",
            "type": "html",
            "deps": [
                "components/help-center/help-center.js",
                "components/help-center/help-center.css"
            ]
        },
        "components/help-center/help-center.js": {
            "uri": "/components/help-center/help-center.js",
            "type": "js",
            "deps": [
                "components/help-center/help-center.css"
            ],
            "pkg": "p1"
        },
        "components/panel-add/panel-add.css": {
            "uri": "/components/panel-add/panel-add.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p0"
        },
        "components/panel-add/panel-add.html": {
            "uri": "/components/panel-add/panel-add.html",
            "type": "html",
            "deps": [
                "components/panel-add/panel-add.css"
            ]
        },
        "components/panel-display/panel-display.css": {
            "uri": "/components/panel-display/panel-display.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p0"
        },
        "components/panel-display/panel-display.html": {
            "uri": "/components/panel-display/panel-display.html",
            "type": "html",
            "deps": [
                "components/panel-display/panel-display.css"
            ]
        },
        "fis-conf.js": {
            "uri": "/config/fis-conf.js",
            "type": "js"
        },
        "static/iconfont/demo.css": {
            "uri": "../static/iconfont/demo.css",
            "type": "css"
        },
        "static/iconfont/iconfont.css": {
            "uri": "../static/iconfont/iconfont.css",
            "type": "css"
        },
        "static/lib/angular/angular.js": {
            "uri": "../static/lib/angular/angular.js",
            "type": "js"
        },
        "static/lib/jquery/jquery-2.2.0.min.js": {
            "uri": "../static/lib/jquery/jquery-2.2.0.min.js",
            "type": "js"
        }
    },
    "pkg": {
        "p0": {
            "uri": "../static/yhtml5_289807e0.css",
            "type": "css",
            "has": [
                "components/head/head.css",
                "components/account copy/account.css",
                "components/account-withdraw/account.css",
                "components/account/account.css",
                "components/canal/canal.css",
                "components/dashboard-header/dashboard-header.css",
                "components/dashboard-set/dashboard-set.css",
                "components/header/header.css",
                "components/help-center/help-center.css",
                "components/panel-add/panel-add.css",
                "components/panel-display/panel-display.css"
            ],
            "deps": [
                "static/lib/bootstrap/bootstrap.css",
                "head.css"
            ]
        },
        "p1": {
            "uri": "../static/yhtml5_dba742d1.js",
            "type": "js",
            "has": [
                "components/public/jq-index.js",
                "components/public/ng-app.js",
                "components/public/ng-ctrl.js",
                "components/help-center/help-center.js",
                "components/footer/footer.js"
            ],
            "deps": [
                "static/lib/bootstrap/bootstrap.js",
                "static/lib/jquery/jquery.min.js",
                "static/lib/angular/angular.min.js",
                "components/help-center/help-center.css"
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
	.match('/components/**/*', {
		isMod: true,
		useSameNameRequire: true,
	})
	.match('{*.log,map.json,fis-conf.js,}', {
		release: '/config/$0'
	})
	.match('{/components/**/(*.gif),/components/**/(*.png)}', {
		release: '/static/img/$1',
		url: '../static/img/$1',
	})
	.match('/components/**/(iconfont.*)', {
		release: '/static/iconfont/$1',
		url: '../static/iconfont/$1'
	})
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
	//因为html文件在template文件夹下，且是相对路径，所以需要更改资源url
	.match('{/static/**,/server/**}', {
		url: '..$0'
	});
/*************************java模板*****************************/

fis.media('java')
	.set("project.ignore", ['fis-conf.js', '*.psd', '.git/**', '/server/**'])
	.match('::package', {
		// npm install [-g] fis3-postpackager-loader
		// 分析 {
    "res": {
        "components/account copy/account.css": {
            "uri": "/components/account copy/account.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p0"
        },
        "components/head/head.css": {
            "uri": "/components/head/head.css",
            "type": "css",
            "deps": [
                "static/lib/bootstrap/bootstrap.css"
            ],
            "pkg": "p0"
        },
        "static/lib/bootstrap/bootstrap.css": {
            "uri": "../static/lib/bootstrap/bootstrap.css",
            "type": "css"
        },
        "components/head/iconfont.eot": {
            "uri": "../static/iconfont/iconfont.eot",
            "type": "eot"
        },
        "components/head/iconfont.woff": {
            "uri": "../static/iconfont/iconfont.woff",
            "type": "woff"
        },
        "components/head/iconfont.ttf": {
            "uri": "../static/iconfont/iconfont.ttf",
            "type": "ttf"
        },
        "components/head/iconfont.svg": {
            "uri": "../static/iconfont/iconfont.svg",
            "type": "svg"
        },
        "components/account copy/account.html": {
            "uri": "/components/account copy/account.html",
            "type": "html",
            "deps": [
                "components/account copy/account.css"
            ]
        },
        "components/account-record/account-record.html": {
            "uri": "/components/account-record/account-record.html",
            "type": "html"
        },
        "components/account-withdraw/account-withdraw.html": {
            "uri": "/components/account-withdraw/account-withdraw.html",
            "type": "html"
        },
        "components/account-withdraw/account.css": {
            "uri": "/components/account-withdraw/account.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p0"
        },
        "components/account/account.css": {
            "uri": "/components/account/account.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p0"
        },
        "components/account/account.html": {
            "uri": "/components/account/account.html",
            "type": "html",
            "deps": [
                "components/account/account.css"
            ]
        },
        "components/undeveloped/undeveloped.html": {
            "uri": "/components/undeveloped/undeveloped.html",
            "type": "html"
        },
        "components/canal-add/canal-add.html": {
            "uri": "/components/canal-add/canal-add.html",
            "type": "html"
        },
        "components/canal-delete/canal-delete.html": {
            "uri": "/components/canal-delete/canal-delete.html",
            "type": "html"
        },
        "components/canal-reset/canal-reset.html": {
            "uri": "/components/canal-reset/canal-reset.html",
            "type": "html"
        },
        "components/canal/canal.css": {
            "uri": "/components/canal/canal.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p0"
        },
        "components/canal/canal.html": {
            "uri": "/components/canal/canal.html",
            "type": "html",
            "deps": [
                "components/canal/canal.css"
            ]
        },
        "components/dashboard-delete/dashboard-delete.html": {
            "uri": "/components/dashboard-delete/dashboard-delete.html",
            "type": "html"
        },
        "components/dashboard-header/dashboard-header.css": {
            "uri": "/components/dashboard-header/dashboard-header.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p0"
        },
        "components/dashboard-header/dashboard-header.html": {
            "uri": "/components/dashboard-header/dashboard-header.html",
            "type": "html",
            "deps": [
                "components/dashboard-header/dashboard-header.css"
            ]
        },
        "components/dashboard-header/logo-sdk.png": {
            "uri": "../static/img/logo-sdk.png",
            "type": "png"
        },
        "components/dashboard-payment/dashboard-payment.html": {
            "uri": "/components/dashboard-payment/dashboard-payment.html",
            "type": "html"
        },
        "components/dashboard-set/dashboard-set.css": {
            "uri": "/components/dashboard-set/dashboard-set.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p0"
        },
        "components/dashboard-set/dashboard-set.html": {
            "uri": "/components/dashboard-set/dashboard-set.html",
            "type": "html",
            "deps": [
                "components/dashboard-set/dashboard-set.css"
            ]
        },
        "components/footer/footer.html": {
            "uri": "/components/footer/footer.html",
            "type": "html",
            "deps": [
                "components/footer/footer.js"
            ]
        },
        "static/lib/jquery/jquery.min.js": {
            "uri": "../static/lib/jquery/jquery.min.js",
            "type": "js"
        },
        "static/lib/bootstrap/bootstrap.js": {
            "uri": "../static/lib/bootstrap/bootstrap.js",
            "type": "js",
            "deps": [
                "static/lib/jquery/jquery.min.js"
            ]
        },
        "components/public/jq-index.js": {
            "uri": "/components/public/jq-index.js",
            "type": "js",
            "deps": [
                "static/lib/bootstrap/bootstrap.js",
                "static/lib/jquery/jquery.min.js"
            ],
            "pkg": "p1"
        },
        "components/public/ng-app.js": {
            "uri": "/components/public/ng-app.js",
            "type": "js",
            "deps": [
                "components/public/jq-index.js",
                "static/lib/angular/angular.min.js"
            ],
            "pkg": "p1"
        },
        "static/lib/angular/angular.min.js": {
            "uri": "../static/lib/angular/angular.min.js",
            "type": "js"
        },
        "components/public/ng-ctrl.js": {
            "uri": "/components/public/ng-ctrl.js",
            "type": "js",
            "pkg": "p1"
        },
        "components/footer/footer.js": {
            "uri": "/components/footer/footer.js",
            "type": "js",
            "pkg": "p1"
        },
        "components/head/head.html": {
            "uri": "/components/head/head.html",
            "type": "html",
            "deps": [
                "components/head/head.css"
            ]
        },
        "components/head/shortcut-icon.png": {
            "uri": "../static/img/shortcut-icon.png",
            "type": "png"
        },
        "components/header/header.css": {
            "uri": "/components/header/header.css",
            "type": "css",
            "deps": [
                "head.css"
            ],
            "pkg": "p0"
        },
        "components/header/header.html": {
            "uri": "/components/header/header.html",
            "type": "html",
            "deps": [
                "components/header/header.css"
            ]
        },
        "components/header/logo-sdk.png": {
            "uri": "../static/img/logo-sdk.png",
            "type": "png"
        },
        "components/help-center/help-center.css": {
            "uri": "/components/help-center/help-center.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p0"
        },
        "components/help-center/help-center.html": {
            "uri": "/components/help-center/help-center.html",
            "type": "html",
            "deps": [
                "components/help-center/help-center.js",
                "components/help-center/help-center.css"
            ]
        },
        "components/help-center/help-center.js": {
            "uri": "/components/help-center/help-center.js",
            "type": "js",
            "deps": [
                "components/help-center/help-center.css"
            ],
            "pkg": "p1"
        },
        "components/panel-add/panel-add.css": {
            "uri": "/components/panel-add/panel-add.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p0"
        },
        "components/panel-add/panel-add.html": {
            "uri": "/components/panel-add/panel-add.html",
            "type": "html",
            "deps": [
                "components/panel-add/panel-add.css"
            ]
        },
        "components/panel-display/panel-display.css": {
            "uri": "/components/panel-display/panel-display.css",
            "type": "css",
            "deps": [
                "components/head/head.css"
            ],
            "pkg": "p0"
        },
        "components/panel-display/panel-display.html": {
            "uri": "/components/panel-display/panel-display.html",
            "type": "html",
            "deps": [
                "components/panel-display/panel-display.css"
            ]
        },
        "fis-conf.js": {
            "uri": "/config/fis-conf.js",
            "type": "js"
        },
        "static/iconfont/demo.css": {
            "uri": "../static/iconfont/demo.css",
            "type": "css"
        },
        "static/iconfont/iconfont.css": {
            "uri": "../static/iconfont/iconfont.css",
            "type": "css"
        },
        "static/lib/angular/angular.js": {
            "uri": "../static/lib/angular/angular.js",
            "type": "js"
        },
        "static/lib/jquery/jquery-2.2.0.min.js": {
            "uri": "../static/lib/jquery/jquery-2.2.0.min.js",
            "type": "js"
        }
    },
    "pkg": {
        "p0": {
            "uri": "../static/yhtml5_289807e0.css",
            "type": "css",
            "has": [
                "components/head/head.css",
                "components/account copy/account.css",
                "components/account-withdraw/account.css",
                "components/account/account.css",
                "components/canal/canal.css",
                "components/dashboard-header/dashboard-header.css",
                "components/dashboard-set/dashboard-set.css",
                "components/header/header.css",
                "components/help-center/help-center.css",
                "components/panel-add/panel-add.css",
                "components/panel-display/panel-display.css"
            ],
            "deps": [
                "static/lib/bootstrap/bootstrap.css",
                "head.css"
            ]
        },
        "p1": {
            "uri": "../static/yhtml5_dba742d1.js",
            "type": "js",
            "has": [
                "components/public/jq-index.js",
                "components/public/ng-app.js",
                "components/public/ng-ctrl.js",
                "components/help-center/help-center.js",
                "components/footer/footer.js"
            ],
            "deps": [
                "static/lib/bootstrap/bootstrap.js",
                "static/lib/jquery/jquery.min.js",
                "static/lib/angular/angular.min.js",
                "components/help-center/help-center.css"
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
	.match('/components/**/*', {
		isMod: true,
		useSameNameRequire: true,
	})
	// 所有模板放到 tempalte 目录下
	.match('/template/(**.html)', {
		release: '/demo/$1',
	})
	.match('{*.log,map.json}', {
		release: '/config/$0'
	})
	.match('Reademe.html', {
		release: '/$0',
	})
	.match('/static/lib/angular/**', {
		release: false
	})
	.match('/components/(**)', {
		release: 'others/$1',
	})
	.match('/components/*/(*.html)', {
		release: '/widget/$1',
	})
	.match('/components/**/(*.gif)', {
		release: '/static/img/$1',
		url: '../static/img/$1',
	})
	.match('/components/**/(*.png)', {
		release: '/static/img/$1',
		url: '../static/img/$1',
	})
	.match('/components/**/(iconfont.*)', {
		release: '/static/iconfont/$1',
		url: '../static/iconfont/$1'
	})
	.match('/static/lib/**', {
		url: '..$0'
	})
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
		url: '..$0',
		useHash: true
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