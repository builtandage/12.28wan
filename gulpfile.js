var gulp = require('gulp');
var gulpscss = require('gulp-sass');
var clean = require('gulp-clean-css')
var uglify = require('gulp-uglify');
gulp.task('aaaa', function() {
    gulp.src('./work/scss/*.scss')
        .pipe(gulpscss())
        .pipe(clean())
        .pipe(gulp.dest('./work/css'))
})
gulp.task('listen', function() {
    return gulp.watch('./work/scss/*.scss', gulp.series('aaaa'));
})
gulp.task('listen1', function() {
    return gulp.watch('./work/js/*.js', gulp.series('js'));
})
gulp.task('js', function() {
    gulp.src('./work/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./work/js'))
})