export const server = () => {
    $.plugin.browserSync.init({
        server: {
            baseDir: $.path.root
        },
        notify: false
    })
};