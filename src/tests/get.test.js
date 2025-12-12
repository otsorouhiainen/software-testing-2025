
import get from "../get.js";

describe('get()', () => {
  test('returns nested property value when path is a string', () => {
    const obj = { a: [{ b: { c: 3 } }] };
    expect(get(obj, 'a[0].b.c')).toBe(3);
  });

  test('returns nested property value when path is an array', () => {
    const obj = { a: [{ b: { c: 3 } }] };
    expect(get(obj, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('returns default value if the path doesnt exist', () => {
    const obj = { a: 1 };
    expect(get(obj, 'a.b.c', 'default')).toBe('default');
  });

  test('returns undefined when no default value is given', () => {
    const obj = { a: 1 };
    expect(get(obj, 'unknown.path')).toBeUndefined();
  });

  test('returns default value when object is null or undefined', () => {
    expect(get(null, 'a.b', 'fallback')).toBe('fallback');
    expect(get(undefined, 'a.b', 'fallback')).toBe('fallback');
  });

  test('works for reg numbers', () => {
    const obj = { x: 10 };
    expect(get(obj, 'x')).toBe(10);
  });

  test('handles array indexing in paths', () => {
    const obj = { users: [{ name: 'Salla' }, { name: 'Otso' }] };
    expect(get(obj, 'users[1].name')).toBe('Otso');
  });

  test('returns default value when value is undefined', () => {
    const obj = { a: { b: undefined } };
    expect(get(obj, 'a.b', 'fallback')).toBe('fallback');
  });
});