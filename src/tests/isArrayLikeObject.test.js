import isArrayLikeObject from "../isArrayLikeObject.js";

describe("isArrayLikeObject", () => {
  test("returns true for arrays", () => {
    expect(isArrayLikeObject([1, 2, 3])).toBe(true);
    expect(isArrayLikeObject([])).toBe(true);
  });

  test("returns true for array-like objects with length property", () => {
    expect(isArrayLikeObject({ 0: "a", 1: "b", length: 2 })).toBe(true);
    expect(isArrayLikeObject({ length: 0 })).toBe(true);
  });

  test("returns true for arguments object", () => {
    function getArgs() {
      return arguments;
    }
    expect(isArrayLikeObject(getArgs(1, 2, 3))).toBe(true);
  });

  test("returns false for strings", () => {
    expect(isArrayLikeObject("abc")).toBe(false);
    expect(isArrayLikeObject("")).toBe(false);
  });

  test("returns false for functions", () => {
    expect(isArrayLikeObject(Function)).toBe(false);
    expect(isArrayLikeObject(() => {})).toBe(false);
  });

  test("returns false for null and undefined", () => {
    expect(isArrayLikeObject(null)).toBe(false);
    expect(isArrayLikeObject(undefined)).toBe(false);
  });

  test("returns false for numbers", () => {
    expect(isArrayLikeObject(123)).toBe(false);
    expect(isArrayLikeObject(0)).toBe(false);
    expect(isArrayLikeObject(NaN)).toBe(false);
  });

  test("returns false for booleans", () => {
    expect(isArrayLikeObject(true)).toBe(false);
    expect(isArrayLikeObject(false)).toBe(false);
  });

  test("returns false for plain objects without length", () => {
    expect(isArrayLikeObject({ a: 1, b: 2 })).toBe(false);
    expect(isArrayLikeObject({})).toBe(false);
  });

  test("returns false for objects with invalid length", () => {
    expect(isArrayLikeObject({ length: -1 })).toBe(false);
    expect(isArrayLikeObject({ length: "2" })).toBe(false);
    expect(isArrayLikeObject({ length: NaN })).toBe(false);
    expect(isArrayLikeObject({ length: Infinity })).toBe(false);
  });

  test("returns false for objects with length exceeding MAX_SAFE_INTEGER", () => {
    expect(isArrayLikeObject({ length: Number.MAX_SAFE_INTEGER + 1 })).toBe(
      false
    );
  });

  test("returns true for typed arrays", () => {
    expect(isArrayLikeObject(new Int8Array())).toBe(true);
    expect(isArrayLikeObject(new Uint8Array([1, 2, 3]))).toBe(true);
    expect(isArrayLikeObject(new Float64Array([1.5, 2.5]))).toBe(true);
  });

  test("returns true for objects with MAX_SAFE_INTEGER length", () => {
    expect(isArrayLikeObject({ length: Number.MAX_SAFE_INTEGER })).toBe(true);
  });

  test("returns false for symbols", () => {
    expect(isArrayLikeObject(Symbol("test"))).toBe(false);
  });
});
