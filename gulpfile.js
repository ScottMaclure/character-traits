// dicey gulp file.

var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
// @see https://github.com/terinjokes/gulp-uglify
var uglify = require('gulp-uglify');

var paths = {
	scripts: [
		'javascripts/*.js',
	],
	reactJsx: [
		'javascripts/jsx/**/*.js'
	]
};

gulp.task('react', function () {
    return gulp.src(paths.reactJsx)
        .pipe(react())
        .pipe(gulp.dest('javascripts/build'));
});

gulp.task('browserify', [ 'react' ], function () {
	// Single entry point to browserify
	return gulp.src('javascripts/main.js')
		.pipe(browserify({
			insertGlobals: false,
			debug: false
		}))
		.pipe(rename('bundle.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public'));
});

// Rerun the task when a file changes
gulp.task('watch', [ 'browserify' ], function () {
	gulp.watch(paths.reactJsx, [ 'browserify' ]);
	gulp.watch(paths.scripts, [ 'browserify' ]);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', [ 'watch' ]);