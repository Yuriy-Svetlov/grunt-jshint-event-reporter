"use strict";

var grunt = require('grunt');

module.exports = {
	toString: function () {
		return __filename;
	},	

	reporter: function (results, data, opts) {
		var len = results.length;
		var str = '';
		var prevfile;

		opts = opts || {};

		results.forEach(function (result) {
			var file = result.file;
			var error = result.error;

			if (prevfile && prevfile !== file) {
				str += "\n";
			}
			prevfile = file;

			str += file  + ': line ' + error.line + ', col ' +
				error.character + ', ' + error.reason;

			if (opts.verbose) {
				str += ' (' + error.code + ')';
			}

			str += '\n';
		});

		if(len > 0){
			grunt.event.emit('jshint-error', results);
		}

		if (str) {
			process.stdout.write(str + "\n" + len + ' error' + ((len === 1) ? '' : 's') + "\n");
		}
	}
};