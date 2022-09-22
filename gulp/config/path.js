const pathSrc = './src';
const pathDest = './public';

export const path = {
    root: pathDest,

    html: {
        src: pathSrc + '/*.html',
        watch: pathSrc + '/**/*.html',
        dest: pathDest
    },

    css: {
        src: pathSrc + '/css/*.css',
        watch: pathSrc + '/css/**/*.css',
        dest: pathDest + '/css'
    },

    scss: {
        src: pathSrc + '/scss/*.{scss, sass}',
        watch: pathSrc + '/scss/**/*.{scss, sass}',
        dest: pathDest + '/scss'
    },

    js: {
        src: pathSrc + '/js/*.js',
        watch: pathSrc + '/js/**/*.js',
        dest: pathDest + '/js'
    },

    img: {
        src: pathSrc + '/images/*.{png,jpg,jpeg,svg,gif}',
        watch: pathSrc + '/images/**/*.{png,jpg,jpeg,svg,gif}',
        dest: pathDest + '/images'
    },

    font: {
        src: pathSrc + '/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg,fon,dfont}',
        watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg,fon,dfont}',
        dest: pathDest + '/fonts'
    }
};