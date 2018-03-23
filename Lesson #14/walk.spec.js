const walk = require("./walk");

describe("Walk test", () => {
  it("tells me what the value of foo is", () => {
    const obj = {
      foo: 1
    };
    const expected = 1;
    const actual = walk(obj, "foo");
    expect(actual).toEqual(expected);
  });

  it("tells me what the value of bar is", () => {
    const obj = {
      foo: {
        bar: 1
      }
    };
    const expected = 1;
    const actual = walk(obj, "bar");
    expect(actual).toEqual(expected);
  });

  it("tells me what the value of baz is", () => {
    const obj = {
      foo: {
        bar: 1
      },
      bar: {
        baz: 2
      }
    };
    const expected = 2;
    const actual = walk(obj, "baz");
    expect(actual).toEqual(expected);
  });
});
