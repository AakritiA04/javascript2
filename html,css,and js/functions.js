// //firsts lets do arrays
// let companies = ["Bloomberg", "Microsoft", "Google", "Uber", "IBM", " Netflix"];
// console.log(companies);
// companies.shift();
// console.log(companies);
// companies.splice(2, 1, "Ola");
// //lets do functiojs now

// //fucntion definition
// function myFucntion() {
//   console.log("hello this is my function");
// }

// function sum(a, b) {
//   console.log(a + b); //we can even just return our input here using return keyword..but return can only reurn one value
// }
// sum(2, 3);

// //arrow functions
// const arrowSum = (a, b) => {
//   console.log(a + b);
// };

// //create a function using functon keyword that takes a string as an argument and return the number of vowels in the string
// function returnVowels(msg) {
//   let msg = prompt("Enter your string");
//   let count = 0;
//   for (const char of msg) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// console.log("out");


//using for each method and understanding how call bcal works
let arr=[1,3,4,5,6,78,8];

arr.forEach((val)=>{
  console.log(val);
});

//for a  given array of numbers print the square of each value using forEach loop
let arrarytoSq=[1,4,66,78,894,2,33,44,5];

arrarytoSq.forEach((value)=>{
  console.log(value*value);
}); 