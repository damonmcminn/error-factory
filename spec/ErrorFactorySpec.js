var ErrorFactory = require('../lib/ErrorFactory');

describe('ErrorFactory', function() {

  it('should return a function that returns Error objects', function() {

    var defaultError = ErrorFactory();
    expect(defaultError).toEqual(jasmine.any(Function));    

  });

  it('should return Error objects with default name if not supplied or not a string', function() {

    var errors = [
      ErrorFactory(),
      ErrorFactory(12345),
      ErrorFactory({}),
      ErrorFactory(new Error()),
      ErrorFactory([]),
      ErrorFactory(true),
      ErrorFactory(null)
    ];

    errors.forEach(function(err) {
      expect(err().name).toBe('UnnamedError');
    });

  });

  it('should return Error objects with default message', function() {

    var err = ErrorFactory();
    expect(err().message).toBe('Message not defined');

  });

  it('should create custom Error names', function() {
    
    var foo = ErrorFactory('foo');
    var bar = ErrorFactory('bar');

    expect(foo().name).toBe('FooError');
    expect(bar().name).toBe('BarError');

  });

  it('should attach arbitrary properties to the Error object', function() {

    var arbitraryProperties = {foo: 'foo', bar: []};
    var err = ErrorFactory('customProps')('custom error', arbitraryProperties);

    expect(err.foo).toBe('foo');
    expect(err.bar).toEqual(jasmine.any(Array));

  });

  it('should not overwrite name or message', function() {

    var nameAndMessage = {name: 'overwritten', message: 'overwritten'};
    var err = ErrorFactory()('no message', nameAndMessage);

    expect(err.name).toBe('UnnamedError');
    expect(err.message).toBe('no message');

  });

});
