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
	.set("project.ignore", ['*.psd', '.git/**'])
	.match('::package', {
		// npm install [-g] fis3-postpackager-loader
		// 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
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
	//js里的资源定位需要加上__url()
	.match('{/static/**,/server/**}', {
		url: '..$0'
	});
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