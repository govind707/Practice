import { test } from 'shelljs';
import { add } from '../myTests/func';

test('add', () => {
  expect(add(3, 4)).toBe(7);
});
