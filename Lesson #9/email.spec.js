const email = require("./email");

describe("Email test", () => {
  it("returns false for an empty string", () => {
    let expected = false;
    let actual = email("");
    expect(actual).toEqual(expected);
  });

  it("returns false for an arbitrary string", () => {
    let expected = false;
    let actual = email("asd");
    expect(actual).toEqual(expected);
  });

  it("returns false for an @", () => {
    let expected = false;
    let actual = email("@");
    expect(actual).toEqual(expected);
  });

  it("returns true for foo@bar.se", () => {
    let expected = true;
    let actual = email("foo@bar.se");
    expect(actual).toEqual(expected);
  });

  it("returns true for foo@bar.com", () => {
    let expected = true;
    let actual = email("foo@bar.com");
    expect(actual).toEqual(expected);
  });

  it("returns true for foo@bar.net", () => {
    let expected = true;
    let actual = email("foo@bar.net");
    expect(actual).toEqual(expected);
  });

  it("returns true for foo@bar.org", () => {
    let expected = true;
    let actual = email("foo@bar.org");
    expect(actual).toEqual(expected);
  });

  it("returns true for foo.bar.baz@localhost", () => {
    let expected = true;
    let actual = email("foo.bar.baz@localhost");
    expect(actual).toEqual(expected);
  });

  it("returns true for foo@example.solutions", () => {
    let expected = true;
    let actual = email("foo@example.solutions");
    expect(actual).toEqual(expected);
  });

  it("returns true for foo@strange.example.solutions", () => {
    let expected = true;
    let actual = email("foo@strange.example.solutions");
    expect(actual).toEqual(expected);
  });

  it("returns true for foo@very.strage.example@strange.example.solutions", () => {
    let expected = true;
    let actual = email("foo@very.strage.example@strange.example.solutions");
    expect(actual).toEqual(expected);
  });
});
