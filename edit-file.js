'use strict';

const fs = require('fs');

let file = process.argv.slice(2)[0];
let data = process.argv.slice(2)[1];


fs.readFile(`${process.cwd()}/files/${file}`, (err, data) => {
    if(err) {
        return console.log('error:', err);
    }
    console.log("RANDOM NUMBER: " + data.toString())
});

fs.writeFile(`${process.cwd()}/files/${file}`, Math.floor(Math.random() * 100), (err) => {
    if (err) {
        return console.error(err);
    }
});