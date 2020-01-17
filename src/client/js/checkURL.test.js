import { checkURL } from './checkURL'

test('test url', () => {
  expect(checkURL("https://www.mywebsite.com")).toBe(true);
  expect(checkURL("mywebsite.com")).toBe(false);
});