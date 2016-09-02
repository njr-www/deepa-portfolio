'use strict'

const gulp = require('gulp')
const markdown = require('gulp-markdown-it')
const tap = require('gulp-tap')

function applyTemplate(templateFile) {
    const fs = require('fs')

    return tap(function(vinyl) {
            const template = fs.readFileSync(templateFile)
                               .toString().split('@@CONTENT@@')
            const begin = template[0], end = template[1]
            vinyl.contents = Buffer.concat([
                new Buffer(begin), vinyl.contents, new Buffer(end)])
        })
}

gulp.task('build', function() {
    return gulp
        .src('src/**/*')
        .pipe(markdown())
        .pipe(applyTemplate('template.html'))
        .pipe(gulp.dest('.build/www/'))
})

gulp.task('serve', ['build'], function() {
    const connect = require('gulp-connect')
    const watch = require('gulp-watch')

    connect.server({ root: '.build/www' })
    watch('src/**/*', function() { gulp.start('build') } )
})
