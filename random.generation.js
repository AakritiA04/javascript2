//RANDOM GENERATION 
//RANDOM NUMBER
//floating point number between 0 and 1
let randomNumber= Math.random();
console.log(randomNumber)


//intergers within a specific range
let min=1;
let max = 10;
let randomInt = Math.floor(Math.random()*(max-min +1))+min
console.log(randomInt)

//RANDOM BOOLEANS
let randomBoolean = Math.random() >= 0.5;
console.log(randomBoolean)

//RANDOM STRINGS
function randomString(length){
    let characters = 'ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvxyz0123456789';
    let result='';
    for(let i=0;i<length;i++){
        result += characters.charAt(Math.floor(Math.random()* characters.length))
        }
        return result;
}
console.log(randomString(10))

//RANDOM ARRAY ELEMENTS
