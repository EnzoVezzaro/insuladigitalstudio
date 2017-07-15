var gulp = require("gulp")
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('static/css/main.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('static/css'))
});

// Gulp watch syntax
gulp.task('watch', function(){
  gulp.watch('static/css/**/*.sass', ['sass']);
  // Other watchers
})
