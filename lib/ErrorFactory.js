'use strict';

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _install = require('source-map-support');

module.exports = ErrorFactory;

_install.install();

function ErrorFactory() {
  var type = arguments[0] === undefined ? 'Unnamed' : arguments[0];

  type = typeof type === 'string' ? type : 'Unnamed';

  var errorType = '' + type.charAt(0).toUpperCase() + '' + type.slice(1) + 'Error';

  var CustomError = (function (_Error) {
    function CustomError(message) {
      _classCallCheck(this, CustomError);

      _get(Object.getPrototypeOf(CustomError.prototype), 'constructor', this).call(this);

      this.name = errorType;
      this.message = message;
    }

    _inherits(CustomError, _Error);

    return CustomError;
  })(Error);

  return function (_x2, props) {
    var message = arguments[0] === undefined ? 'Message not defined' : arguments[0];

    var err = new CustomError(message);

    if (props) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = getKeyValuePairs(props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2);

          var key = _step$value[0];
          var val = _step$value[1];

          if (isAllowedProperty(key)) {
            err[key] = val;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    return err;
  };
}

// PRIVATE HELPER FUNCTIONS
function getKeyValuePairs(obj) {
  return Object.keys(obj).map(function (key) {
    return [key, obj[key]];
  });
}

function isAllowedProperty(key) {
  return ['name', 'message'].every(function (val) {
    return key !== val;
  });
}