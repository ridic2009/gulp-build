export const isProd = process.argv.includes('--prod');
export const isDev = !process.argv.includes('--prod');

export const options = {
    htmlmin: {
        collapseWhitespace: isProd
    },

    csso: {
        sourceMap: true
    },

    imagemin: {
        verbose: true,
    },

    fonter: {
        formats: ["ttf", "woff", "eot", "svg"]
    }
};