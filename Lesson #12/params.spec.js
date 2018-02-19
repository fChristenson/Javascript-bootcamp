const params = require("./params");

describe("Params test", () => {
  it("returns 1 param", async () => {
    const expected = [{ foo: 1 }];
    const actual = params({ foo: 1 });
    expect(actual).toEqual(expected);
  });

  it("returns 2 params", async () => {
    const expected = [1, 2];
    const actual = params(1, 2);
    expect(actual).toEqual(expected);
  });

  it("returns 3 params", async () => {
    const expected = [1, 2, "foo"];
    const actual = params(1, 2, "foo");
    expect(actual).toEqual(expected);
  });
});
