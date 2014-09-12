require 'coffee-errors'

chai = require 'chai'
sinon = require 'sinon'
# using compiled JavaScript file here to be sure module works
camelizeObject = require '../lib/camelize-object.js'

expect = chai.expect
chai.use require 'sinon-chai'

describe 'camelize-object', ->
  it 'works', ->
    actual = camelizeObject 'World'
    expect(actual).to.eql 'Hello World'
