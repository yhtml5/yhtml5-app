fis.set('project.name', 'yhtml5-fis3');
fis.set('project.md5Length', 8);
fis.set('project.md5Connector ', '_');
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
    .match('{/components/**,/bower_components/**}', {
        release: '/dist/$0',
    })
    .match('{/components/**/(*.gif),/components/**/(*.png)}', {
        release: '/static/img/$1',
    })
    .match('/components/**/(iconfont.*)', {
        release: '/static/iconfont/$1',
    })
    .match('{/index.css,/components/**/*.css}', {
        packTo: '/static/yhtml5.css',
    })
    .match('{/index.js,/components/**/*.js}', {
        packTo: '/static/yhtml5.js',
    })
    .match('{/static/**,*.png,*.jpg,iconfont.*}', {
        useHash: true
    })
    /*************************test模板*****************************/
fis.media('test')
    .set("project.ignore", [
        '**/**.test.js',
        '*.psd',
        '.git/**',
        '/components/**',
        '/bower_components/**',
        '/fis-conf.*'
    ])
    .match('{/components/**,/bower_components/**}', {
        release: '/dist/$0',
    })
    .match('{index.html,/components/**/*.js,/components/**/*.css,/view/**/*.js,/view/**/*.css,/view/**/*.html}', {
        optimizer: fis.plugin('htmlmin', {
            removeComments: true,
            collapseWhitespace: true,
            minifyJS: true
        })
    })
    .match('::package', {
        postpackager: fis.plugin('loader', {
            resourceType: 'commonJs',
            useInlineMap: true,
        })
    })
    .match('/bower_components/**/*.css', {
        packTo: '/static/index.css',
    })
    .match('/bower_components/**/*.js', {
        packTo: '/static/index.js',
    })
    .match('{index.css,/server/author.css,/components/**/*.css,/view/**/*.css}', {
        packTo: '/static/yhtml5.css',
    })
    .match('{index.js,/server/author.js,/components/**/*.js,/view/**/*.js}', {
        packTo: '/static/yhtml5.js',
    })
    .match('{*.gif,*.png,*.gif,*.jpg}', {
        release: '/static/img/$1',
    })
    .match('qq-lg.png', {
        url: '/img/$1',
    })
    .match('/components/**/(iconfont.*)', {
        release: '/static/iconfont/$1',
        url: '/iconfont/$1'
    })
    .match('{/static/**,*.png,*.jpg,iconfont.*}', {
        useHash: true
    })
    .match('{/static/**,/bower_components/**,/view/**,*.png,*.jpg,iconfont.*}', {
        domain: '.',
    })

///**************************dev******************************/
//fis.media('dev')
//  .set("project.ignore", [
//      '**/**.test.js',
//      '*.psd',
//      '.git/**',
//      '/components/**',
//      '/bower_components/**'
//  ])
//  .match('::package', {
//      postpackager: fis.plugin('loader', {
//          resourceType: 'commonJs',
//          useInlineMap: true,
//      })
//  })
//  .match('{/components/**,/view/**}', {
//      isMod: true,
//      useSameNameRequire: true,
//  })
//  .match('{/components/**/(*.gif),/components/**/(*.png)}', {
//      release: '/static/img/$1',
//  })
//  .match('/components/**/(iconfont.*)', {
//      release: '/static/iconfont/$1',
//  })
//  .match('{/app.js,/ctrl.js,/components/**/*.js,/view/**/*.js}', {
//      packTo: '/static/yhtml5.js',
//  })
//  .match('{/components/**/*.css,/view/**/*.css}', {
//      packTo: '/static/yhtml5.css',
//  })
//  .match('/view/**', {
//      packOrder: 2
//  })
//  .match('/components/**', {
//      packOrder: 3
//  })
//  .match('/static/**', {
//      useHash: true
//  })
//  .match('{/static/**,/bower_components/**,/server/**,/view/**}', {
//      domain: '.',
//  })
//  /*************************test模板*****************************/
//fis.media('test')
//  .set("project.ignore", [
//      '**/**.test.js',
//      '*.psd',
//      '.git/**',
//      'fis-conf.*',
//      '/components/**',
//      '/bower_components/**'
//  ])
//  .match('::package', {
//      postpackager: fis.plugin('loader', {
//          resourceType: 'commonJs',
//          useInlineMap: true,
//      })
//  })
//  .match('::package', {
//      packager: fis.plugin('map'),
//      spriter: fis.plugin('csssprites', {
//          layout: 'matrix',
//          margin: '15'
//      })
//  })
//  .match('*.css', {
//      optimizer: fis.plugin('clean-css', {
//          'keepBreaks': false,
//          useSprite: true
//      })
//  })
//  .match('{/components/**,/view/**}', {
//      isMod: true,
//      useSameNameRequire: true,
//  })
//  .match('{/app.js,/ctrl.js,/bower_components/**,components/**,}', {
//      release: '/others/$0'
//  })
//  .match('{/components/**/(*.gif),/components/**/(*.png)}', {
//      release: 'static/img/$1',
//      url: './static/img/$1'
//  })
//  .match('/components/**/(iconfont.*)', {
//      release: 'static/iconfont/$1',
//      url: 'iconfont/$1'
//  })
//  .match('{/app.js,/ctrl.js,/components/**/*.js,/bower_components/**/*.js,/view/**/*.js}', {
//      packTo: '/static/yhtml5.js',
//  })
//  .match('{/components/**/*.css,/bower_components/**/*.css,/view/**/*.css}', {
//      packTo: '/static/yhtml5.css',
//  })
//  .match('/bower_components/**', {
//      packOrder: -2
//  })
//  .match('/view/**', {
//      packOrder: 2
//  })
//  .match('/components/**', {
//      packOrder: 3
//  })
//  .match('{/static/**,**.{gif,png}}', {
//      useHash: true
//  })
//  .match('{/static/**,/bower_components/**,/server/**,/view/**}', {
//      domain: '.',
//  })
//
///*************************CDN规范*****************************/
//// optimize
//fis.media('cdn')
//  .match('*.js', {
//      optimizer: fis.plugin('uglify-js', {
//          mangle: {
//              expect: ['require', 'define', 'some string']
//          }
//      })
//  })
//  //去掉依赖声明文本
//  .match('*.html', {
//      optimizer: (function(content) {
//          return content.replace(/<!--([\s\s]*?)-->/g, "")
//      })
//  })