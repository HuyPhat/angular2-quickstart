/**
 * Created by phathuy on 8/31/16.
 */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build:sass', function () {
    return gulp.src('./app/components/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(function(file){
            return file.base;
        }));
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/components/**/*.scss', ['build:sass']);
});

gulp.task('dev', ['build:sass', 'sass:watch']);