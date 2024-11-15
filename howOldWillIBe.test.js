const howOld = (dob, year) => {
  if (dob === year) return "You were born this very year!";
  const diff = year - dob;
  if (diff < 0) return `You will be born in ${Math.abs(diff)} year${diff < -1 ? 's' : ''}.`;
  return `You are ${diff} year${diff > 1 ? 's' : ''} old.`;
}

describe('howOld()', () => {
  test.each([
    [2000, 2000, "You were born this very year!"],
    [2001, 2000, "You will be born in 1 year."],
    [2002, 2000, "You will be born in 2 years."],
    [2000, 1990, "You will be born in 10 years."],
    [2000, 2001, "You are 1 year old."],
    [2000, 2002, "You are 2 years old."],
    [1990, 2000, "You are 10 years old."],
  ])('should return descrbing age at the specified year', (dob, year, expectedResult) => {
    // Act 
    const result = howOld(dob, year);

    // Assert
    expect(result).toBe(expectedResult);
  })
})