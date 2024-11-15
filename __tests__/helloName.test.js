import helloName from '../src/helloName.js';

describe('helloName', () => {
  test('should return "Hello, <name>!" where a valid name is given', () => {
    expect(helloName("Pablo")).toBe("Hello, Pablo!");
    expect(helloName("Sabina")).toBe("Hello, Sabina!");
  });
  
  test('should return "Hello, World!" where no argument is given', () => {
    expect(helloName()).toBe("Hello, World!");
  });
  
  test('should return "Hello, World!" where an empty string is given', () => {
    expect(helloName("")).toBe("Hello, World!");
  });

  test('should return "Hello, <capitalised name>!" where a non-capitalised name is given', () => {
    expect(helloName("pablo")).toBe("Hello, Pablo!");
    expect(helloName("sAbInA")).toBe("Hello, Sabina!");
  });
});