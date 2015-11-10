var _src = 'src/';
var _dest = 'dist/';

module.exports = {
  root: _dest,

  sass: {
    watch: [_src + 'scss/**/*.{scss,sass}'],
    src: _src + 'scss/**/*.{scss,sass}',
    dest: _dest + 'css'
  }

};
