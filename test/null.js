'use strict';
var renamer = require('../');
var test = require('tape');
var Vinyl = require('vinyl');

var nullFile = new Vinyl({
  cwd: '/path/to/dir',
  base: '/path/to/dir/test',
  path: '/path/to/dir/test/sample.pdf',
  contents: null
});

test('Should leave null files as it is', function(t) {

  var stream = renamer();

  t.plan(6);
  stream.on('data', function(newFile) {
    t.ok(newFile, 'emits a file');
    t.ok(newFile.path, 'file has a path');
    t.ok(newFile.relative, 'file has relative path information');
    t.ok(!newFile.contents, 'file does not have contents');

    t.ok(newFile instanceof Vinyl, 'file is Vinyl');

    t.equals(newFile.contents, null);
  });

  stream.write(nullFile);

});