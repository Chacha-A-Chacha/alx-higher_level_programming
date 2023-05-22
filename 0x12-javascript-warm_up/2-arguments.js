#!/usr/bin/node
import { argv } from 'node:process';
//const { argv } = require('node:process');
//const count = process.argv.length;
const count = argv.length;
console.log(count === 2 ? 'No argument' : count === 3 ? 'Argument found' : 'Arguments found');
