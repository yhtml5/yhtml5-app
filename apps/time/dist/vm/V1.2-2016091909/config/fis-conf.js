/************************* Project Setting *****************************/
fis.set('project.md5Length', 7);
fis.set('project.md5Connector ', '.');
fis.set('project.name', 'yhtml5');
fis.set('project.static', '/static');
fis.set('project.ignore', ['*.test.*', '*.psd', '.git/**', '/**/demo.*']);
fis.set('project.files', [
    '/fis-conf.js', '/map.json', 'progress.md',
    '/components/**', '/server/*', '/page/**',
    '/bower_components/bootstrap/dist/**/bootstrap.min.{css,js}',
    '/bower_components/jquery/dist/jquery.min.js',
    // '/bower_components/form.validation/dist/css/formValidation.min.css',
    // '/bower_components/form.validation/dist/js/{formValidation.min,framework/bootstrap.min,language/zh_CN}.js',
    // '/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css',
    // '/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
    // '/bower_components/bootstrap-datepicker/dist/locales/bootstrap-datepicker.zh-CN.min.js'
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
fis.match('/**/(*.design.*)', {
    release: '/vendor/design/$1'
});
fis.match('/{map.json,fis-conf.*}', {
    release: '/config/$0'
});
fis.match('/{components,bower_components,page}/**/(*.{png,gif,jpg,jpeg,svg})', {
    release: '${project.static}/img/$1'
});
fis.match('/components/**/(iconfont.{eot, svg, ttf, woff})', {
    release: '${project.static}/iconfont/$1',
    url:'/iconfont/$1',
    domain: '.'
});
/************************* 打包规范 *****************************/
fis.match('::package', {
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true
    })
});
/*** public js ***/
fis.match('/bower_components/{jquery,bootstrap}/dist{/**/,/}*.js', {
    packTo: '${project.static}/yhtml5.js',
});
fis.match('/bower_components/jquery/dist/*', {
    packOrder: -99
});
fis.match('/bower_components/bootstrap/dist/js/*', {
    packOrder: -97
});
/*** public css ***/
fis.match('/bower_components/bootstrap/dist/css/*', {
    packTo: '${project.static}/yhtml5.css'
});
fis.match('/bower_components/bootstrap/dist/css/*', {
    packOrder: -99
});
/*** custom resourse ***/
fis.match('/{server,components}/{*,**/*}.js', {
    packTo: '${project.static}/index.js'
});
fis.match('/server/author.js', {
    packOrder: -99
});
fis.match('/server/console.js', {
    packOrder: 2
});
fis.match('/{server,page,components}/{*,**/*}.css', {
    packTo: '${project.static}/index.css'
});
fis.match('/server/author.css', {
    packOrder: -89
});
fis.match('/components/iconfont/iconfont.css', {
    packOrder: -78
});

/************************* VM *****************************/

fis.media('vm')
    .match('/{static/**,{components,bower_components,page}/**/*.{png,gif,jpg,jpeg,eot,ttf,woff,woff2,svg}}', {
        useHash: false,
        domain: '.'
    })
    .match('/components/public/csssprites/(*)', {
        url: '/img/$1'
    })
    //css 自动补充兼容性 https://github.com/ai/browserslist#queries
    .match('/{page,components}/{*,**/*}.css', {
        preprocessor: fis.plugin('cssprefixer', {
            "browsers": ["FireFox > 1", "Chrome > 1", "ie >= 8"],
            "cascade": true
        })
    })
    .match('/{page,components}/{*,**/*}.css', {
        optimizer: fis.plugin('htmlminify', {
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true
        })
    })
    //html 去除注释
    .match('/{page,components}/{*,**/*}.html}', {
        optimizer: function (content) {
            return content.replace(/<!--([\s\S]*?)-->/g, '');
        }
    });
/************************* Pro规范 *****************************/

fis.media('pro')
    .match('/{static/**,{components,bower_components,page}/**/*.{png,gif,jpg,jpeg,eot,ttf,woff,woff2,svg}}', {
        useHash: true,
        domain: '.'
    })
    .match('/components/public/csssprites/(*)', {
        url: '/img/$1'
    })
    //css 自动补充兼容性 https://github.com/ai/browserslist#queries
    .match('/{page,components}/{*,**/*}.css', {
        preprocessor: fis.plugin('cssprefixer', {
            "browsers": ["FireFox > 1", "Chrome > 1", "ie >= 8"],
            "cascade": true
        })
    })
    .match('/{page,components}/{*,**/*}.{css,js,html}', {
        optimizer: fis.plugin('htmlminify', {
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true
        })
    })
    //html 去除注释
    .match('/{page,components}/{*,**/*}.html}', {
        optimizer: function (content) {
            return content.replace(/<!--([\s\S]*?)-->/g, '');
        }
    });

// 自动雪碧图
// .match('::package', {
//     packager: fis.plugin('map'),
//     spriter: fis.plugin('csssprites', {
//         layout: 'matrix',
//         margin: '15'
//     })
// })