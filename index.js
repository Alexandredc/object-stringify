'use strict';

var beautify = require('js-beautify').js_beautify;

/**
 * Convert Object into string
 * @param {Object} object
 * @param {Object} opt
 */
module.exports = function objectStringify(object, opt) {
    
    opt = opt || {};

    var o = JSON.stringify(object, function(key, value) {

        if(typeof value === 'function'){
            return value.toString()
                  .replace('"', '\"')                  
                  .replace(/(\r)/g, '')
                  .replace(/(\n)/g, '')
                  .replace(/(\t)/g, '');
        }
        else {
           return value;
        }
    });

    o = o.replace(/"function/g, 'function')
         .replace(/}"/g, '}');
    
    if (opt.beautify) {
        o = beautify(o, { indent_size: opt.indent_size || 4 });
    }

    return o;
};