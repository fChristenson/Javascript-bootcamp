const fizzbuzz = require("./fizzbuzz");

describe("Fizzbuzz test", () => {
  it("returns fizz if the number is divisible by 3", () => {
    const expected = "fizz";
    const actual = fizzbuzz(3);
    expect(actual).toEqual(expected);
  });

  it("returns buzz if the number is divisible by 5", () => {
    const expected = "buzz";
    const actual = fizzbuzz(5);
    expect(actual).toEqual(expected);
  });

  it("returns fizzbuzz if the number is divisible by 3 and 5", () => {
    const expected = "fizzbuzz";
    const actual = fizzbuzz(15);
    expect(actual).toEqual(expected);
  });

  it("returns the correct values for an array of values", () => {
    const expected = [
      "fizzbuzz",
      1,
      2,
      "fizz",
      4,
      "buzz",
      "fizz",
      7,
      8,
      "fizz",
      "buzz",
      11,
      "fizz",
      13,
      14,
      "fizzbuzz"
    ];

    const numbers = [];
    for (let i = 0; i < 16; i++) {
      numbers.push(i);
    }

    const actual = numbers.map(fizzbuzz);
    expect(actual).toEqual(expected);
  });
});
