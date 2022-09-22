export const font = () => {
    return $.gulp.src($.path.font.src)
            .pipe($.plugin.newer($.path.font.dest))
            .pipe($.plugin.fonter($.options.fonter))
            .pipe($.gulp.dest($.path.font.dest))
            .pipe($.plugin.ttf2woff2())
            .pipe($.gulp.dest($.path.font.dest))
}