function caesarCipher(str, shift) {
  let key = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  let arr = str.split('');
  let newArr = [];

  arr.forEach((element) => {
    if (element.charCodeAt(0) < 97 || element.charCodeAt(0) > 122) {
      newArr.push(element);
    } else {
      let index = key.indexOf(element);
      let newIndex = index + shift;
      if (newIndex >= 26) {
        newIndex = newIndex - 26;
      }
      newArr.push(key[newIndex]);
    }
  });
  let newStr = newArr.join('');
  return newStr;
}

console.log(caesarCipher('hello', 2));
console.log(caesarCipher('the quick brown fox jumps over the lazy dog', 3));
console.log(caesarCipher('the quick brown fox jumps over the lazy dog', 6));

module.exports = caesarCipher;
