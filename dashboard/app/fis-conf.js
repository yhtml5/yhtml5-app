fis.set('project.name', 'yhtml5-fis3');
fis.set('project.md5Length', 8);
fis.set('project.md5Connector ', '_');

/**************************dev******************************/
fis.media('dev')
    .set("project.ignore", [
        '**/**.test.js',
        '*.psd',
        '.git/**',
        '/components/**',
        '/bower_components/**'
    ])
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
    });
/*************************local模板*****************************/
fis.media('local')
    .set("project.ignore", [
        '**/**.test.js',
        '*.psd',
        '.git/**',
        '/components/**',
        '/bower_components/**'
    ])
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
        release: 'static/img/$1',
        url: './static/img/$1'
    })
    .match('/components/**/(iconfont.*)', {
        release: 'static/iconfont/$1',
        url: 'iconfont/$1'
    })
    .match('{*.log,map.json,fis-conf.*,}', {
        release: '/config/$0'
    })
    .match('::package', {
        packager: fis.plugin('map'),
        spriter: fis.plugin('csssprites', {
            layout: 'matrix',
            margin: '15'
        })
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
    .match('/static/{*.js,*.css}', {
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
    .match('*.css', {
        optimizer: fis.plugin('clean-css', {
            'keepBreaks': false,
            useSprite: true
        })
    })
    .match('*.{jpg,png}', {
        useHash: true
    })
    .match('::package', {
        packager: fis.plugin('map'),
        spriter: fis.plugin('csssprites', {
            layout: 'matrix',
            margin: '15'
        })
    })
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
    //去掉依赖声明文本
    .match('*.html', {
        optimizer: (function(content) {
            return content.replace(/<!--([\s\s]*?)-->/g, "")
        })
    })