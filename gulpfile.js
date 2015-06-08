var gulp = require('gulp');
var plg = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'gulp.*'],
	replaceString: /\bgulp[\-.]/
});
var babel = require('gulp-babel');

gulp.task('default', function() {
	return gulp.src('./src/co.js')
		.pipe(plg.sourcemaps.init())		
		.pipe(babel())
		.pipe(plg.ngAnnotate())
		.pipe(gulp.dest('./dist/'))		
		.pipe(plg.rename('co.min.js'))
		.pipe(plg.uglify())
		.pipe(plg.sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/'));
});
