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

//RANDOM ARRAY ELEMENT
let array = [1,2,3,4,5]
let randomElement = array[Math.floor(Math.random()* array.length)];
console.log(randomElement)


//RANDOM COLOR GENERATION

function randomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}
console.log(randomColor())

//RANDOM PASSWORD GNERATEION


