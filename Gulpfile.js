'use strict'

const gulp = require('gulp'),
      filter = require('gulp-filter'),
      connect = require('gulp-connect'),
      md = require('gulp-markdown-it'),
      watch = require('gulp-watch'),
      sass = require('gulp-sass')

const sassOptions = { includePaths: ['node_modules/bootstrap/scss/'] }

gulp.task('build', function () {
   const stream = gulp.src(['src/**/*'])
   const mdFilter = filter('**/*.md', {restore: true})
   const sassFilter = filter('**/*.scss', {restore: true})
   return stream
        .pipe(mdFilter)
            .pipe(md())
        .pipe(mdFilter.restore)
        .pipe(sassFilter)
            .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(sassFilter.restore)
        .pipe(gulp.dest('.build/www/'))
});

gulp.task('serve', ['build'], (cb) => {
    connect.server({
        root: '.build/www/'
    });

    watch('src/**/*', function() { gulp.start('build') })
})

gulp.task('default', ['serve'])
