export const js = () => {
    return $.gulp.src($.path.js.src)

        // Other plugins
        
        .pipe($.gulp.dest($.path.js.dest))
        .pipe($.plugin.GulpUglify())
        .pipe($.plugin.rename("main.min.js"))
        .pipe($.gulp.dest($.path.js.dest))
}