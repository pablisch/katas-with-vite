import checkTheExam from './checkTheExam.js';

describe('checkTheExam', () => {
  test('should award +4 for each correct answer given only correct answers', () => {
    expect(checkTheExam(["a"], ["a"])).toBe(4);
    expect(checkTheExam(["a", "b"], ["a", "b"])).toBe(8);
    expect(checkTheExam(["a", "b", "c"], ["a", "b", "c"])).toBe(12);
  });

  test('should award +4 for correct answers and 0 for each blank submission', () => {
    expect(checkTheExam(["a"], [""])).toBe(0);
    expect(checkTheExam(["a", "b"], ["a", ""])).toBe(4);
    expect(checkTheExam(["a", "b", "c"], ["a", "", "c"])).toBe(8);
  });

  test('should award +4 for correct answers and -1 for each incorrect answer', () => {
    expect(checkTheExam(["a", "b"], ["a", "c"])).toBe(3);
    expect(checkTheExam(["a", "b", "c"], ["a", "a", "c"])).toBe(7);
    expect(checkTheExam(["a", "b", "c", "d"], ["a", "a", "c", "a"])).toBe(6);
  });

  test('should return correct score but never less than 0', () => {
    expect(checkTheExam(["a", "b"], ["b", "c"])).toBe(0);
    expect(checkTheExam(["a", "b", "c"], ["", "a", ""])).toBe(0);
    expect(checkTheExam(["a", "b", "c", "d"], ["a", "", "b", "a"])).toBe(2);
  });
});