var gulp = require('gulp');
var gulpscss = require('gulp-sass');
var clean = require('gulp-clean-css')

gulp.task('aaaa', function() {
    gulp.src('./work/scss/*.scss')
        .pipe(gulpscss())
        .pipe(clean())
        .pipe(gulp.dest('./work/css'))
})
gulp.task('listen', function() {
    return gulp.watch('./work/scss/*.scss', gulp.series('aaaa'));
})