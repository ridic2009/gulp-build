export const js = () => {
    return $.gulp.src($.path.js.src, { sourcemaps: $.isDev })

        // Other plugins
        
        .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.isDev }))
        .pipe($.plugin.if($.isProd, $.plugin.GulpUglify()))
        .pipe($.plugin.if($.isProd, $.plugin.rename("main.min.js")))
        .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.isDev }))
}