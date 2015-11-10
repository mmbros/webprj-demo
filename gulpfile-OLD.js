var gulp = require('gulp');
var requireDir = require('require-dir');
requireDir('./gulp');

gulp.task('build', [
  'sass',
  'html'
]);

gulp.task('watch', [
  'sass:watch',
  'html:watch'
]);

// gulp.task('default', ['build', 'server', 'watch']);
gulp.task('default', ['build', 'watch']);
