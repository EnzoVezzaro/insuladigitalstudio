var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./static/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./static'));
    console.log("Ready!");
});

gulp.task('sass:watch', function () {
  gulp.watch('./static/**/**/*.scss', ['sass']);
});
