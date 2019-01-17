const fixtures = [];

fixtures.push({
  name: "simple (defaults to camel)",
  input: {
    key_key: [{Key: "baz"}]
  },
  output: {
    keyKey: [{key: "baz"}]
  }});

fixtures.push({
  name: "simple pascal",
  method: "pascal",
  input: {
    key_key: [{Key: "baz"}]
  },
  output: {
    KeyKey: [{Key: "baz"}]
  }});

fixtures.push({
  name: "simple camel",
  method: "camel",
  input: {
    key_key: [{Key: "baz"}]
  },
  output: {
    keyKey: [{key: "baz"}]
  }});

// complex
fixtures.push({
  name: "complex pascal",
  method: "pascal",
  input: {
    api_key: "baz",
    "first name": "baz",
    last_name: "foo",
    array: [
      {
        Name: "baz"
      },
      {
        "names  ": [{A: 1}]
      }
    ]
  },
  output: {
    ApiKey: "baz",
    FirstName: "baz",
    LastName: "foo",
    Array: [
      {
        Name: "baz"
      },
      {
        Names: [{A: 1}]
      }
    ]
  }});

fixtures.push({
  name: "complex camel",
  method: "camel",
  input: {
    api_key: "baz",
    "first name": "baz",
    last_name: "foo",
    array: [
      {
        Name: "baz"
      },
      {
        "names  ": [{A: 1}]
      }
    ]
  },
  output: {
    apiKey: "baz",
    firstName: "baz",
    lastName: "foo",
    array: [
      {
        name: "baz"
      },
      {
        names: [{a: 1}]
      }
    ]
  }});

const newDate = new Date();
const newBuffer = new ArrayBuffer([]);
const newSet = new Set();
const newMap = new Map();
const newTypedArray = new Uint32Array();

fixtures.push({
  name: "various types (defaults to camel)",
  input: {
    key_key: [{ newDate, newBuffer, newSet, newMap, newTypedArray }]
  },
  output: {
    keyKey: [{ newDate, newBuffer, newSet, newMap, newTypedArray }]
  }
});

module.exports = fixtures;
