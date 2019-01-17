/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const methods = require('case');
const isPlainObject = require('lodash.isplainobject');

/**
Normalize all keys of `obj` recursively.
@param {Object} obj to normalize
@param {String} caseType type of case to convert object to
@return {Object}
@api public
*/
var normalize = function(obj, caseType = 'camel') {
  let ret = obj;
  const method = methods[caseType];

  if (Array.isArray(obj)) {
    ret = [];
    let i = 0;

    while (i < obj.length) {
      ret.push(normalize(obj[i], caseType));
      ++i;
    }
  } else if (isPlainObject(obj)) {
    ret = {};
    for (let k in obj) {
      ret[method(k)] = normalize(obj[k], caseType);
    }
  }

  return ret;
};

module.exports = normalize;
