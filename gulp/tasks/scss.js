// SASS
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

// SCSS processing
export const scss = () => {
    const sass = gulpSass(dartSass);
    return $.gulp.src($.path.scss.src)
        .pipe(sass.sync())
        .pipe($.plugin.autoprefixer())
        .pipe($.plugin.if($.isProd, $.plugin.webpCss()))
        .pipe($.plugin.gulpGroupCssMediaQueries())
        .pipe($.plugin.if($.isProd, $.plugin.size({ title: "main.css" })))
        .pipe($.plugin.if($.isProd, $.gulp.dest($.path.css.dest)))
        .pipe($.plugin.rename({ suffix: ".min" }))
        .pipe($.plugin.csso())
        .pipe($.plugin.if($.isProd, $.plugin.size({ title: "main.min.css" })))
        .pipe($.gulp.dest($.path.css.dest))
};