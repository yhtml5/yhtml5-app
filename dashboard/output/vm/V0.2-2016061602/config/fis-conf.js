//======== 设置项目属性 set为覆盖不是叠加
fis.set('project.md5Length', 9);
fis.set('project.md5Connector ', '_');
fis.set('project.name', 'yhtml5');
fis.set('project.static', '/static');
fis.set('project.ignore', ['**/*.test.js', '*.psd', '.git/**', '/components/**', '/bower_components/**']);

/*************************目录规范*****************************/
//fis.match('**.**', {
//  useCache: false
//});
fis.match('{/components/**,/bower_components/**}', {
    release: '${project.static}/$&'
});
fis.match('/components/**/(*.{png,gif,jpg,jpeg})', {
    release: '${project.static}/img/$1'
});
fis.match('/components/**/(iconfont.*)', {
    release: '${project.static}/iconfont/$1',
    url: '/iconfont/$1'
});
fis.match('/bower_components/**/(*.{js,css})', {
    release: '${project.static}/lib/$1'
});
fis.match('/bower_components/**/fonts/(**)', {
    release: '${project.static}/lib/$1'
});
fis.match('{/components/**/*.css,/components/**/*.js}', {
    release: '${project.static}/$&'
});
fis.match('{/map.json,fis-conf.*,/bower.json}', {
    release: '/config/$0'
});
fis.match('/server/**', {
    release: '/config/$0'
});

/*************************打包规范*****************************/

// 因为是纯前端项目，依赖不能自断被加载进来，所以这里需要借助一个 loader 来完成，
// 注意：与后端结合的项目不需要此插件!!!
// npm install [-g] fis3-postpackager-loader
fis.match('::package', {
    postpackager: fis.plugin('loader', {
        resourceType: 'commonJs',
        useInlineMap: true // 资源映射表内嵌,分析结构，来解决资源加载问题
    })
})
fis.match('/bower_components/**/*.js', {
    packTo: '${project.static}/yhtml5.js',
})
fis.match('{/server/author.js,/components/**/*.js,/view/**/*.js}', {
    packTo: '${project.static}/index.js'
})
fis.match('/components/js/vm.js', {
    packTo: '${project.static}/$0'
})
fis.match('/bower_components/**/*.css', {
    packTo: '${project.static}/yhtml5.css'
})
fis.match('{/server/author.css,/components/**/*.css}', {
    packTo: '${project.static}/index.css'
})
fis.match('{/static/**,/components/**/*.{png,gif,jpg,jpeg}}', {
    useHash: false
})
fis.match('{/static/**,/components/**/*.{png,gif,jpg,jpeg},/components/**/(iconfont.*)}', {
    domain: '.'
});
/*************************CDN规范*****************************/

// optimize
fis.media('pro')
    .match('::package', {
        packager: fis.plugin('map'),
        spriter: fis.plugin('csssprites', {
            layout: 'matrix',
            margin: '15'
        })
    })
    .match('{/static/**,**.{gif,png}}', {
        useHash: true
    })
    .match('*.css', {
        optimizer: fis.plugin('clean-css', {
            'keepBreaks': false,
            useSprite: true
        })
    })
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