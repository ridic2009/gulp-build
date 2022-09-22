import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { isDev, isProd, options } from './gulp/config/options.js';
import { plugins } from './gulp/config/plugins.js';


global.$ = {
    isProd: isProd,
    isDev: isDev,
    gulp: gulp,
    plugin: plugins,
    path: path,
    options: options
};


// Tasks connecting
import { server } from './gulp/tasks/server.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { clear } from './gulp/tasks/clear.js';
import { js } from './gulp/tasks/js.js';
import { img } from './gulp/tasks/img.js';
import { font } from './gulp/tasks/font.js';
import { zip } from './gulp/tasks/zip.js';


// Watcher
const watching = () => {
    gulp.watch($.path.html.watch, html).on('all', $.plugin.browserSync.reload);
    gulp.watch($.path.scss.watch, scss).on('all', $.plugin.browserSync.reload);
    gulp.watch($.path.js.watch, js).on('all', $.plugin.browserSync.reload);
    gulp.watch($.path.img.watch, img).on('all', $.plugin.browserSync.reload);
    gulp.watch($.path.font.watch, font).on('all', $.plugin.browserSync.reload);
};


const mainTasks = gulp.parallel(html, scss, js, img, font);

const dev = gulp.series(clear, mainTasks, gulp.parallel(watching, server));
const build = gulp.series(clear, mainTasks);
const deploy = gulp.series(clear, mainTasks, zip);

export { html }
export { clear };
export { dev };
export { build };
export { deploy }

gulp.task('default', dev);
