import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getFullYear function
test('getFullYear returns the correct year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toEqual(currentYear);
});

// Test for getFooterCopy function with true argument
test('getFooterCopy returns the correct string when the argument is true', () => {
  expect(getFooterCopy(true)).toEqual('Holberton School');
});

// Test for getFooterCopy function with false argument
test('getFooterCopy returns the correct string when the argument is false', () => {
  expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
});

// Test for getLatestNotification function
test('getLatestNotification returns the correct string', () => {
  const expectedNotification = '<strong>Urgent requirement</strong> - complete by EOD';
  expect(getLatestNotification()).toEqual(expectedNotification);
});
