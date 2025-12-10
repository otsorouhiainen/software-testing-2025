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


      // testing if returns a number 
  test("Returns a number", () => {
    expect(toNumber(13)).toBe(13);
  });


        // testing if returns a number when the number is negative
  test("Returns a negative", () => {
    expect(toNumber(-13)).toBe(-13);
  });


    test("Returns nan when is not numeral", () => {
    expect(toNumber("%")).toBe(NaN);
  });


   test("if object is a number, returns the same number", () => {
    const obj = {
      valueOf() { return 10; }
    };
    expect(toNumber(obj)).toBe(10);
  });

     test("if object is not a number, returns NAN", () => {
    const obj = {
      valueOf() { return "gkgk"; }
    };
    expect(toNumber(obj)).toBe(NaN

    );
  });




});