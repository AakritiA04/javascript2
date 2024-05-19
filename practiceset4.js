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


//problem 3
//to lower case
console.log(str1.toLowerCase());

//problem 4
//extract the amount out of the following
let str2 = "Please give me Rs 1000"
let amount = Number.parseInt(str2.slice("Please give me Rs ".length))
console.log(amount)

console.log(typeof amount)

//problem 5
let friend = "deepika"
friend[3]='R'
console.log(friend)

//does not change as string is immutablle 


