//chapter 1
//ques 1  create a variable of type string an dtry to add a number to it

let a = "Aakriti"
let b = 8 
console.log(a+b)

//ques 2
//use typeof operatior to find tthe datatype of string in last question

console.log(typeof (a+b))

//ques3
//create a const object in javavscript can u change it to hold a number
//=nope
const c = {
    name:"harry",
    scetion: 1,
    isprincipal :false
}
//ques4 
//try to add a new key to the const object in position 3 ..were u able to do it?

c['friend']= "Aakriti"
console.log(c)

//ques5
//write a js program to create  a word meaning dictonary of 5 words

const dict = {
    apple :"a fruit",
    word : "compsition of letters",
    heloo :"a greating sigm",

}
console.log(dict.word)
console.log(dict['word'])
