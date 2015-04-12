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

});
