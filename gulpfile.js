var gulp = require('gulp'),
    pump = require('pump'),
    serve = require('gulp-serve'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    concatCss = require('gulp-concat-css'),
    cleanCss = require('gulp-clean-css'),
    annotate = require('gulp-ng-annotate');

var paths = {
    scripts: [
        'bower_components/angular/angular.js',
        'js/**/*.js',
    ],
    styles: [
        'styles/**/*.css'
    ],
    fonts: [
        'fonts/*'
    ]
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

gulp.task('css', function (cb) {
    pump([
        gulp.src(paths.styles),
        concatCss('app.css'),
        gulp.dest('app/css/')
    ], cb);
});

gulp.task('css-min', function (cb) {
    pump([
        gulp.src(paths.styles),
        concatCss('app.css'),
        cleanCss(),
        gulp.dest('app/css/')
    ], cb);
});

gulp.task('files', function (cb) {
    pump([
        gulp.src(paths.fonts),
        gulp.dest('app/fonts/')
    ], cb)
})

gulp.task('watch', ['serve'], function (cb) {
    gulp.watch(paths.scripts, ['js']);
    gulp.watch(paths.styles, ['css']);
});

gulp.task('serve', ['js', 'css', 'files'], serve('app'));

gulp.task('release', ['js-min', 'css-min']);

gulp.task('default', ['js', 'css']);
