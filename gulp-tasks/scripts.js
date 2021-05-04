'use strict';

import { paths } from '../gulpfile.babel';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import browsersync from 'browser-sync';
import debug from 'gulp-debug';
import yargs from 'yargs';
const $ = require('gulp-load-plugins')();
import uglify from 'gulp-uglify';

const argv = yargs.argv,
  production = !!argv.production;

const options = {
  include: {
    hardFail: true,
    includePaths: ['src', 'src/js', 'node_modules'],
    separateInputs: true,
  },
};

gulp.task(
  'scripts',
  gulp.series(function eslintChecking() {
    return gulp
      .src(['*.js', '!_*.js'], { cwd: paths.scripts.src })
      .pipe(
        $.plumber(function (error) {
          console.log('Task compile-js has error', error.message);
          this.emit('end');
        })
      )
      .pipe($.include(options.include))
      .pipe($.plumber.stop())
      .pipe(
        gulpif(
          production,
          rename({
            suffix: '.min',
          })
        )
      )
      .pipe(gulpif(production, uglify()))
      .pipe(gulp.dest(paths.scripts.dist))
      .pipe(
        debug({
          title: 'JS files',
        })
      )
      .on('end', browsersync.reload);
  })
);
