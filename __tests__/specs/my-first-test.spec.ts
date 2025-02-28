import { alwaysReturnOne } from 'src/functions';
import { describe, test, expect } from 'vitest';

describe('alwaysReturnOne', () => {
  test('always return 1', () => {
    const result = alwaysReturnOne();

    expect(result).toEqual(1);
  });
});
