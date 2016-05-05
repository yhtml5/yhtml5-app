/*
 * === fis3 ===
 *    "/"为绝对路径,  "./"相对当前目录， "../"上级目录
 *    fis.set设置项目属性
 *    release输出相对于fis-conf.js文件的绝对定位
 *    domain设置域名，相对路径配置"."
 *
 * === plugin ===
 *    'keepBreaks': false, //保持一个规则一个换行
 *     useSprite: true // 给匹配到的文件分配属性 `useSprite`
 *
 */

//因为html文件在template文件夹下，且是相对路径，所以需要更改资源url
//js里的资源定位需要加上__url()
//  .match('{/static/**,/server/**}', {
//      url: '..$0'
//  });
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

/**************************dev******************************/
fis.media('dev')
    .set("project.ignore", ['/components/version/**', '**/**.test.js', '*.psd', '.git/**', '/components/**/demo.*'])
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
    .match('{/components/**,/view/**}', {
        isMod: true,
        useSameNameRequire: true,
    })
    //	.match('{*.log,map.json,fis-conf.js,}', {
    //		release: '/config/$0'
    //	})
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
    .match('{/app.js,/ctrl.js,/components/**/*.js,/view/**/*.js}', {
        packTo: '/static/yhtml5.js',
    })
    .match('{/components/**/*.css,/view/**/*.css}', {
        packTo: '/static/yhtml5.css',
    })
    .match('components/**', {
        packOrder: 3
    })
    .match('/static/{*.js,*.css}', {
        useHash: true
    });
/*************************local模板*****************************/
/*
 *要求：包含编译后的demo、template、reademe
 *      文件路径为绝对路径
 *
 */
fis.media('local')
    .set("project.ignore", [
        '**/**.test.js',
        '*.psd',
        '.git/**',
        //      '/components/version/**',
        //      '/components/**/demo.*',
        '/components/**',
        '/bower_components/**'
    ])
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
    .match('{/components/**,/view/**}', {
        isMod: true,
        useSameNameRequire: true,
    })
    .match('{/components/**/(*.gif),/components/**/(*.png)}', {
        release: 'static/img/$1',
        url: './static/img/$1'
    })
    .match('/components/**/(iconfont.*)', {
        release: 'static/iconfont/$1',
        url: 'iconfont/$1'
    })
    .match('::package', {
        packager: fis.plugin('map'),
        spriter: fis.plugin('csssprites', {
            layout: 'matrix',
            margin: '15'
        })
    })
    .match('{/app.js,/ctrl.js,/components/**/*.js,/view/**/*.js}', {
        packTo: '/static/yhtml5.js',
    })
    .match('{/components/**/*.css,/view/**/*.css}', {
        packTo: '/static/yhtml5.css',
    })
    .match('components/**', {
        packOrder: 3
    })
    .match('/static/{*.js,*.css}', {
        useHash: true
    })
    .match('/static/iconfont/iconfont.css', {
        release: false
    })
    .match('{/static/**,/bower_components/**,/server/**,/view/**}', {
        domain: '.',
    })

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
    })
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