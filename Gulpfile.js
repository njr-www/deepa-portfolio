'use strict'

const gulp = require('gulp')
const markdown = require('gulp-markdown-it')

gulp.task('build', function() {
    return gulp
        .src('src/**/*')
        .pipe(markdown())
        .pipe(gulp.dest('.build/www/'))
})
