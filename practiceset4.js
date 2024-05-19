//exploring includes
//this is pasted from mdn includes tt
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';
console.log(sentence.includes(word))
console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);

//starts with
const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));
//expected output is true
console.log(str1.startsWith('Sat', 3));
//expected output: false

console.log(str1.endsWith('best!'));
//expected outcome false

