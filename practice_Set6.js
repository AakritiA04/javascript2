//javsscript in general pradtoce
 //write a program using prompt functuon to  take input of age a valeue from the user and use alert to tell him if he can drive
//  let age = prompt("enter the age of the person:")
//  age = Number.parseInt(age)
 let runAgain=true;
 while(runAgain){
   let age = prompt("enter the age of the person:")
   age = Number.parseInt(age)
   if(age<0){
      console.error("please enter a correct age")
      break;
   }
 if(age<18){
    alert("you cannot drive")
 }
 else{
    alert("yes you can drive")
 }
 runAgain=confirm("do you want to run again")
}

 //we can also make a fynction to perform the above task as well
//  const canDrive=(age)=>{
//     return age>=18?true:false
//  }
//and then we use the same functuon in the code of if and else


//Ques 2
//in ques 1 use the user if he wants to see the program again'
// confirm("wheter you want  this to show upt")

//ques 3
//in the previous question use console.error to show if not drive is said
 

//ques4
//write a program to change the url to google .vom if the usr entera number greater than 4\
let number = prompt("enter the number")
number = Number.parseInt(number)
if(number>4){
   location.href= "https://google.com"
}
else{
   alert("the number is less than 4")

}