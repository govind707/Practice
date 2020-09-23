import { test } from 'shelljs';
import { add } from './func';

test('add', () => {
  expect(add(3, 4)).toBe(7);
});
