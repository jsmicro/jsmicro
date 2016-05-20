'use strict';

// Creating modules list.
var modules = [
    'is-string',
    'is-regexp',
    'is-object',
    'is-number',
    'is-null',
    'is-function',
    'is-error',
    'is-empty',
    'is-defined',
    'is-date',
    'is-boolean',
    'is-array',
    'is-arguments',
    'foreach'
];

// Creating loaded modules list.
var loaded = {};

// Loading each modules.
modules.forEach(function(name) {
    var load = require('jsmicro-' + name);

    if ('function' === typeof load) {
        loaded[name.replace(/[\-]+/g, '')] = load;
    } else if ('[object Object]' === toString.call(load)) {
        Object.keys(load).forEach(function(key) {
            loaded[key] = load[key];
        });
    }
});

// Exporting modules.
module.exports = loaded;
