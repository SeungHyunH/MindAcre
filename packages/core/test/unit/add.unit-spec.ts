import { add } from '@repo/core/add';

describe('add', () => {
  it('should return the sum of two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});