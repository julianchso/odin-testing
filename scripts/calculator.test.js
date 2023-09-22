// const calculator = require('./calculator');
import calculator from './calculator';

test('2 + 2 = 4', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('-4 + 2 = -2', () => {
  expect(calculator.add(-4, 2)).toBe(-2);
});

test('4 * 2 = 8', () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

test('multiply argument contains non-numbers', () => {
  expect(calculator.multiply('str', 2)).toBe(NaN);
});
