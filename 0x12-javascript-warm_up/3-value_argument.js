#!/usr/bin/node
const argv = require('node:process');
if (argv[2] === undefined) {
    console.log('No argument')

}
else {
    console.log(argv[2]);
}


console.log(typeof process.argv[2] === 'undefined' ? 'No argument' : process.argv[2]);
