# LAB 03

***

### Author: Sarkis Aghazarian

### Links and Resources
* [repo](https://github.com/sarkis74/lab-03-401n12)
* [travis](https://travis-ci.org/sarkis74/lab-03-401n12-)

#### Description
This lab reading files using async callbacks and promises.
* Part1 of the assignment looks at reading and writing to a file using node's fs
* Part2 of the assignment looks at reading files asynchronously using callbacks, and also promises.

#### Running the app
* Clone repo and in terminal.
* Part 1 of assignment: 
  * type `node edit-file.js test.txt` in the terminal. The code should append a random number (generated through Math.random) to the end of the file, then console.log contents of `test.txt` before and after the edit.
* Part 2 of the assignment: 
  * type `node index.js 1.txt 2.txt 3.txt` in the terminal. Three files must be input in order for the code to run. The code should output an array of the contents of three files.
  * The `require` at the top is interchangeable among the `reader-fixed.js` `reader-promises.js` files.
  
#### Tests
* `npm test`
* Part 2 of assignment:
  * Tests to see if an error is provided if a bad file is input
  * Tests to see if 3 files have been read and are part of an array
