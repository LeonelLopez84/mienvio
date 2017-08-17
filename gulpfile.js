const gulp = require('gulp'),
		jquery= require('gulp-jquery'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat');

gulp.task('sass', ()=>
		gulp.src('./resources/scss/*.scss')
			.pipe(sass({
					outputStyle:'expanded',
					sourceCommnets:true
				}))
			.pipe(autoprefixer({
				versions:['last 2 browsers']
			}))
			.pipe(gulp.dest('./public/css'))
	);

gulp.task('jquery', function () {
    return jquery.src({
        release: 2, //jQuery 2 
    })
    .pipe(gulp.dest('./resources/jquery'));
    // creates ./public/vendor/jquery.custom.js 
});

gulp.task('scripts', ()=>
	gulp.src([
			'./resources/jquery/jquery.custom.js',
			'./resources/js/*.js'
		])
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./public/js'))
);

gulp.task('default',()=>{
	gulp.watch('./resources/scss/*.scss',['sass']);
	gulp.watch('./resources/js/*.js',['scripts']);
});