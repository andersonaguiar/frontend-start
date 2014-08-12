// Gulpfile.js
var gulp = require('gulp');
var nib = require('nib');

function loadModule(module) {
    global[module.replace(/^gulp-/, '')] = require(module);
}

require('matchdep').filterDev('gulp*').forEach(loadModule);

// -------------------------------------------------------------------------------------

gulp.task('nib', function(){
    gulp.src('app/assets/stylus/**/*.styl')
        .pipe(stylus({ use: nib(), compress: true }))
        .pipe(gulp.dest('app/assets/css'));
});

gulp.task('w', function () {
    gulp.watch(['app/assets/stylus/**/*.styl'], ['nib']);
});