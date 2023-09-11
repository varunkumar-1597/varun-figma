const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

// Define a task to compile Sass to CSS
function compileSass() {
  return gulp.src('src/**/*.sass') // Source folder for your Sass files
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css')) // Destination folder for the compiled CSS
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css')) // Destination folder for the compiled CSS
}

// Watch for changes in Sass files
function watch() {
  gulp.watch('src/**/*.sass', compileSass);
}

// Export the tasks
exports.compileSass = compileSass;
exports.watch = watch;
