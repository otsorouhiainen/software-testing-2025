import toNumber from "../toNumber.js";

describe("toNumber.js utility function", () => {
  // testing if returns a number from string
  test("Returns a number from string, when the string is a number", () => {
    expect(toNumber("1")).toBe(1);
  });

    // testing if returns a number from string when there are mulltiple numbers
  test("Returns a number from string, when the string is a number (multiple numbers)", () => {
    expect(toNumber("1332")).toBe(1332);
  });

    test("Returns nan when is not numeral", () => {
    expect(toNumber("%gA")).toBe(NaN);
  });


      test("Returns nan if object", () => {
    expect(toNumber("%gA")).toBe(NaN);
  });



});