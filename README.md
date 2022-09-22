# Gulp Assembly and how to use it
![version](https://img.shields.io/github/package-json/v/ridic2009/gulp-build?style=for-the-badge)

___
### Navigation

1. **[Get Started](#get-started)**
2. **[Commands](#commands)**
3. **[What's can this assembly](#whats-can-this-assembly)** 
4. **[Plugins list](#plugins-list)**
5. **[File and folder Structure](#file-and-folder-structure)**
6. **[Conclusion](#conclusion)**
___

### Get Started

For start your work with this build you can run this command in your IDE:


```
| git clone <this repo>
```
When you add this repository on your local machine, use:

```
| npm install
```

After download all files and dependences you can use all commands of this assembly

___

### Commands


**`npm run dev`** — Start your assembly in developer mode. Unavailable benefits, but working faster

**`npm run build`** — Start building your project, converting all fonts, compressing all images and minify the main files

**`npm run deploy`** — Put all project into the zip archive

**`npm run validate`** — Inspect your main HTML file at a semantic errors. Run this command only if you have HTML files at __/public__ folder

___

### What's can this assembly

> + Compile SCSS code to CSS, support SASS syntax
> + Compress images in png, jpg, svg and etc formats
> + Minify HTML CSS and JS files
> + **[`npm run validate`](#commands)** for inspect your main HTML file 
> + Use the HTML-templates in your project **`@@include("pathToFile")`**
___

### Plugins list

!!! notice This list may will be changed with time

| Plugin | What's doing (briefly) |
| ------ | ------------ |
| browsersync | Time-saving synchronised browser testing |
| imagemin | Compressing images |
| htmlmin | Minify HTML |
| csso | Minify CSS |
| gulpUglify | Minify JavaScript |
| webp | Work with webp image format |
| webpHTML | Add support webp in HTML, replaces `img` on `picture` |
| WebpCSS | Add support webp in CSS |
| size | Display the size of your project and files |
| fileInclude | Allow to use html-templates |
| autoprefixer | Add importants vendor's prefix to your CSS code |
| rename | Rename files |
| fonter | Work with fonts |
| ttf2woff2 | Convert ttf2 format in woff2 |
| gulpIf | If operator |
| gulpGroupCssMediaQueries | Group All media queries at the end of CSS file |
| zipPlugin | Add your project into the archive |
| del | Delete files |
| newer | For passing through only those source files that are newer than corresponding destination files. | 

___

### File and folder Structure

```
📦 gulp-build
 ┣ 📂 .vscode                 ~ Visual Studio Code options
 ┣ 📂 gulp                    ~ Config and tasks for gulpfile.js
 ┣ 📂 src                     ~ Source folder
 ┃ ┣ 📂 fonts                 ~ Folder for fonts storage
 ┃ ┣ 📂 html                  ~ Folder for HTML-parts storage
 ┃ ┣ 📂 images                ~ Folder for images storage
 ┃ ┣ 📂 js                    ~ Folder for Javascript files storage
 ┃ ┃ ┗ 📜 main.js             ~ Main file for scripts
 ┃ ┣ 📂 scss                  ~ Folder for SCSS files storage
 ┃ ┃ ┣ 📂 components          ~ Folder for SCSS-components storage 
 ┃ ┃ ┣ 📜 main.scss           ~ Main SCSS file
 ┃ ┃ ┗ 📜 _global.scss        ~ This file stores the global styles
 ┃ ┗ 📜 index.html            ~ No comments
 ┣ 📜 gulpfile.js             ~ The main file for working Gulp
 ┣ 📜 package.json            ~ Assembly options and downloaded packets
 ┗ 📜 README.md               ~ Documentation
```
___

### Conclusion

This is not the final option, there is will be change, when I find whats should be change. I planing add snippets, pug support, rethink files structure, maybe add new plugins and delete usless and etc.
___
_Made by daniels_



