/*
 * Process application styles.
 */

var paths = require('./paths.js');
var gulp = require('gulp');
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')

//var rename = require('gulp-rename');
//var minifycss = require('gulp-minify-css')

// Compile SASS into CSS
gulp.task('sass', function() {
  return gulp.src(paths.sass.src)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.sass.dest))

//    .pipe(rename({suffix: '.min'}))
//    .pipe(minifycss())
//    .pipe(gulp.dest(paths.sass.dest))
});


// Watch SASS files
gulp.task('sass:watch', function () {
  gulp.watch(paths.sass.watch, ['sass']);
});
