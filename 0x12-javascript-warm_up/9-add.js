#!/usr/bin/node
// function add (a, b) {
//   return a + b;
// }

// console.log(add(Number(process.argv[2]), Number(process.argv[3])));
const a = Number(process.argv[2]);
const b = parseInt(process.argv[3]);
if (isNaN(a , b)) {
    console.log('Please enter a number');
}
else {
    console.log(add(a, b));
}

function add (a, b) {
  return a + b;
}
