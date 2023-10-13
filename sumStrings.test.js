import sumStrings from './sumStrings';

describe('sumStrings()', () => {
  test('should return the sum of teo numeric strings', () => {
    expect(sumStrings('10', '5')).toBe('15');
    expect(sumStrings('10', '10')).toBe('20');
    expect(sumStrings('1', '-1')).toBe('0');
    expect(sumStrings('-10', '-5')).toBe('-15');
    expect(sumStrings('-10', '')).toBe('-10');
  });
});