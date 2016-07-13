/************************* Project Setting *****************************/
fis.set('project.md5Length', 7);
fis.set('project.md5Connector ', '.');
fis.set('project.name', 'yhtml5');
fis.set('project.static', '/static');
fis.set('project.ignore', ['*.test.*', '*.psd', '.git/**', '/**/demo.*']);
fis.match('/*.{png,gif,jpg,jpeg,svg}', {
    release: '${project.static}/img/$1'
});
    //html 去除注释
    fis.match('/*.html', {
        optimizer: function (content) {
            return content.replace(/<!--([\s\S]*?)-->/g, '');
        }
    })
fis.match('/login.html', {
        preprocessor: fis.plugin('cssprefixer', {
            "browsers": ["FireFox > 1", "Chrome > 1", "ie >= 8"],
            "cascade": true
        })
    })
fis.match('/login.html', {
    optimizer: fis.plugin('clean-css', {
        'keepBreaks': false,
        useSprite: true
    })
})
fis.match('/login.html', {
    optimizer: fis.plugin('uglify-js', {
        mangle: {
            expect: ['require', 'define', 'some string']
        }
    })
})

