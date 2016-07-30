'use strict'

const gulp = require('gulp'),
      connect = require('gulp-connect'),
      watch = require('gulp-watch'),
      sass = require('gulp-sass')

const sassOptions = { includePaths: ['node_modules/bootstrap/scss/'] }

gulp.task('build-sass', function () {
   return gulp.src('./sass/**/*.scss')
     .pipe(sass(sassOptions).on('error', sass.logError))
     .pipe(gulp.dest('./.build/www/css/'));
});

gulp.task('build-src', function () {
   return gulp.src(['src/**/*'])
     .pipe(gulp.dest('.build/www/'));
});

gulp.task('build', ['build-src', 'build-sass'], function () {
   return gulp.src(['src/**/*'])
     .pipe(gulp.dest('.build/www/'));
});

gulp.task('serve', ['build'], (cb) => {
    connect.server({
        root: '.build/www/'
    });

    watch('src/**/*', function() { gulp.start('build-src') })
    watch('sass/**/*', function() { gulp.start('build-sass') })
})

gulp.task('default', ['serve'])
