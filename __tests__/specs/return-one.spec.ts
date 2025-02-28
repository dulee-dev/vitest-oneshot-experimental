import { returnOne } from 'src/functions/return-one';
import { describe, test, expect } from 'vitest';

describe('returnOne', () => {
  test('always return 1', () => {
    const result = returnOne();

    expect(result).toEqual(1);
  });

  // test('always return 1', () => {
  //   const result = returnOne();

  //   expect(result).toEqual(2);
  // });
});
