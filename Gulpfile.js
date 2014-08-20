// Gulpfile.js
var gulp = require('gulp');
var nib = require('nib');

function loadModule(module) {
    global[module.replace(/^gulp-/, '')] = require(module);
}

require('matchdep').filterDev('gulp*').forEach(loadModule);

// -------------------------------------------------------------------------------------

// stylus + nib
gulp.task('nib', function(){
    gulp.src('app/assets/stylus/**/*.styl')
	    .pipe(stylus({ use: nib(), compress: true }))
	    .pipe(gulp.dest('app/assets/css'));
});

// task for development
gulp.task('dev', function () {
	gulp.src('dist/').pipe(clean()),
	gulp.watch(['app/assets/stylus/**/*.styl'], ['nib'])
});