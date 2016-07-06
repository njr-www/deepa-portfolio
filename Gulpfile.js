'use strict'

const gulp = require('gulp'),
      connect = require('gulp-connect')

gulp.task('serve', (cb) => {
    connect.server({
        root: 'src/'
    });
})

