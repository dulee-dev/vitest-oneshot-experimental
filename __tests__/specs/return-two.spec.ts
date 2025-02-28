import { returnTwo } from 'src/functions/return-two';
import { describe, test, expect } from 'vitest';

describe('returnTwo', () => {
  test('number -> 2', () => {
    const result = returnTwo(1);

    expect(result).toEqual(2);
  });

  test('undefined -> 2', () => {
    const result = returnTwo(undefined);

    expect(result).toEqual(2);
  });
});
