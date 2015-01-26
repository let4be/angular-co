var gulp = require('gulp');
var plg = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'gulp.*'],
	replaceString: /\bgulp[\-.]/
});
var to5 = require('gulp-6to5');

gulp.task('default', function() {
	return gulp.src('./src/co.js')
		.pipe(plg.sourcemaps.init())		
		.pipe(to5())
		.pipe(plg.ngAnnotate())
		.pipe(gulp.dest('./dist/'))		
		.pipe(plg.rename('co.min.js'))
		.pipe(plg.uglify())
		.pipe(plg.sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/'));
});
