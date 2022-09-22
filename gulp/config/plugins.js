import browserSync from 'browser-sync';                              // Live translation for your code
import gulpIf from 'gulp-if';                                        // If operator
import newer from 'gulp-newer';                                      // For passing through only those source files that are newer than corresponding destination files.
import fileInclude from 'gulp-file-include';                         // Allow to use html-templates
import htmlmin from 'gulp-htmlmin';                                  // Minify HTML
import csso from 'gulp-csso';                                        // Minify CSS
import GulpUglify from 'gulp-uglify';                                // Minify JavaScrpit
import webp from 'gulp-webp';                                        // Working with webp image format
import webpHtml from 'gulp-webp-html';                               // Working with webp image format in HTML
import webpCss from 'gulp-webp-css';                                 // Working with webp image format in CSS
import size from 'gulp-size';                                        // Shows file weight
import gulpGroupCssMediaQueries from 'gulp-group-css-media-queries'; // Group All media queries at the end of CSS file
import rename from 'gulp-rename';                                    // Rename files 
import autoprefixer from 'gulp-autoprefixer';                        // Add importants vendor's prefix to your CSS code
import imagemin from 'gulp-imagemin';                                // Image compression
import fonter from 'gulp-fonter';                                    // Converting fonts
import ttf2woff2 from 'gulp-ttf2woff2';                              // Converting fonts too
import zipPlugin from 'gulp-zip';                                    // Save different files into the archive
import { deleteAsync } from "del";                                   // Delete files



export const plugins = {
    browserSync: browserSync,
    if: gulpIf,
    newer: newer,
    fileInclude: fileInclude,
    htmlmin: htmlmin,
    webpHtml: webpHtml,
    csso: csso,
    webp: webp,
    webpCss: webpCss,
    size: size,
    gulpGroupCssMediaQueries: gulpGroupCssMediaQueries,
    rename: rename,
    autoprefixer: autoprefixer,
    imagemin: imagemin,
    fonter: fonter,
    ttf2woff2: ttf2woff2,
    deleteAsync: deleteAsync,
    zipPlugin: zipPlugin,
    GulpUglify: GulpUglify,
}