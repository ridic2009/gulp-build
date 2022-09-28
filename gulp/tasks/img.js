export const img = () => {
    return $.gulp.src($.path.img.src)
        .pipe($.plugin.newer($.path.img.src))
        .pipe($.plugin.if($.isProd, $.plugin.webp()))
        .pipe($.plugin.if($.isProd, $.gulp.dest(`${$.path.img.dest}/webp`, !`${$.path.img.dest}`)))
        .pipe($.plugin.if($.isProd, $.plugin.imagemin($.options.imagemin)))
        .pipe($.gulp.dest($.path.img.dest))
}