#!/usr/bin/node 
//CommonJS Syntax
const callMeMoby = require('./101-call_me_moby').callMeMoby
callMeMoby(3, function() {
    console.log('Common JS is fun')
})

const { call_me_moby }  = require('./101-call_me_moby');
call_me_moby(3, function() {
    console.log('C is fun ');
})
