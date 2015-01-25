var gulp = require('gulp');
var plg = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'gulp.*'],
	replaceString: /\bgulp[\-.]/
});

gulp.task('default', function() {
	return gulp.src('./src/co.js')
		//.pipe(plg.plumber())
		.pipe(plg.sourcemaps.init())		
		.pipe(plg.traceur())
		.pipe(plg.ngAnnotate())
		.pipe(gulp.dest('./dist/'))		
		.pipe(plg.rename('co.min.js'))
		.pipe(plg.uglify())
		.pipe(plg.sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/'));
});