# TDD Introduction - Calculator

This project is a basic example of Test-Driven Development (TDD) in Angular, using a `Calculator` class to demonstrate how unit tests can be written and executed.

## Project Description

The project implements a `Calculator` class with two main methods:

1. **multiply(n1, n2):** Multiplies two numbers and returns the result.
2. **divide(n1, n2):** Divides two numbers and returns the result. If the divisor is zero, it returns `null`.

Unit tests have been written using Jasmine to ensure that these methods work correctly under different scenarios.

## Project Structure

- **Calculator Class:** Implements the multiplication and division operations.
- **AppComponent:** Angular component that uses the `Calculator` class to perform basic runtime tests.
- **Unit Tests:** Tests are included to validate the correct functionality of the `multiply` and `divide` methods.

## Running Tests

To run the unit tests, use the following command:

```bash
ng test --code-coverage
```

This will launch the tests in a Chrome browser and generate a code coverage report.

## Test Example

Below is an example of the tests implemented for the `Calculator` class:

```typescript
import { Calculator } from './calculator';

describe('test for Calculator', () => {
    describe('Test for multiply', () => {

        it('Should return four', () => {
            let calculator = new Calculator();
            let n1 = 2;
            let n2 = 2;
            let expectedResult = 4;

            let currentResult = calculator.multiply(n1, n2);

            expect(currentResult).toEqual(expectedResult);
        });

        it('Should return nine', () => {
            let calculator = new Calculator();
            let n1 = 3;
            let n2 = 3;
            let expectedResult = 9;

            let currentResult = calculator.multiply(n1, n2);

            expect(currentResult).toEqual(expectedResult);
        });

    });

    describe('Test for divide', () => {

        it('divide for a number', () => {
            let calculator = new Calculator();

            expect(calculator.divide(6, 3)).toEqual(2);
            expect(calculator.divide(5, 2)).toEqual(2.5);
        });

        it('divide for zero', () => {
            let calculator = new Calculator();

            expect(calculator.divide(6, 0)).toBeNull();
            expect(calculator.divide(5, 0)).toBeNull();
        });

    });
});
```

## Test Results

The unit tests were executed successfully, showing 100% coverage:

- **Statements:** 100% (19/19)
- **Branches:** 100% (1/1)
- **Functions:** 100% (4/4)
- **Lines:** 100% (18/18)

## Requirements

- Node.js
- Angular CLI
- Jasmine (for unit testing)

## Usage

This project is useful for those looking to learn and practice TDD in Angular, especially in creating simple unit tests with Jasmine.

## Author

Developed by Anyel EC
