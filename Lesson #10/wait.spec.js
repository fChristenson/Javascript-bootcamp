const wait = require("./wait");

describe("Wait test", () => {
  it("waits for at least 1 miliseconds with async", async () => {
    const now = Date.now();
    await wait(10);
    const then = Date.now();
    const actual = then - now;
    expect(actual >= 1).toEqual(true);
  });

  it("waits for at least 1 miliseconds without async", done => {
    const now = Date.now();
    wait(10)
      .then(() => {
        const then = Date.now();
        const actual = then - now;
        expect(actual >= 1).toEqual(true);
      })
      .then(done);
  });
});
