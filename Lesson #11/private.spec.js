const private = require("./private");
const util = require('util');

describe("Private test", () => {
  it("make foo private", () => {
    const data = {
      foo: 1,
      bar: 1
    };
    const actual = private(data, "foo");
    expect(actual.foo).toEqual(undefined);
    expect(actual.bar).toEqual(1);
    const str = util.inspect(actual);
    expect(str).toEqual("{ foo: 1, bar: 1 }")
  });

  it("make bar private", () => {
    const data = {
      foo: 1,
      bar: 1
    };
    const actual = private(data, "bar");
    expect(actual.foo).toEqual(1);
    expect(actual.bar).toEqual(undefined);
    const str = util.inspect(actual);
    expect(str).toEqual("{ foo: 1, bar: 1 }")
  });
});
