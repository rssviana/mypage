var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('html', function(){
  return gulp.src('src/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('css', function(){
  return gulp.src('src/assets/css/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/css/'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('image', function(){
  return gulp.src('src/assets/images/*.*')
    .pipe(gulp.dest('dist/assets/images/'))
    .pipe(browserSync.reload({stream: true}));
});


gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch('src/assets/css/*.sass', ['css']);
    gulp.watch('src/assets/images/*.*', ['image']);
    gulp.watch('src/*.pug', ['html']);
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', [ 'image', 'html', 'css', 'server' ]);
          