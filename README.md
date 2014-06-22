# gulp-tika-extractor [![NPM version][npm-image]][npm-url]  [![Build status][travis-image]][travis-url]
> Document extractor using Tika for Gulp

## Usage

First, install `gulp-tika-extractor` as a development dependency:

```shell
npm install --save-dev gulp-tika-extractor
```

Then, add it to your `gulpfile.js`:

```javascript
var extract = require('gulp-tika-extractor');

gulp.task('extract pdf document to txt', function(){
  gulp.src(['file.pdf'])
    .pipe(extract())
    .pipe(gulp.dest('extracted/'));
});
```


[travis-url]: http://travis-ci.org/faizhasim/gulp-tika-extractor
[travis-image]: https://secure.travis-ci.org/faizhasim/gulp-tika-extractor.svg?branch=master
[npm-url]: https://npmjs.org/package/gulp-tika-extractor
[npm-image]: https://badge.fury.io/js/gulp-tika-extractor.svg
