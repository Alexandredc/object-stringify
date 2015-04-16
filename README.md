# Object-stringify

Allow to convert Javascript Object into string, including functions and date

## Install
```shell
$ npm install object-stringify --save
```

## Usage

```js
var objectStringify = require('object-stringify');

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

var objectString = objectStringify(obj, {
    beautify:true, 
    indent_size:4}
);

console.log(objectString);

/**
=> print in console
{
    'fooString': 'bar bar',
    'fooInt': 1,
    'fooDate': new Date('2015-04-28T00:00:00.000Z'),
    'fooDate2': new Date('2015-04-16T10:25:00.027Z'),
    'fooArray': [1, 2, 3, 'foo', 'bar'],
    'fooObject': {
        'foo': 'bar'
    },
    'fooFunction': function() {
        var foo = 'bar bar';
        return 'foo';
    }
}
**/
```

## API
### objectString(object, [options])
#### options :
##### beautify
Type: `boolean` , Default: `false`
##### indent_size
Type: `int` ,  Default: `4`
