/*
 * https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js
 * https://gist.github.com/DESIGNfromWITHIN/11383339#file-gulpfile-js
 * http://www.zell-weekeat.com/gulp-tutorial-2/
 * https://gist.github.com/austinpray/494b0b97c5b5e24f35eb
 */

var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
//var rename = require('gulp-rename');
//var minifycss = require('gulp-minify-css')
var browserSync = require("browser-sync").create();



var _cleaned = false;
var _src = 'src/';
var _dest = 'dist/';

var paths = {
  root: _dest,

  sass: {
    watch: [_src + 'scss/**/*.{scss,sass}'],
    src: _src + 'scss/**/*.{scss,sass}',
    dest: _dest + 'css'
  },

  html: {
    watch: [_src + 'html/**/*.html'],
    src: _src + 'html/**/*.html',
    dest: _dest + 'html'
  }

};

/*
 * Clean destination folder removing it completely
 */
gulp.task('clean', function(cb){
  if(!_cleaned){
    del(paths.root, cb);
    _cleaned = true;
  }
  else{
    return cb();
  }
});


/**
 * Compile SASS into CSS with gulp-sass + autoprefixer + sourcemaps
 */

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
    .pipe(browserSync.stream({match: '**/*.css'}));
});

/*
 * Process application html.
 */
// Copy HTML files
gulp.task('html', function() {
  return gulp.src(paths.html.src)
    // Perform minification tasks, etc here
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream({match: '**/*.html'}));
});


// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'html'], function() {

    browserSync.init({
      // Serve files from the app directory, with a specific index filename
      server: {
          baseDir: './dist',
          index: "html/sample.html"
      },
      port: 3000
    });

    gulp.watch(paths.sass.watch, ['sass']);
//    gulp.watch(paths.html.watch).on('change', browserSync.reload);
    gulp.watch(paths.html.watch, ['html']);
});


gulp.task('default', ['serve']);
