// 设置项目属性
fis.set('project.name', 'fis3-base');
fis.set('project.md5Length', 8);
fis.set('project.md5Connector ', '.');
fis.set('project.files', ['*']);
fis.set('project.ignore', ['test2/**', '.git/**', 'fis-conf.js','*.psd']);

// 所有的文件产出到 static/ 目录下
fis.match('*', {
	release: '$0'
});

// 所有模板放到 tempalte 目录下
fis.match('*.html', {
	release: '/template/$0'
});

// components源码目录下的资源被标注为组件
fis.match('/components/**/*', {
	isMod: true
});

// components下的 js 调用 jswrapper 进行自动化组件化封装
//fis.match('/components/**/*.js', {
//	postprocessor: fis.plugin('jswrapper', {
//		type: 'commonjs'
//	})
//});

// test 目录下的原封不动产出到 test 目录下
fis.match('/test/**/*', {
	release: '$0'
});

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
			'keepBreaks': true, //保持一个规则一个换行
			useSprite: true // 给匹配到的文件分配属性 `useSprite`
		})
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