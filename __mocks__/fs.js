'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
    if( file.match(/bad/i) ) {
        cb('invalid file');
    }
    else {
        cb(undefined, new Buffer('file contents'));
    }
};