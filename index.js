'use strict';

const fileReader = require('./lib/reader');


// Obtain and assert input
let files = process.argv.slice(2).map((el) => {
    return `${__dirname}/files/${el}`;
});

if( ! (files instanceof Array && files.length) ) {
    throw new Error('invalid input');
}

fileReader(files, (err,data) => {
    if ( err ) { throw err; }
    console.log('From Callback:', data);
});