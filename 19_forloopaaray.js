let num = [3,54,1,2,4]
// for(let i=0;i<num.length;i++){
//     console.log(num[i])
// }

//foreach method
num.forEach((element)=>{
    console.log(element*element)
})
//Array.from ka use
let name = "Aakriti"
let arr =Array.from(name)
console.log(arr)

//for...of
for(let i of num){
    console.log(i)
 }

 //for.. in loop
 for(let i of num){
    console.log(i)
 }