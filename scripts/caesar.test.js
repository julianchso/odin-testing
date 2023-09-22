import caesarCipher from './caesar';

test('shifting by 6', () => {
  expect(caesarCipher('the quick brown fox jumps over the lazy dog', 6)).toBe(
    'znk waoiq hxuct lud pasvy ubkx znk rgfe jum'
  );
});

test('shifting by 6', () => {
  expect(caesarCipher('the quick brown fox jumps over the lazy dog', 3)).toBe(
    'wkh txlfn eurzq ira mxpsv ryhu wkh odcb grj'
  );
});
