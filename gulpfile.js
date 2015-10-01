var gulp = require('gulp'),
	concat = require('gulp-concat');
 
gulp.task('scripts', function() {
  return gulp.src(['./_Assets/css/reset.css', 
  		'./_Assets/css/template.css', 
  		'./_Assets/css/flex.css'])
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./_Assets/css/'));
});

gulp.task('default', ['scripts']);