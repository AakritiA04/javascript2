//Aaary mathods 
let num = [1,2,3,44,5]
let b = num.toString();
console.log(b)
let c = num.join("-");
console.log(c,typeof c)
// num.pop();
// console.log(num)
let r = num.shift()
console.log(r,num )
let s = num.unshift(66)
console.log(s, num)
delete num[2 ]
console.log(num)
console.log(num.length)
let a1= [1,2,3]
let a2= [1,2,44,5,6,7,8,5,8,8,8]
let newArray = a1.concat(a2)
console.log(newArray)
let compare= (a,b)=>{
    return b - a 
}
let some_num= [551,1,2,22,333,4,4556,1223,324,678,98,665,77]

some_num.sort(compare)
console.log(some_num)

//splice method
let deleltedValues = some_num.splice(2,4,112,3445,211,331)
console.log(deleltedValues)

let newValues = some_num.slice(2)
console.log(newValues)