import { sum } from '../sum';

describe('@sum', () => {
  it('#Should sum two numbers', () => {
    const number1 = 1;
    const number2 = 2;

    const result = sum(number1, number2);

    expect(result).toEqual(3);
  });
});