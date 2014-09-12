require 'coffee-errors'

chai = require 'chai'
sinon = require 'sinon'
# using compiled JavaScript file here to be sure module works
camelizeObject = require '../lib/camelize-object.js'
fixtures = require './fixtures'

expect = chai.expect
chai.use require 'sinon-chai'

describe 'camelize-object', ->
  fixtures.forEach (fixture) ->
    describe fixture.name, ->
      it 'should work', ->
        expect(camelizeObject(fixture.input)).to.eql(fixture.output)
