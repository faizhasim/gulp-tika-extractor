'use strict';
var renamer = require('../');
var test = require('tape');
var Vinyl = require('vinyl');
var Stream = require('stream');

var fileWithError = new Vinyl({
  cwd: '/path/to/dir',
  base: '/path/to/dir/test',
  path: '/path/to/dir/test/sample.pdf',
  contents: new Stream()
});

test('Should leave null files as it is', function(t) {

  var stream = renamer();
  t.plan(5);

  stream.on('data', function() {
    t.fail('we shouldn\'t have gotten here');
  });

  stream.on('error', function(e) {
    t.ok(e instanceof Error, 'argument should be of type error');
    t.equal(e.plugin, 'gulp-tike-rename', 'error is from gulp-uglify');
    t.equal(e.fileName, fileWithError.path, 'error reports correct file name');
    t.ok(e.stack, 'error has a stack');
    t.false(e.showStack, 'error is configured to not print the stack');
  });

  stream.write(fileWithError);

});