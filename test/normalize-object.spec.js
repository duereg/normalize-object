const chai = require('chai');
const { expect } = chai;

// using compiled JavaScript file here to be sure module works
const camelizeObject = require('../src/normalize-object.js');
const fixtures = require('./fixtures');

describe('normalize-object', () =>
  fixtures.forEach(fixture =>
    describe(fixture.name, () =>
      it('should work', function() {
        const results = camelizeObject(fixture.input, fixture.method);
        return expect(results).to.eql(fixture.output);
      })
    )
  )
);
