const gulp = require('gulp')

const uglify = require('gulp-uglify')
const minifyCss = require('gulp-minify-css')
const changed = require('gulp-changed')
const imagemin = require('gulp-imagemin')
const htmlmin = require('gulp-htmlmin')

gulp.task('scripts', function () {
    return gulp.src('src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./scripts'))
});

gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('./'))
});

gulp.task('styles', function () {
    return gulp.src('src/styles/*.css')
        .pipe(minifyCss({ keepSpecialComments: 1, processImport: false }))
        .pipe(gulp.dest('./styles'))

});

gulp.task('imagemin', async function () {
    gulp.src('src/img/*.+(png|jpg|svg)')
        .pipe(changed('./img'))
        .pipe(imagemin())
        .pipe(gulp.dest('./img'));
});

gulp.task('default', gulp.series('styles', 'scripts', 'html', 'imagemin'));