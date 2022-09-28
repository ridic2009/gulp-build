export const font = () => {
    return $.gulp.src($.path.font.src)
            .pipe($.plugin.newer($.path.font.src))
            .pipe($.plugin.if($.isProd, $.plugin.fonter($.options.fonter)))
            .pipe($.plugin.if($.isProd, $.gulp.dest($.path.font.dest)))
            .pipe($.plugin.if($.isProd, $.plugin.ttf2woff2()))
            .pipe($.gulp.dest($.path.font.dest))
}