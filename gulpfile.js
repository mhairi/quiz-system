var gulp = require('gulp'),
    pump = require('pump'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    annotate = require('gulp-ng-annotate');

var paths = {
    scripts: [
        'bower_components/angular/angular.js',
        'js/**/*.js',
    ],
};

gulp.task('js', function (cb) {
    pump([
        gulp.src(paths.scripts),
        concat('app.js'),
        gulp.dest('app/js/dist/')
    ], cb)
});

gulp.task('js-min', function (cb) {
    pump([
        gulp.src(paths.scripts),
        annotate(),
        concat('app.js'),
        uglify(),
        gulp.dest('app/js/dist/')
    ], cb)
});

gulp.task('watch', function (cb) {
    gulp.watch(paths.scripts, ['js']);
});

gulp.task('release', ['js-min']);

gulp.task('default', ['js']);
