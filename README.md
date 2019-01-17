# normalize-object

[![Dependency status](http://img.shields.io/david/duereg/normalize-object.svg?style=flat)](https://david-dm.org/duereg/normalize-object)
[![devDependency Status](http://img.shields.io/david/dev/duereg/normalize-object.svg?style=flat)](https://david-dm.org/duereg/normalize-object#info=devDependencies)
[![Build Status](http://img.shields.io/travis/duereg/normalize-object.svg?style=flat&branch=master)](https://travis-ci.org/duereg/normalize-object)

[![NPM](https://nodei.co/npm/normalize-object.svg?style=flat)](https://npmjs.org/package/normalize-object)

Based off of [normalize-case](https://github.com/yields/normalize-case)

## Version History
 * 2.0: Support for Object-like objects (Map, Set, Buffer, Date, etc)
 * 1.3: Remove gulp, coffee, underscore
 * 1.2: remove node 4.x support
 * 1.1: camelize-object -> normalize-object

## Installation

    npm install normalize-object

## Usage

  Normalize an object and all of its keys (included nested object keys and objects in arrays)
  to the format of your choosing.

  ` normalize(obj, caseType) `

  Where `caseType` defaults to camel case

  Supports the following casing types:
   * camel
   * capital
   * constant
   * lower
   * pascal
   * sentence
   * snake
   * title
   * upper

## Usage Example

```javascript
var normalize = require('normalize-object');

var input = {
  api_key: "baz",
  "first name": "baz",
  last_name: "foo",
  array: [
    { Name: "baz" },
    { "names  ": [A: 1] }
  ]
};

var output = normalize(input, 'camel'); // camel is used by default
```

Where output would be:

```javascript
var output = {
  apiKey: "baz",
  firstName: "baz",
  lastName: "foo",
  array: [
    { name: "baz" },
    { names: [a: 1] }
  ]
};
```

## Testing

    npm test
