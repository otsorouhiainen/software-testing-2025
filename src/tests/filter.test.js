import filter from "../filter.js";


describe("filter()", () => {

  test("filters matching elements", () => {
    const users = [
      { user: "Salla", active: true },
      { user: "Otso", active: false }
    ];

    const result = filter(users, u => u.active);

    expect(result).toEqual([
      { user: "Salla", active: true }
    ]);
  });

  test("returns multiple matches", () => {
    const arr = [1, 2, 3, 4];
    const result = filter(arr, x => x % 2 === 0);

    expect(result).toEqual([2, 4]);
  });

  test("returns [[]] if nothing matches", () => {
    const arr = [1, 2, 3];
    expect(filter(arr, () => false)).toEqual([[]]);
  });

  test("returns [[]] for an empty array", () => {
    expect(filter([], () => true)).toEqual([[]]);
  });

  test("returns [[]] for null input", () => {
    expect(filter(null, () => true)).toEqual([[]]);
  });

  test("passes values such as value, index, array to predicate", () => {
    const arr = ["a"];
    const fn = jest.fn(() => true);

    filter(arr, fn);

    expect(fn).toHaveBeenCalledWith("a", 0, arr);
  });
});
