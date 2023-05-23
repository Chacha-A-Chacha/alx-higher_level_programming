#!/usr/bin/node 

const callMeMoby = require('./101-call_me_moby').callMeMoby
callMeMoby(3, function() {
    console.log('Common JS is fun')
})

import { call_me_moby } from './101-call_me_moby';
call_me_moby(3, function() {
    console.log('C is fun ')