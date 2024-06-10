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
 console.log("break")

 //higer order array methods 
 //map, filter, and reduce

 //Array map method
 //three argumensts in the method are used 
 //i.e. value,index,array
 let arr3 =[1,3,344,5,55]
 let bb = arr3.map((value,index)=>{
    console.log(value,index)
    return value +index
 })
 console.log(bb)
 console.log("/nbreak\n")

 //Array filter method
let arr2=[45,34,23,21,0,4,5,75]
let a3 =arr2.filter((value)=>{
   return value<10
})
console.log(a3)
console.log("nothing")

//reduce method
let arr4 = [1,2,3,5,2,1]
let newarr = arr4.reduce((h1,h2)=>{
   return h1+h2
})
console.log(newarr)