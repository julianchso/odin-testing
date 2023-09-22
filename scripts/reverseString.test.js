const reverseString = require('./reverseString');

test('reverse String', () => {
  expect(reverseString('hello')).toMatch('olleh');
});

test('reverse String', () => {
  expect(reverseString('HeLlo')).toMatch('olLeH');
});

test('reverse String', () => {
  expect(reverseString('I am a racecar driver!')).toMatch('!revird racecar a ma I');
});
