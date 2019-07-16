'use strict';

const fs = require('fs');

const filePath = process.argv[2];

// Reading the file and storing into a Buffer
const fileReceived  = fs.readFileSync(filePath, (err) => {
    if (err) console.error(err);
});

// Logging existing file
console.log(fileReceived.toString('utf8'));

// Creating new Buffer
const randomNumber = Math.random() * 100;
const newFile = Buffer.from(`${fileReceived} ${randomNumber}`);
console.log(newFile.toString('utf8'));

// Writing to file
fs.writeFile(filePath, newFile, (err) => {
    if (err) console.error(err);
    console.log('Finished saving!');
});