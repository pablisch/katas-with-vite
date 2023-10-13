# Codewars JS Vitest

A repo to collect JS Codewars challenges with TDD solutions.

<p align="left">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="nodejs" width="40" height="40"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="npm" width="40" height="40"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg" alt="jest" width="40" height="40"/>
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
1. npm test # run tests
```

## How to run a single test
```bash
1. jest <test-filename> # run single test
```
Example: `jest greet.test.js`

**Note:** the extension is not required.

## How to run a single file

As the files are mostly single functions designed to pass a specific abstract test, there is little point in running them, however, if you want to do so, you can use node to run the files. For example:
```bash
1. node <filename> # run file
```