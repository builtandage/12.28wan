var gulp = require('gulp');
var gulpscss = require('gulp-sass');
var clean = require('gulp-clean-css')
var uglify = require('gulp-uglify');
var server = require("gulp-webserver")
var url = require('url');
var fs = require('fs');
var path = require('path');
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
gulp.task('server', function() {
    return gulp.src('work')
        .pipe(server({
            port: 8000,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname == '/favicon.ico') {
                    res.end('');
                    return;
                }
                if (pathname == '/') {
                    res.end(fs.readFileSync(path.join(__dirname, "work", "index.html")));
                } else {
                    res.end(fs.readFileSync(path.join(__dirname, "work", pathname)));
                }
            }
        }))
})