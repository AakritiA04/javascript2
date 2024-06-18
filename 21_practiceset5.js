//practice of arrays and its methods
//ques1 
//create an array of numbers and take input to add numbers tpthe arays
const prompt = require("prompt-sync")({ signint: true });
// let arr =[1,2,3,4,5,6,7,83]
// let a= prompt("Enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)


//practice problem 2
let arr = [1, 2, 3, 4, 5, 6, 7, 83]
// let a;
// do {

//  a = prompt("Enter a number")
//     a = Number.parseInt(a)
//     arr.push(a)
//     console.log(arr)
// } while (a != 0)
// console.log(arr)

//filter for numbers divisble by 10 in the given array
let arr2=[1,10,20,34,100,22,45,30,60,44,56,67]
function Divisible10(x){
    return x % 10===0;
}
let n = arr2.filter(Divisible10)
console.log(n)

//practice problem 5
// let arr5 = [1,2,3,4,5,5,6,7]
// let nl = arr.map((x)=>{
//     return x*x
// })
// console.log(nl)
//practice problem 5
let arr5 = [1,2,3,4,5,5,6,7]
let nl = arr5.reduce((x1,x2)=>{
 return x1 * x2
})
console.log(n1)
console.log(n1)
console.log(n)
console.log(arr)




