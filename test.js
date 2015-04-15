'use strict';

var expect  = require('expect.js');
var objectStringify = require('./index');


var obj = {
    'fooString': 'bar bar',
    'fooInt': 1,
    'fooDate': new Date('2015-04-28T00:00:00.000Z'),
    'fooArray': [1, 2, 3, 'foo', 'bar'],
    'fooObject' : {
        'foo': 'bar'
    },
    'fooFunction': function(){
        var foo = 'bar bar';
        return 'foo';
    }
};


describe('Object-stringify testing', function(){

    it('Should return String', function(){
        
        var s = objectStringify(obj, {beautify:true, indent_size:4});
        
        expect(s).to.be.a('string');
    });
});