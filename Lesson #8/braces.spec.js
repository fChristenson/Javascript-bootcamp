const braces = require("./braces");

describe("Braces test", () => {
  it("returns false for an empty string", () => {
    let expected = false;
    let actual = braces("");
    expect(actual).toEqual(expected);
  });

  it("returns true for {}", () => {
    let expected = true;
    let actual = braces("{}");
    expect(actual).toEqual(expected);
  });

  it("returns true for []", () => {
    let expected = true;
    let actual = braces("[]");
    expect(actual).toEqual(expected);
  });

  it("returns true for ()", () => {
    let expected = true;
    let actual = braces("()");
    expect(actual).toEqual(expected);
  });

  it("returns false for (", () => {
    let expected = false;
    let actual = braces("(");
    expect(actual).toEqual(expected);
  });

  it("returns false for [", () => {
    let expected = false;
    let actual = braces("[");
    expect(actual).toEqual(expected);
  });

  it("returns false for {", () => {
    let expected = false;
    let actual = braces("{");
    expect(actual).toEqual(expected);
  });

  it("returns false for }", () => {
    let expected = false;
    let actual = braces("}");
    expect(actual).toEqual(expected);
  });

  it("returns false for )", () => {
    let expected = false;
    let actual = braces(")");
    expect(actual).toEqual(expected);
  });

  it("returns false for ]", () => {
    let expected = false;
    let actual = braces("]");
    expect(actual).toEqual(expected);
  });

  it("returns false for (]", () => {
    let expected = false;
    let actual = braces("(]");
    expect(actual).toEqual(expected);
  });

  it("returns false for {]", () => {
    let expected = false;
    let actual = braces("{]");
    expect(actual).toEqual(expected);
  });

  it("returns false for {)", () => {
    let expected = false;
    let actual = braces("{)");
    expect(actual).toEqual(expected);
  });

  it("returns true for {}()", () => {
    let expected = true;
    let actual = braces("{}()");
    expect(actual).toEqual(expected);
  });

  it("returns true for []{}()", () => {
    let expected = true;
    let actual = braces("[]{}()");
    expect(actual).toEqual(expected);
  });

  it("returns true for [[]]{{}}(())", () => {
    let expected = true;
    let actual = braces("[[]]{{}}(())");
    expect(actual).toEqual(expected);
  });

  it("returns true for ({[]})", () => {
    let expected = true;
    let actual = braces("({[]})");
    expect(actual).toEqual(expected);
  });

  it("returns false for ({[})", () => {
    let expected = false;
    let actual = braces("({[})");
    expect(actual).toEqual(expected);
  });
});
