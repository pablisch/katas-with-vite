import reverseWords from './reverseWords';

describe('reverseWords()', () => {
  test('should return a string where the words are in reverse order to the input string', () => {
    expect(reverseWords("one two three")).toEqual("three two one");
    expect(reverseWords("one two three.")).toEqual("three. two one");
    expect(reverseWords("one    two three")).toEqual("three two one");
    expect(reverseWords("one two three")).toEqual("three two one");
    expect(reverseWords("one two three")).toEqual("three two one");
    expect(reverseWords("I am an expert at this")).toStrictEqual("this at expert an am I");
  });
});