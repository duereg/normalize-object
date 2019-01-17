const chai = require('chai');

const camelizeObject = require('../src/normalize-object.js');
const fixtures = require('./fixtures');

const { expect } = chai;

describe('normalize-object', () => fixtures.forEach(fixture => describe(fixture.name, () => it('should work', () => {
  const results = camelizeObject(fixture.input, fixture.method);
  return expect(results).to.eql(fixture.output);
}))));
