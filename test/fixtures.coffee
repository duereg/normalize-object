fixtures = []

fixtures.push
  name: "simple"
  input:
    key_key: [Key: "baz"]

  output:
    keyKey: [key: "baz"]

# complex
fixtures.push
  name: "complex"
  input:
    api_key: "baz"
    "first name": "baz"
    last_name: "foo"
    array: [
      {
        Name: "baz"
      }
      {
        "names  ": [A: 1]
      }
    ]
  output:
    apiKey: "baz"
    firstName: "baz"
    lastName: "foo"
    array: [
      {
        name: "baz"
      }
      {
        names: [a: 1]
      }
    ]

module.exports = fixtures
