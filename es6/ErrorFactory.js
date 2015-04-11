'use strict';

function ErrorFactory(type='Unnamed') {

  let errorType = `${type.charAt(0).toUpperCase()}${type.slice(1)}Error`;

  class CustomError extends Error {

    constructor(message) {
      super();

      this.name = errorType;
      this.message = message;
    }
  }

  return function(message='Message not defined') {
    return new CustomError(message);
  }
}

module.exports = ErrorFactory;
