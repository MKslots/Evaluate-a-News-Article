import { checkURL } from '../src/client/js/checkURL'

test('test url', () => {
  expect(checkURL("https://www.mywebsite.com")).toBe(true);
  expect(checkURL("mywebsite.com")).toBe(false);
});