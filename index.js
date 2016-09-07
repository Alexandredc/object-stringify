'use strict';

var beautify = require('js-beautify').js_beautify;

/**
 * Convert Object into string
 * @param {Object} object
 * @param {Object} opt
 */
module.exports = function objectStringify(object, opt) {
    
    opt = opt || {};

    // Object stringification
    var o = JSON.stringify(object, function(key, value) {

        var dateRegex = /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/;

        if(dateRegex.test(value)){
            return "new Date('" + value + "')";
        }

        else if(typeof value === 'function'){
            return value.toString()
                  .replace('"', '\'')
                  .replace(/(\r)/g, '')
                  .replace(/(\n)/g, '')
                  .replace(/(\t)/g, '');
        }
        else {
           return value;
        }
    });

    // Remove quote that surrounds functions
     o = o.replace(/"(function.*?})"/g, '$1');

    // Remove quote that surrounds date object
    var dateObjRegex = /('|")new Date\('[0-Z-.]+'\)('|")/g;
    var dates = o.match(dateObjRegex);

    if(dates){
        dates.forEach(function(date){
            o = o.replace(date, date.slice(1, -1));
        });
    }

    // Apply options
    if (opt.beautify) {
        o = beautify(o, { indent_size: opt.indent_size || 4 });
    }

    return o;
};