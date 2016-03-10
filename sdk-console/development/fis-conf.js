 // 设置项目属性
fis.set('project.name', 'fis3-base');
fis.set('project.md5Length', 8);
fis.set('project.md5Connector ', '.');
fis.set('project.ignore', ['test2/**', '.git/**', 'fis-conf.js', '*.psd']);


// 所有模板放到 tempalte 目录下
fis.match('/page/(**.html)', {
	release: '/template/$1',
});
fis.match('{*.log,*json}', {
	release: '/config/$0'
});
// components源码目录下的资源被标注为组件
fis.match('/components/**/*', {
	isMod: true,
	useSameNameRequire: true
});
fis.match('/components/**/(*.png)', {
	release: '/static/img/$1',
	url: '../static/img/$1'
});
// components下的 js 调用 jswrapper 进行自动化组件化封装
//fis.match('/components/**/*.js', {
//	postprocessor: fis.plugin('jswrapper', {
//		type: 'commonjs'
//	})
//});

/**********************Production规范**************************/
// 因为是纯前端项目，依赖不能自断被加载进来，所以这里需要借助一个 loader 来完成，
// 注意：与后端结合的项目不需要此插件!!!
fis.match('::package', {
	// npm install [-g] fis3-postpackager-loader
	// 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
	postpackager: fis.plugin('loader', {
		//allInOne: true, 默认 false, 配置是否合并零碎资源。
		resourceType: 'commonJs',
		useInlineMap: true, // 资源映射表内嵌
	})
});
fis.media('pro')
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
	})
	.match('1.js', {
		packOrder: 1
	})

.match('/static/{*.js,*css}', {
		release: '/$0',
		url: '..$0',
		useHash: true
	})
	/**************************Copy******************************/

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