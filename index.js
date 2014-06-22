'use strict';
var through = require('through2');
var merge = require('merge');
var PluginError = require('gulp-util/lib/PluginError');
var tika = require('tika');
var gutil = require('gulp-util');


module.exports = function(opt) {
  function extractMetadata(file, encoding, callback) {
    if (file.isNull()) {
      return this.emit('data', file);
    }

    if (file.isStream()) {
      return callback(new PluginError('gulp-tike-rename', 'Streaming not supported', {
        fileName: file.path,
        showStack: false
      }));
    }

    var options = merge(opt || {}, {
      ext: '.txt'
    });

    var dest = gutil.replaceExtension(file.path, options.ext);
    var self = this;
    tika.extract(file.path, function(err, text) {
      if (err) {
        return callback(new PluginError('gulp-tike-rename', 'Unable to parse the file', {
          fileName: file.path,
          showStack: false
        }));
      }
      file.contents = new Buffer(text);
      file.path = dest;
      self.push(file);
      callback();
    });

  }

  return through.obj(extractMetadata);
}
