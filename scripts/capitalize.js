function capitalize(str) {
  if (typeof str !== 'string') {
    throw new Error('Enter a string.');
  }
  return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalize('hello world'));

module.exports = capitalize;
