var gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync").create(),
  useref = require("gulp-useref"),
  uglify = require("gulp-uglify"),
  gulpIf = require("gulp-if"),
  postcss = require("gulp-postcss"),
  cssnano = require("cssnano"),
  autoprefixer = require("autoprefixer"),
  imagemin = require("gulp-imagemin"),
  htmlmin = require('gulp-htmlmin'),
  gulpSequence = require('gulp-sequence'),
  removeHtmlComments = require('gulp-remove-html-comments');

// Compiles sass
gulp.task("sass", function() {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

// Make production build of css and html
var plugins = [
  autoprefixer({ browsers: ["last 1 version"] }), 
  cssnano()
];
gulp.task("css-conc-min", function() {
  return gulp
    .src("src/*.html")
    .pipe(gulpIf("*.html", useref()))
    .pipe(gulpIf("*.css", postcss(plugins)))
    .pipe(gulpIf("*.html", removeHtmlComments()))
    .pipe(gulpIf("*.html", htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest("dist"));
});

gulp.task("image-min", function() {
  return gulp
    .src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
});

gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "src",
      index: "index.html" // Is only needed if it isn't named index.html
    },
    notify: false
  });
});

gulp.task("js-conc-min", function() {
  return gulp
    .src("src/index.html")
    .pipe(useref())
    .pipe(gulpIf("*.js", uglify()))
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", ["browserSync"], function() {
  gulp.watch("src/*.html", browserSync.reload);
  gulp.watch("src/sass/**/*.scss", ["sass"]);
  gulp.watch("src/js/**/*.js", ["js-conc-min"]);
  gulp.watch("src/css/**/*.css", ["css-conc-min"]);
  gulp.watch("src/images/*", ["image-min"]);
});

gulp.task("build",  ["sass", "image-min"], function() {
  return gulp
    .src("src/*.html")
    .pipe(gulpIf("index.html", useref()))
    .pipe(gulpIf("*.css", postcss(plugins)))
    .pipe(gulpIf("*.html", removeHtmlComments()))
    .pipe(gulpIf("*.html", htmlmin({collapseWhitespace: true})))
    .pipe(gulpIf("*.js", uglify()))
    .pipe(gulp.dest("dist"))
});
