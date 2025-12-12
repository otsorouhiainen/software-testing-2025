import reduce from "../reduce.js";

describe("reduce", () => {
  test("reduces array with accumulator", () => {
    expect(reduce([1, 2, 3], (sum, n) => sum + n, 0)).toBe(6);
  });

  test("reduces array without accumulator (uses first element)", () => {
    expect(reduce([1, 2, 3], (sum, n) => sum + n)).toBe(6);
  });

  test("reduces array to product", () => {
    expect(reduce([2, 3, 4], (product, n) => product * n, 1)).toBe(24);
  });

  test("reduces array to build object", () => {
    const result = reduce(
      [1, 2, 3],
      (acc, n) => {
        acc[n] = n * 2;
        return acc;
      },
      {}
    );
    expect(result).toEqual({ 1: 2, 2: 4, 3: 6 });
  });

  test("reduces object with accumulator", () => {
    const result = reduce({ a: 1, b: 2, c: 3 }, (sum, value) => sum + value, 0);
    expect(result).toBe(6);
  });

  test("reduces object to group by value", () => {
    const result = reduce(
      { a: 1, b: 2, c: 1 },
      (result, value, key) => {
        (result[value] || (result[value] = [])).push(key);
        return result;
      },
      {}
    );
    expect(result).toEqual({ 1: ["a", "c"], 2: ["b"] });
  });

  test("reduces object without accumulator", () => {
    const result = reduce({ a: 10, b: 20, c: 30 }, (acc, value) => acc + value);
    expect(typeof result).toBe("number");
  });

  test("reduces empty array with accumulator returns accumulator", () => {
    expect(reduce([], (sum, n) => sum + n, 0)).toBe(0);
    expect(reduce([], (sum, n) => sum + n, 10)).toBe(10);
  });

  test("reduces empty array without accumulator returns undefined", () => {
    expect(reduce([], (sum, n) => sum + n)).toBeUndefined();
  });

  test("reduces empty object with accumulator returns accumulator", () => {
    expect(reduce({}, (sum, value) => sum + value, 5)).toBe(5);
  });

  test("reduces empty object without accumulator returns undefined", () => {
    expect(reduce({}, (sum, value) => sum + value)).toBeUndefined();
  });

  test("reduces single element array with accumulator", () => {
    expect(reduce([5], (sum, n) => sum + n, 10)).toBe(15);
  });

  test("reduces single element array without accumulator returns element", () => {
    expect(reduce([5], (sum, n) => sum + n)).toBe(5);
  });

  test("iteratee receives accumulator, value, index, and collection", () => {
    const mock = jest.fn((acc, val) => acc + val);
    reduce([1, 2, 3], mock, 0);

    expect(mock).toHaveBeenCalledTimes(3);
    expect(mock).toHaveBeenNthCalledWith(1, 0, 1, 0, [1, 2, 3]);
    expect(mock).toHaveBeenNthCalledWith(2, 1, 2, 1, [1, 2, 3]);
    expect(mock).toHaveBeenNthCalledWith(3, 3, 3, 2, [1, 2, 3]);
  });

  test("iteratee receives correct arguments for objects", () => {
    const mock = jest.fn((acc, val) => acc + val);
    reduce({ a: 1, b: 2 }, mock, 0);

    expect(mock).toHaveBeenCalledTimes(2);
    expect(mock.mock.calls[0]).toEqual([0, 1, "a", { a: 1, b: 2 }]);
    expect(mock.mock.calls[1]).toEqual([1, 2, "b", { a: 1, b: 2 }]);
  });

  test("reduces to array", () => {
    const result = reduce(
      [1, 2, 3, 4],
      (acc, n) => {
        if (n % 2 === 0) acc.push(n);
        return acc;
      },
      []
    );
    expect(result).toEqual([2, 4]);
  });

  test("reduces to string", () => {
    const result = reduce(
      ["h", "e", "l", "l", "o"],
      (acc, char) => acc + char,
      ""
    );
    expect(result).toBe("hello");
  });

  test("handles null collection with accumulator", () => {
    expect(reduce(null, (sum, n) => sum + n, 0)).toBe(0);
  });

  test("handles undefined collection with accumulator", () => {
    expect(reduce(undefined, (sum, n) => sum + n, 0)).toBe(0);
  });

  test("handles null collection without accumulator", () => {
    expect(reduce(null, (sum, n) => sum + n)).toBeUndefined();
  });

  test("reduces mixed type array", () => {
    const result = reduce(
      [1, "2", 3, "4"],
      (acc, val) => {
        acc.push(typeof val);
        return acc;
      },
      []
    );
    expect(result).toEqual(["number", "string", "number", "string"]);
  });
/*
  test("handles falsy accumulator values", () => {
    expect(reduce([1, 2, 3], (sum, n) => sum + n, null)).toBe(null);
    expect(reduce([1, 2], (acc, n) => acc || n, false)).toBe(1);
  });
*/
  test("reduces array with negative numbers", () => {
    expect(reduce([-1, -2, -3], (sum, n) => sum + n, 0)).toBe(-6);
  });

  test("flattens nested array", () => {
    const result = reduce(
      [[1, 2], [3, 4], [5]],
      (flat, arr) => flat.concat(arr),
      []
    );
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test("finds maximum value", () => {
    expect(reduce([5, 2, 9, 1, 7], (max, n) => (n > max ? n : max))).toBe(9);
  });

  test("finds minimum value", () => {
    expect(reduce([5, 2, 9, 1, 7], (min, n) => (n < min ? n : min))).toBe(1);
  });

  test("counts occurrences", () => {
    const result = reduce(
      ["a", "b", "a", "c", "b", "a"],
      (acc, letter) => {
        acc[letter] = (acc[letter] || 0) + 1;
        return acc;
      },
      {}
    );
    expect(result).toEqual({ a: 3, b: 2, c: 1 });
  });
});
