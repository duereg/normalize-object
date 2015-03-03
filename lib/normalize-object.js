var _, methods, normalize;

_ = require('underscore');

methods = require('case');


/**
Normalize all keys of `obj` recursively.
@param {Object} obj to normalize
@param {String} caseType type of case to convert object to
@return {Object}
@api public
 */

normalize = function(obj, caseType) {
  var i, k, method, ret;
  if (caseType == null) {
    caseType = 'camel';
  }
  ret = obj;
  method = methods[caseType];
  if (_.isArray(obj)) {
    ret = [];
    i = 0;
    while (i < obj.length) {
      ret.push(normalize(obj[i], caseType));
      ++i;
    }
  } else if (_.isObject(obj)) {
    ret = {};
    for (k in obj) {
      ret[method(k)] = normalize(obj[k], caseType);
    }
  }
  return ret;
};

module.exports = normalize;
