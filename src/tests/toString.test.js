import toString from "../toString.js";

describe("toString.js utility function", () => {
  // testing if returns the same string
  test("does it return the same string", () => {
    expect(toString("Toy")).toBe("Toy");
  });

  test("does it convert array into a string", () => {
    expect(toString([1, 2, 3])).toBe("1,2,3");
  });

  test("does the recursion work", () => {
    expect(toString([1, [2, 3]])).toBe("1,2,3");
  });


  test("if the arrays are deeply nested", () => {
    expect(toString([1, [2, [3, [4]]]])).toBe("1,2,3,4");
  });

  test("what if is not an array", () => {
    const result = toString([1, 2]);
    expect(typeof result).toBe("string");
    expect(result).toBe("1,2");
  });

});
