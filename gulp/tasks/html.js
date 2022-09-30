export const html = () => {
    return $.gulp.src($.path.html.src)
        .pipe($.plugin.fileInclude({prefix: "@"}))
        .pipe($.plugin.if($.isProd, $.plugin.webpHtml()))
        .pipe($.plugin.if($.isProd, $.plugin.size({ title: "before" })))
        .pipe($.plugin.if($.isProd, $.plugin.htmlmin($.options.htmlmin)))
        .pipe($.plugin.if($.isProd, $.plugin.size({ title: "after" })))
        .pipe($.gulp.dest($.path.html.dest))
};