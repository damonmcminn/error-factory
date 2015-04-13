'use strict';
module.exports = ErrorFactory;

import { install } from 'source-map-support';
install();

function ErrorFactory(type='Unnamed') {

  type = (typeof type === 'string') ? type : 'Unnamed';

  let errorType = `${type.charAt(0).toUpperCase()}${type.slice(1)}Error`;

  class CustomError extends Error {

    constructor(message) {
      super();

      this.name = errorType;
      this.message = message;
    }
  }

  return function(message='Message not defined', props) {
    let err = new CustomError(message);

    if (props) {
      for (let [key, val] of getKeyValuePairs(props)) {
        if (isAllowedProperty(key)) {
          err[key] = val;
        }
      }
    }

    return err;

  }
}


// PRIVATE HELPER FUNCTIONS
function getKeyValuePairs(obj) {
  return Object.keys(obj)
    .map(key => [key, obj[key]]);
}

function isAllowedProperty(key) {
  return ['name', 'message'].every(val => key !== val)
}
