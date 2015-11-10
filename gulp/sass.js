/*
 * Process application styles.
 */

var paths = require('./paths.js');
var gulp = require('gulp');
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')

// Compile SASS into CSS
gulp.task('sass', function() {
  gulp.src(paths.sass.src)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.sass.dest))
});
