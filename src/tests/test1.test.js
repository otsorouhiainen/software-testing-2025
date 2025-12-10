import add from "../add.js";

describe("add.js utility function", () => {
  // adding basic pos or neg numbers, no zeros
  test("add two pos numbers", () => {
    expect(add(4, 6)).toBe(10);
  });

  test("adds one pos and one neg number", () => {
    expect(add(5, -3)).toBe(2);
  });

  test("adds two neg numbers", () => {
    expect(add(-4, -6)).toBe(-10);
  });

  // testing with zeros
  test("testing if adding zero changes the output", () => {
    expect(add(0, 5)).toBe(5);
    expect(add(7, 0)).toBe(7);
  });

  // failed input (adding non numbers)
  /*
  test("returns fail if not a number is added", () => {
    expect(add(4, "a")).toBeNaN();
    expect(add("b", 5)).toBeNaN();
  });
  */

  // Missing numbers
  test("treats missing numbers as 0", () => {
    expect(add(4)).toBe(4);
    expect(add()).toBe(0);
  });
});
