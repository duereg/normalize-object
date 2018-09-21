isObject = require('lodash.isobject')
methods = require('case')

###*
Normalize all keys of `obj` recursively.
@param {Object} obj to normalize
@param {String} caseType type of case to convert object to
@return {Object}
@api public
###
normalize = (obj, caseType = 'camel') ->
  ret = obj
  method = methods[caseType]

  if Array.isArray(obj)
    ret = []
    i = 0

    while i < obj.length
      ret.push normalize(obj[i], caseType)
      ++i
  else if isObject(obj)
    ret = {}
    for k of obj
      ret[method(k)] = normalize(obj[k], caseType)

  ret

module.exports = normalize
