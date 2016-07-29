'use strict'

const gulp = require('gulp'),
      connect = require('gulp-connect'),
      sass = require('gulp-sass')

const sassOptions = { includePaths: ['node_modules/bootstrap/scss/'] }

gulp.task('sass', function () {
   return gulp.src('./sass/**/*.scss')
     .pipe(sass(sassOptions).on('error', sass.logError))
     .pipe(gulp.dest('./.build/www/css/'));
});

gulp.task('build', ['sass'], function () {
   return gulp.src(['src/**/*'])
     .pipe(gulp.dest('.build/www/'));
});

gulp.task('serve', ['build'], (cb) => {
    connect.server({
        root: '.build/www/'
    });
})

gulp.task('default', ['serve'])
