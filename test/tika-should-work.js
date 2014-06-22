"use strict";
var renamer = require('../');
var test = require('tape');
var fs = require('vinyl-fs');


test('Should able to read expected contents from PDF', function(t) {
  var stream = renamer();
  t.plan(2);

  stream.on('data', function(newFile) {
    t.ok(newFile.contents instanceof Buffer, 'file contents are a buffer');
    t.ok(String(newFile.contents).indexOf('Lorem') !== -1, 'shoud contain expected `Lorem` word');
  });

  fs.src(['./test/docs/lorem.pdf']).pipe(stream);
});