var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass')(require('sass'));
var git = require('simple-git');
var cleanCSS = require('gulp-clean-css');

gulp.task('delStyle', function() {
  return gulp.src('./css/*', { read: false, allowEmpty: false })
    .pipe(clean());
});

// Generamos sass
gulp.task('sass', function() {
  return gulp.src('./sass/todo.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

// Comprimimos el css para "optimizar"
gulp.task('comprimir', function() {
  return gulp.src('css/todo.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('css'));
});

gulp.task('gitHub', function (done) {
    git()
      .add('-A')
      .commit('Subimos proyecto')
      .push('origin', 'main', function (err) {
        if (err) {
          console.error(err);
          done(err);
        } else {
          done();
        }
      });
  });

// Tarea:
gulp.task('default', gulp.series('delStyle', 'sass', 'comprimir', 'gitHub'));