import isEmpty from "../isEmpty.js";


describe("isEmpty()", () => {

  test("returns true for null/undefined", () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test("returns true for booleans/numbers", () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(123)).toBe(true);
  });

  test("returns false for non empty arrays", () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  test("returns true for empty arrays", () => {
    expect(isEmpty([])).toBe(true);
  });

  test("returns false for non empty strings", () => {
    expect(isEmpty("hello")).toBe(false);
  });

  test("returns true for empty string", () => {
    expect(isEmpty("")).toBe(true);
  });

  test("returns false for non empty objects", () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test("returns true for empty objects", () => {
    expect(isEmpty({})).toBe(true);
  });

  test("returns true for empty Map and Set", () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });


  //should test more objects?? idk
  
  test("returns false for non-empty Map and Set", () => {
    const map = new Map();
    map.set("x", 1);

    const set = new Set();
    set.add(5);

    expect(isEmpty(map)).toBe(false);
    expect(isEmpty(set)).toBe(false);
  });


  test("ignores inherited properties", () => {
    const parent = { a: 1 };
    const child = Object.create(parent);

    // no own keys, so shoiuld be empty
    expect(isEmpty(child)).toBe(true);
  });
});
