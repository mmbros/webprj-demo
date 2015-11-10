/*
 * Process application html.
 */

var paths = require('./paths.js');
var gulp = require('gulp');

// Copy HTML files
gulp.task('html', function() {
  gulp.src(paths.html.src)
    // Perform minification tasks, etc here
    .pipe(gulp.dest(paths.html.dest));
});

// Watch HTML files
gulp.task('html:watch', function () {
  gulp.watch(paths.html.watch, ['html']);
});
