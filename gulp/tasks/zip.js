export const zip = () => {
    $.plugin.deleteAsync(`./*.{zip,7z,rar}`)
    return $.gulp.src(`${$.path.root}/**/*.*`, {})
        .pipe($.plugin.zipPlugin(`${$.path.root}.zip`))
        .pipe($.gulp.dest('./'))
}