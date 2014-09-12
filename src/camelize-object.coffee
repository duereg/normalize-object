_ = require 'underscore'
camelize = require('case').camel

###*
Normalize all keys of `obj` recursively.
@param {Object} obj
@return {Object}
@api public
###
normalize = (obj) ->
  ret = obj
  if _.isArray(obj)
    ret = []
    i = 0

    while i < obj.length
      ret.push normalize(obj[i])
      ++i
  else if _.isObject(obj)
    ret = {}
    for k of obj
      ret[camelize(k)] = normalize(obj[k])

  ret

module.exports = normalize
