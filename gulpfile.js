//DEPENDENCIAS
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const pump = require('pump');
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('default', ['sass'], function() {

    browserSync.init({
        server: "./www"
    });

    gulp.watch('./scss/**/*.scss', ['sass']); //OBS SASS FILES
    gulp.watch('./www/js/*.js', ['javascript']).on('change', browserSync.reload); //OBS JAVASCRIPT FILES
    gulp.watch("./www/*.html").on('change', browserSync.reload); //OBS HTML FILES
    gulp.watch('./template/*.html', ['htmlminify']);
});

//Minify HTML
gulp.task('htmlminify', function() {
    return gulp.src('./template/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./www'));
});
gulp.task('obsHtml', function() {
    gulp.watch('./template/*.html', ['htmlminify']);
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
    gulp.watch('./scss/**/*.scss', ['sass']);
});