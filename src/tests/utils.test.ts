import { priceHandler } from '../utils';

it('should receive number and output string with dollar sign and dividers', () => {
  const expectedValues = [
    { input: 228, output: '$228' },
    { input: 2280, output: '$2,280' },
    { input: 22800, output: '$22,800' },
    { input: 228000, output: '$228,000' },
    { input: 2280000, output: '$2,280,000' },
    { input: 22800000, output: '$22,800,000' }
  ];

  expectedValues.forEach(({ input, output }) => {
    expect(priceHandler(input)).toBe(output);
  });
});
