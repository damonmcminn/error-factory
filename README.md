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

// DEFAULTS
var defaultError = ErrorFactory();

defaultError();
// => { [UnnamedError: Message not defined] name: 'UnnamedError', message: 'Message not defined' }
```
