# normalize-object

[![Dependency status](http://img.shields.io/david/duereg/normalize-object.svg?style=flat)](https://david-dm.org/duereg/normalize-object)
[![devDependency Status](http://img.shields.io/david/dev/duereg/normalize-object.svg?style=flat)](https://david-dm.org/duereg/normalize-object#info=devDependencies)
[![Build Status](http://img.shields.io/travis/duereg/normalize-object.svg?style=flat&branch=master)](https://travis-ci.org/duereg/normalize-object)

[![NPM](https://nodei.co/npm/normalize-object.svg?style=flat)](https://npmjs.org/package/normalize-object)

Based off of [normalize-case](https://github.com/yields/normalize-case)

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

var output = normalize(input, 'camel'); //camel is used by default
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

## License

The MIT License (MIT)

Copyright 2015 Matt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
