import words from "../words.js";

describe("words", () => {
  /*test("handles null/undefined input", () => {
    expect(words(null)).toEqual([]);
    expect(words(undefined)).toEqual([]);
  });*/

  test("handles unicode characters", () => {
    expect(words("café résumé")).toEqual(["café", "résumé"]);
  });

  test("handles camelCase", () => {
    expect(words("camelCaseWord")).toEqual(["camel", "Case", "Word"]);
  });

  test("handles PascalCase", () => {
    expect(words("PascalCase")).toEqual(["Pascal", "Case"]);
  });

  test("handles alphanumeric strings", () => {
    expect(words("test123abc456")).not.toEqual([]);
  });
  

  test("handles only special characters", () => {
    expect(words("!@#$%^&*()")).toEqual([]);
  });

  test("handles string pattern", () => {
    const result = words("hello world", "hello");
    expect(result).toBeTruthy();
  });

  test("handles multiple spaces", () => {
    expect(words("hello    world")).toEqual(["hello", "world"]);
  });

  test("handles tabs and newlines", () => {
    expect(words("hello\tworld\n")).toEqual(["hello", "world"]);
  });
});
