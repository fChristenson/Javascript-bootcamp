const add = require("./add");

describe("Add test", () => {
  it("tells me what 1 + 1 is", () => {
    const expected = 2;
    const actual = add(1, 1);
    expect(actual).toEqual(expected);
  });

  it("creates a functions that will add one", () => {
    const expected = 2;
    const addOne = add(1);
    const actual = addOne(1);
    expect(actual).toEqual(expected);
  });

  it("creates a functions that will add two", () => {
    const expected = 3;
    const addTwo = add(2);
    const actual = addTwo(1);
    expect(actual).toEqual(expected);
  });
});
