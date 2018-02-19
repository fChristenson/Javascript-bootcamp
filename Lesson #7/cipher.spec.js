const cipher = require("./cipher");

describe("Caesar cipher test", () => {
  it("adds a positive number to the character code", () => {
    let expected = "bbb";
    let actual = cipher("aaa", 1);
    expect(actual).toEqual(expected);
  });

  it("adds a negative number to the character code", () => {
    let expected = "aaa";
    let actual = cipher("bbb", -1);
    expect(actual).toEqual(expected);
  });
});
