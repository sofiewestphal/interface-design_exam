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
  removeHtmlComments = require('gulp-remove-html-comments');

// Compiles sass
gulp.task("sass", function() {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

// Make production build of css
gulp.task("css-conc-min", function() {
  var plugins = [autoprefixer({ browsers: ["last 1 version"] }), cssnano()];
  return gulp
    .src("src/*.html")
    .pipe(useref())
    .pipe(gulpIf("*.css", postcss(plugins)))
    .pipe(gulp.dest("dist"));
});

// Copy fonts
// Only needed if we want to host our own font files.
// gulp.task('copy-fonts', function() {
// return gulp.src('src/**/*.otf')
// .pipe(gulp.dest('dist'))
// })

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

gulp.task("move-html", function() {
  return gulp.src('src/*.html')
  .pipe( removeHtmlComments() )
  .pipe(gulp.dest('dist'));
})

gulp.task("build",  ["sass", "css-conc-min", "image-min", "move-html"], function() {
    gulp.start("js-conc-min");
    console.log("build completed");
  }
);
