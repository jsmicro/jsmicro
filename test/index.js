'use strict';

// Creating modules list.
const modules = [
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

modules.forEach(name => {
    require(`jsmicro-${name}/test`);
});
