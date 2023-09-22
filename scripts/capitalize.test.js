// import capitalize from './capitalize';
const capitalize = require('./capitalize');

// test('capitalize first letter', () => {
//   expect(capitalize(/[a-zA-Z0-9]*/g)).toMatch(/^[A-Z][a-zA-Z0-9_ ]*$/g);
// });

test('capitalize first letter', () => {
  expect(capitalize('hello')).toMatch(/^[A-Z][a-zA-Z0-9_ ]*$/g);
});
