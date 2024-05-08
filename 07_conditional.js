const prompt = require("prompt-sync")({sigint:true});//this is what we going to write when the prompt does not works

let a = prompt("Hey whats your age? ")
a = Number.parseInt(a); //converting the string into number
if(a<0){
    alert("this is a invalid age")
}
else if (a>10 && a<15){
    alert("You are a kid");
}
else if (a>=18){
    alert("You are an adult");

}
else{
    alert("This is an valid age");
}