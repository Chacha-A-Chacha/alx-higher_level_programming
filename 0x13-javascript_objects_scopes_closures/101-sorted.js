#!/usr/bin/node
const { dict } = require('./101-data.js');
const Dictn = {};
for (const N in dict) {
    if (Dictn[dict[N]] === undefined) {
	Dictn[dict[N]] = [];
    }
    Dictn[dict[N]].push(N);
}
console.log(Dictn);


/*
 * imports a dictionary of occurences by user ID
 * computes a dictionary of user IDs bu occurence
 * 
 */

const dict =require('./101-data').dict;
const newDict = {};

Object.keys(dict).map((key, index) => {
    if (newDict[dict[key]] === undefined) {
        newDict[dict[key]] = [];
    }
    newDict[dict[key]].push(key)
});
