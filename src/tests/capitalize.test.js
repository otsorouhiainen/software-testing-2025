import capitalize from "../capitalize.js";


describe('capitalize()', () => {
  test('changes a full uppercase to a regular string', () => {
    expect(capitalize('SALLA')).toBe('Salla');
  });

  test('capitalizes a full lowercase string', () => {
    expect(capitalize('salla')).toBe('Salla');
  });

  test('capitalizes when there are both upper and lower mixed string', () => {
    expect(capitalize('SaLlA')).toBe('Salla');
  });

  test('capitalizes when there is only one char', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('B')).toBe('B');
  });

  test('returns empty string when given empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('converts non string values to string and capitalizes', () => {
    expect(capitalize(123)).toBe('123'); 
    expect(capitalize(true)).toBe('True');
    expect(capitalize(null)).toBe('Null');
    expect(capitalize(undefined)).toBe('Undefined');
  });

});