export class Calculator {
  // multiply two numbers
  multiply(n1: number, n2: number) {
    return n1 * n2;
  }

  divide(n1: number, n2: number) {
    // check if the second number is zero
    if (n2 === 0) {
      // return null if the second number is zero
      return null;
    }
    // return the division of the first and second number
    return n1 / n2;
  }
}
