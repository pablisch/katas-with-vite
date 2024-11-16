# Codewars JS Vitest

A repo to collect JS Codewars challenges with TDD solutions.

<p align="left">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="nodejs" width="40" height="40"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="npm" width="40" height="40"/>
    <!-- <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg" alt="jest" width="40" height="40"/> -->
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" width="40" height="40"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="github" width="40" height="40"/>
 </p>

These are generally one function solutions to small chalenges set by Codewars. I user them to keep my JavaScript skills sharp and to practice TDD.

## How to install the repo locally
``
```bash
1. Clone the repo
2. npm install # install dependencies
```

## How to run ALL tests
```bash
npm test # with watch
```

```bash
npm test:run # single run
```

## How to run a single test file OR regex match
```bash
npx vitest --globals <test-filename OR regex-match> # run single test file or regex match with watch
```
Example: `npx vitest --globals hel` # currently this will only match 
```bash
npx vitest --globals hel # currently this will only match the file __tests__/helloName.test.js
npx vitest --globals oun # would match two files: __tests__/countChars.test.js and __tests__/roundUpToFive.test.js
```

```bash
npx vitest --run --globals <test-filename OR regex-match> # run single test file or regex match for a single run
```

`--reporter verbose` is also available

## How to run a single file

As the files are mostly single functions designed to pass a specific abstract test, there is little point in running them, however, if you want to do so, you can use node to run the files. For example:
```bash
1. node <filename> # run file
```

## Writing Tests

All the forms of test writing listed below can be seen in [forWhomTheBellsToll.test.js](./__tests__/forWhomTheBellTolls.test.js).

### Single tests

Single tests are written using Vitest syntax which is almost identical to Jest. The use of globals when test running means that there is no need to import `describe`, `test`, etc.

```javascript
describe('forWhomTheBellTolls', () => {
    test('should return a symmetrical array when n is passed in', () => {
        expect(forWhomTheBellTolls(1)).toEqual([1])
    })
})
```

### Parameterised tests

Parameterised tests are also written using Vitest syntax but use a single test to run multiple test examples. The example below uses the `%d` syntax to include the number (`%d`) in the test description to clearly indicate which example is being tested

```javascript
describe('forWhomTheBellTolls parameterised tests', () => {
    test.each([
        [1, [1]],
        [2, [2, 2]],
        [3, [3, 4, 3]],
    ])('should return a symmetrical array when n has the value of %d', (n, expectedArray) => {
        expect(forWhomTheBellTolls(n)).toEqual(expectedArray)
    })
})
```

### Parameterised tests with dynamic test description

The example below uses the `%d` syntax to include the number (`%d`) and `%s` (for string) in the test description to clearly indicate both the integer and the resulting array in the test description and show details of which example is being tested. This can be a bit sketchy and in this example the inputs needed to be reversed to make the test description read out as I wanted it to.

```javascript
describe('forWhomTheBellTolls parameterised tests', () => {
    test.each([
        [[1], 1],
        [[2, 2], 2],
        [[3, 4, 3], 3],
    ])('should return a symmetrical array, %s when n has the value of %d', (expectedArray, n) => {
        expect(forWhomTheBellTolls(n)).toEqual(expectedArray)
    })
})
```

The read out for passing tests with the above format would like like this:
```javascript`
   ✓ forWhomTheBellTolls parameterised tests (8)
     ✓ should return a symmetrical array, [ 1 ] when n has the value of 1
     ✓ should return a symmetrical array, [ 2, 2 ] when n has the value of 2
     ✓ should return a symmetrical array, [ 3, 4, 3 ] when n has the value of 3
```