#!/usr/bin/node

/* 
 * concats 2 files 
 */

const fs = require('fs');
const a = fs.readFileSync(process.argv[2], 'utf8');
const b = fs.readFileSync(process.argv[3], 'utf8');
fs.writeFileSync(process.argv[4], a + b);



const finalFile = require('fs');
const firstFile = fs.readFileSync(process.argc[2]).toString();
const secondFile = fs.readFileSync(process.argv[3]).toString();

fs.writeFileSync(process.argv[4], (firstFile + secondFile));