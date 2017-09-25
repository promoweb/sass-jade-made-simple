/*

Files Structure:

index.html
jade/
css/
scss/
js/

Node Package Install:

npm install gulp gulp-sass gulp-uglify gulp-jade browser-sync

*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var jade = require('gulp-jade');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
    gulp.src('scss/*.scss')
        .pipe(sass({ style: 'compact' }))
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'));
});

gulp.task('jade', function() {
    return gulp.src('jade/*.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(gulp.dest('./')); // tell gulp our output folder
});

gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "js/*.js", "./*.html"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['jade', 'sass', 'browser-sync'], function () {
    gulp.watch("jade/*.jade", ['jade']);
    gulp.watch("scss/*.scss", ['sass']);
});





