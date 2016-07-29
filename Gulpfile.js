'use strict'

const gulp = require('gulp'),
      connect = require('gulp-connect'),
      sass = require('gulp-sass')

gulp.task('build', function () {
   return gulp.src(['src/**/*'])
     .pipe(gulp.dest('.build/www/'));
});

gulp.task('serve', ['build'], (cb) => {
    connect.server({
        root: '.build/www/'
    });
})

gulp.task('default', ['serve'])
