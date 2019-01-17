
/**
Normalize all keys of `obj` recursively.
@param {Object} obj to normalize
@param {String} caseType type of case to convert object to
@return {Object}
@api public
*/
var _, methods, normalize;

_ = require('underscore');

methods = require('case');

normalize = function(obj, caseType = 'camel') {
  var i, k, method, ret;
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
