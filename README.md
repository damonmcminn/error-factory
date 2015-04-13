# simple-error-factory
Simply create subclassed Error functions

### Installation
```javascript
npm install --save simple-error-factory
```

### Usage
```javascript

var ErrorFactory = require('simple-error-factory');

// create a custom Error function
var FooError = ErrorFactory('foo');

try {
  // is a function not a constructor
  throw FooError('bar');
} catch (err) {
  console.log(err.name);
  // => FooError
  console.log(err.message);
  // => bar;
}

// OPTIONAL extra properties
var NaughtyError = ErrorFactory('naughty');
var err = NaughtyError('tut tut', {code: 401});
err.name // => NaughtyError
err.message // => tut tut
err.code // => 401

// DEFAULTS
var createDefaultError = ErrorFactory();
var err = createDefaultError();

err.name // => UnnamedError
err.message // => Message not defined
```
