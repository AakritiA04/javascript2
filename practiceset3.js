//chapter 3 pravtice set
//ques 1 write a program to print  the marks of a studnet un a ojbect using fo loop
let marks={
    Aakriti: 99,
    HArry:80,
    Monika:33,
    Bruh:2
}
for (let i=0; i<Object.keys(marks).length;i++){
    console.log("the marks of "+ Object.keys(marks)[i] + "  are "+ marks[Object.keys(marks)[i]])
}

//for in loop
//problem 2
for(let key in marks){
    console.log("The marks of "+ key + " are "+marks[key])
}
//problem 3 print try again unntilcoorect number is recieved
let cn = 4 ;
let i;
while(i!=cn){
i=prompt("enter a number ")
console.log("try agarin")
}
console.log("You have netered a correct number")

//problem nu 4 
//write  aprogram to get a mean of 5 numbers
const mean=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5
}

console.log(mean(1,3,4,56,6))
