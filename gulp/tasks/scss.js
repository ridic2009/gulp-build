// SASS
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

// SCSS processing
export const scss = () => {
    const sass = gulpSass(dartSass);
    return $.gulp.src($.path.scss.src, { sourcemaps: $.isDev })
        .pipe(sass.sync())
        .pipe($.plugin.autoprefixer())
        .pipe($.plugin.if($.isProd, $.plugin.webpCss()))
        .pipe($.plugin.if($.isProd, $.plugin.gulpGroupCssMediaQueries()))
        .pipe($.plugin.if($.isProd, $.plugin.size({ title: "main.css" })))
        .pipe($.plugin.if($.isProd, $.gulp.dest($.path.css.dest, { sourcemaps: $.isDev })))
        .pipe($.plugin.if($.isProd, $.plugin.rename({ suffix: ".min" })))
        .pipe($.plugin.if($.isProd, $.plugin.csso()))
        .pipe($.plugin.if($.isProd, $.plugin.size({ title: "main.min.css" })))
        .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.isDev }))
};