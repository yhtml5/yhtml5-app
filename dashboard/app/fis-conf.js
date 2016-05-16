//======== 设置项目属性
fis.set('project.md5Length', 9);
fis.set('project.md5Connector ', '.');
fis.set('project.name', 'yhtml5');
fis.set('project.static', '/static');
fis.set('project.ignore', ['*.bak', '**.test.js', '*.psd', '.git/**','/view/**',  '/components/**', '/bower_components/**']); // set 为覆盖不是叠加

/*************************目录规范*****************************/



/*************************打包规范*****************************/

// 因为是纯前端项目，依赖不能自断被加载进来，所以这里需要借助一个 loader 来完成，
// 注意：与后端结合的项目不需要此插件!!!
// npm install [-g] fis3-postpackager-loader
fis.match('::package', {
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true // 资源映射表内嵌,分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    })
});

/**************************dev******************************/
fis.media('dev')
    .match('::package', {
        postpackager: fis.plugin('loader', {
            resourceType: 'commonJs',
            useInlineMap: true,
        })
    })
    .match('{/components/**,/view/**}', {
        isMod: true,
        useSameNameRequire: true,
    })
    .match('{/components/**/(*.gif),/components/**/(*.png)}', {
        release: '/static/img/$1',
    })
    .match('/components/**/(iconfont.*)', {
        release: '/static/iconfont/$1',
    })
    .match('{/app.js,/ctrl.js,/components/**/*.js,/view/**/*.js}', {
        packTo: '/static/yhtml5.js',
    })
    .match('{/components/**/*.css,/view/**/*.css}', {
        packTo: '/static/yhtml5.css',
    })
    .match('/view/**', {
        packOrder: 2
    })
    .match('/components/**', {
        packOrder: 3
    })
    .match('/static/**', {
        useHash: true
    })
    .match('{/static/**,/bower_components/**,/server/**,/view/**}', {
        domain: '.',
    })
    /*************************test模板*****************************/
fis.media('test')
    .set("project.ignore", [
        '**/**.test.js',
        '*.psd',
        '.git/**',
        'fis-conf.*',
        '/components/**',
        '/bower_components/**'
    ])
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
    .match('*.css', {
        optimizer: fis.plugin('clean-css', {
            'keepBreaks': false,
            useSprite: true
        })
    })
    .match('{/components/**,/view/**}', {
        isMod: true,
        useSameNameRequire: true,
    })
    .match('{/app.js,/ctrl.js,/bower_components/**,components/**,}', {
        release: '/others/$0'
    })
    .match('{/components/**/(*.gif),/components/**/(*.png)}', {
        release: 'static/img/$1',
        url: './static/img/$1'
    })
    .match('/components/**/(iconfont.*)', {
        release: 'static/iconfont/$1',
        url: 'iconfont/$1'
    })
    .match('{/app.js,/ctrl.js,/components/**/*.js,/bower_components/**/*.js,/view/**/*.js}', {
        packTo: '/static/yhtml5.js',
    })
    .match('{/components/**/*.css,/bower_components/**/*.css,/view/**/*.css}', {
        packTo: '/static/yhtml5.css',
    })
    .match('/bower_components/**', {
        packOrder: -2
    })
    .match('/view/**', {
        packOrder: 2
    })
    .match('/components/**', {
        packOrder: 3
    })
    .match('{/static/**,**.{gif,png}}', {
        useHash: true
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