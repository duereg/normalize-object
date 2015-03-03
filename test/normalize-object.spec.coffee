require 'coffee-errors'

chai = require 'chai'
expect = chai.expect

# using compiled JavaScript file here to be sure module works
camelizeObject = require '../lib/normalize-object.js'
fixtures = require './fixtures'

describe 'normalize-object', ->
  fixtures.forEach (fixture) ->
    describe fixture.name, ->
      it 'should work', ->
        results = camelizeObject(fixture.input, fixture.method)
        expect(results).to.eql(fixture.output)
