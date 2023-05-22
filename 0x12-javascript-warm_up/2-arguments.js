#!/usr/bin/node
import { argv } from 'node:process';
/* CommonJs module 
 * CJS: Primarily used in server-side environments, such as Node.js. 
 *  It is not natively supported in browsers without bundlers or transpilers.
 * ESM: Supported in modern browsers and can be used without transpilation or bundling, 
 *  allowing for native module loading
 */
//const { argv } = require('node:process'); 
//const count = process.argv.length;
const count = argv.length;
console.log(count === 2 ? 'No argument' : count === 3 ? 'Argument found' : 'Arguments found');
