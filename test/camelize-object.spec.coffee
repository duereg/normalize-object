require 'coffee-errors'

chai = require 'chai'
expect = chai.expect

# using compiled JavaScript file here to be sure module works
camelizeObject = require '../lib/camelize-object.js'
fixtures = require './fixtures'

describe 'camelize-object', ->
  fixtures.forEach (fixture) ->
    describe fixture.name, ->
      it 'should work', ->
        expect(camelizeObject(fixture.input)).to.eql(fixture.output)
