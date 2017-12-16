//DEPENDENCIAS
var gulp = require('gulp');
browserSync = require('browser-sync').create();
sass = require('gulp-sass');
autoprefixer = require('gulp-autoprefixer');
sourcemaps = require('gulp-sourcemaps');
concat = require('gulp-concat');
uglify = require('gulp-uglify');
pump = require('pump');
htmlmin = require('gulp-htmlmin');

// Static Server + watching scss/html files
gulp.task('default', ['htmlminify', 'sass', 'javascript'], function() {

    browserSync.init({
        server: "./www"
    });

    gulp.watch('./scss/**/*.scss', ['sass']); //OBS SASS FILES
    gulp.watch('./*.html', ['htmlminify']).on('change', browserSync.reload); //OBS HTML FILES
    gulp.watch('./www/js/*.js', ['javascript']).on('change', browserSync.reload); //OBS JAVASCRIPT FILES
});

//Minify HTML
gulp.task('htmlminify', function() {
    return gulp.src('./*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./www'));
});
gulp.task('obsHtml', function() {
    gulp.watch('./*.html', ['htmlminify']);
});

//Javascript Minify
gulp.task('javascript', function(cb) {
    pump([
            gulp.src('./www/js/*.js'),
            uglify(),
            gulp.dest('./www/js/dist')
        ],
        cb
    );
});

//Sass Compile
gulp.task('sass', function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass({ outputStyle: ['compact'] }).on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./www/css'))
        .pipe(browserSync.stream());
});
gulp.task('obsSass', function() {
    gulp.watch('./scss/*.scss', ['sass']);
});