//PPRACTICE SET 2
//QUES 1 
//use logical operator to find whaeter the age of ta person lies between 10 and 20
const prompt = require("prompt-sync")({signint:true});

let age = prompt("what is your age?");
if(age>10 && age<20){
    console.log("ypur age lies between age 10 and 20");

}
else{
    console.log("your age is not less than 10 and 20");

}

//demostrate the use of switch case 
// let age = prompt("what is your age?");

switch(age){
    case '12':
        console.log("your age is 12")
        break;

    case '13':
        console.log("your age is 13")
        break;

        case '14':
        console.log("your age is 14")
        break;
        case '15':
        console.log("your age is 15")
        break;
        default:
            console.log("your age is not between ")
        

}


//ques3 write ajs pragram to find if the number is divisble by eitehr 2 and 3
let number = prompt("Enter the number");
if(number%2==0 && number%3==0){
    alert("the number is divisble by both 2 and 3");

}
else if(number%2==0 && number%3!=0){
    console.log("the number is only divisble by 2");

}
else if(number%2!=0 && number%3==0){
    console.log("the number is only divisble by 3");

}
else{
    console.log("the number is not divisble by both");
}


// let age= prompt("enter your age here");

// console.log("you can" ,age>18? "drive":"not drive")

