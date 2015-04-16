'use strict';
var vm = require('vm');
var expect  = require('expect.js');
var objectStringify = require('./index');


var obj = {
    'fooString': 'bar bar',
    'fooInt': 1,
    'fooDate': new Date('2015-04-28T00:00:00.000Z'),
    'fooDate2': new Date(),
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

    it('Should return a string', function(){
        
        var s = objectStringify(obj, {beautify:true, indent_size:4});
        expect(s).to.be.a('string');
    });

    it('Should return an object', function(){
        var s = objectStringify(obj);
        var b = vm.runInThisContext('b = '+s+';');
        expect(b).to.be.a('object');
    });
});