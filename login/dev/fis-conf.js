/************************* Project Setting *****************************/
fis.set('project.md5Length', 7);
fis.set('project.md5Connector ', '.');
fis.set('project.name', 'yhtml5');
fis.set('project.static', '/static');
fis.set('project.ignore', ['*.test.*', '*.psd', '.git/**', '/**/demo.*']);
fis.match('{/fis-conf.js,/view/login/**}', {
    release: false
});
fis.match('/view/login/(logo.png)', {
    release: '${project.static}/$1'
});
fis.match('/view/**/(*.{png,gif,jpg,jpeg,svg})', {
    domain: '.'
});
fis.match('{/**/*.html,index.html}', {
        optimizer: function (content) {
            return content.replace(/<!--([\s\S]*?)-->/g, '');
        }
    })
fis.match('/view/login/login.head.html', {
    optimizer: fis.plugin('htmlminify', {
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS:true
    })
})
