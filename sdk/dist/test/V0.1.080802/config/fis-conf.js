/************************* Project Setting *****************************/
fis.set('project.md5Length', 7);
fis.set('project.md5Connector ', '.');
fis.set('project.name', 'yhtml5');
fis.set('project.static', '/static');
fis.set('project.ignore', ['*.test.*', '*.psd', '.git/**', '/**/demo.*']);
fis.set('project.files', [
    '/fis-conf.js', '/map.json', 'progress.md',
    '/components/**', '/server/*', '/page/**',
    '/bower_components/bootstrap/dist/**/bootstrap.min.css',
    '/bower_components/vue/dist/vue.min.js'
   ]);

/************************* 目录规范 *****************************/
fis.match('/page/(*.html)', {
    release: '/$1'
});
fis.match('/bower_components/(**)', {
    release: '/vendor/$1'
});
fis.match('/components/**', {
    release: '/vendor/$0'
});
fis.match('/{components,bower_components,page}/**/(*.{png,gif,jpg,jpeg,svg})', {
    release: '${project.static}/img/$1'
});
fis.match('/**/(*.design.*)', {
    release: '/vendor/design/$1'
});
fis.match('/{map.json,fis-conf.*}', {
    release: '/config/$0'
});
/************************* 打包规范 *****************************/
fis.match('::package', {
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true
    })
});
/*** public js ***/

/*** public css ***/
fis.match('/{bower_components/bootstrap/dist/css, server,components/**}/*.css', {
    packTo: '${project.static}/yhtml5.css'
});
fis.match('/server/*.css', {
    packOrder: -99
});
fis.match('/bower_components/bootstrap/dist/css/*.css', {
    packOrder: -89
});
fis.match('components/**/*.css', {
    packOrder: -79
});
/*** js ***/
fis.match('/{server, components/**, bower_components/vue/dist}/*.js', {
    packTo: '${project.static}/yhtml5.js'
});
fis.match('/server/*.js', {
    packOrder: -99
});
fis.match('/bower_components/vue/dist/*.js', {
    packOrder: -89
});
fis.match('components/**/*.js', {
    packOrder: -79
});

/************************* Pro规范 *****************************/

fis.media('pro')
    .match('/{static/**,{components,bower_components,page}/**/*.{png,gif,jpg,jpeg,eot,ttf,woff,woff2,svg}}', {
        useHash: true,
        domain: '.'
    })
    //css 自动补充兼容性 https://github.com/ai/browserslist#queries
    .match('/components/**/*.css', {
        preprocessor: fis.plugin('cssprefixer', {
            "browsers": ["FireFox > 1", "Chrome > 1", "ie >= 8"],
            "cascade": true
        })
    })
    .match('/{components/**/*.css, page/*.html}', {
        optimizer: fis.plugin('htmlminify', {
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true
        })
    })

// .match('/{{components,page}/**/*.{html,css},index.html}', {
//     optimizer: fis.plugin('htmlminify', {
//         removeComments: true,
//         collapseWhitespace: true,
//         minifyJS: true,
//         minifyCSS: true
//     })
// })
// .match('/{components,page}/**/init.js', {
//     optimizer: fis.plugin('htmlminify', {
//         removeComments: true,
//         collapseWhitespace: true,
//         minifyJS: true
//     })
// })

// 自动雪碧图
// .match('::package', {
//     packager: fis.plugin('map'),
//     spriter: fis.plugin('csssprites', {
//         layout: 'matrix',
//         margin: '15'
//     })
// })
// .match('*.css', {
//     optimizer: fis.plugin('clean-css', {
//         'keepBreaks': false,
//         useSprite: true
//     })
// })
// .match('*.js', {
//     optimizer: fis.plugin('uglify-js', {
//         mangle: {
//             expect: ['require', 'define', 'some string']
//         }
//     })
// })