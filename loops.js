//program to add sum of n natural number
// const prompt=require("prompt-sync")({signint:true});
let sum=0
let n = prompt("enter the number");
n= Number.parseInt(n);
for(let i =0;i<n;i++){
    console.log(i+1)
    sum+=i;
} 
console.log("Sum of all the first"+n+"natural numbers")

/