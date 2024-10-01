SEW | JavaScript Basics

## User Story 1
*As a bank employee, I want to use a coin converter app, so that I can save time and serve more customers.*

### Acceptance Criteria
- the function `convert(amount)` is available, which converts a given amount of cent into as few as possible coins
- the result is an object, which shows the amount of coins per value, e.g. { '100': 1, '50': 1, '20': 2, '5': 1, '2': 2 }
- only used values are represented within the resulting object

## User Story 2
*As a security expert I want to encrypt and decrypt strings, so that I can have a secure conversation with my counterpart.*

### Acceptance Criteria
- A function rot13(text) is available.
- The given string is encrypted using the ROT13 method.
- Upper- and lower-case are kept.
- Letters and signs outside of the English alphabet are kept.
- If the argument is no string, it needs to be converted into a string.
- If the function is used twice on a string, it should produce the same string again.

## User Story 3
*As a content creator I need an easy to use system to sort an array in lexical order, so that I can created sorted list much faster.*

### Acceptance Criteria
- A function that takes an array of string as a parameter is available.
- The result is an array consisting of the same strings as the input array, only sorted in lexical order
- Hint: take a look at the string method: [localeCompare()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

## User Story 4
*As a developer I want to filter an array, so that only even numbers are in the result.*

### Acceptance Criteria
- A function that takes an array of numbers as a parameter is available.
- The result is an array consisting only of even numbers

## User Story 5
*As a software tester I want to test certain functions, so that I can be sure that they produce the right result.*

### Acceptance Criteria
- A function test(fu, arg, exp) is available, where fu is the function which needs to be tested, arg are the arguments for fu, and exp is the expected return value.
- The function test calls the function fu using arg as argument.
- The return value of fu is compared with exp and if they match true is returned, otherwise false is returned.


## User Story 6
*As a cool developer I want to create generic code, so that I can be minimize my coding effort.*

### Acceptance Criteria
- A function generate(op) is available.
- The parameter op can be one of the four basic mathematic operations +, -, * or /.
- generate returns a new function, which then can be called with two numbers as parameters.
- The given mathematic operation is performed on the two numbers.
- Example:
  - const mult = generate('*')
  - console.log(mult(3, 4)) // the value is 12 printed on the console

## Skill(s)
- [JavaScript Basics 4th Grade](https://my.skilldisplay.eu/en/skill/2993/0)
