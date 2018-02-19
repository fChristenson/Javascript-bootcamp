const name = require("./name");

describe("Name test", () => {
  it("returns the name of a function", async () => {
    function foo() {}
    const expected = "foo";
    const actual = name(foo);
    expect(actual).toEqual(expected);
  });

  it("returns undefined for a lambda function", async () => {
    const expected = "";
    const actual = name(() => {});
    expect(actual).toEqual(expected);
  });

  it("returns undefined for a number", async () => {
    const foo = 1;
    const expected = undefined;
    const actual = name(foo);
    expect(actual).toEqual(expected);
  });

  it("returns undefined for an object", async () => {
    const foo = {};
    const expected = undefined;
    const actual = name(foo);
    expect(actual).toEqual(expected);
  });
});
