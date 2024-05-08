const prompt = require("prompt-sync")({sigint:true});//this is what we going to write when the prompt does not works

let a = prompt("Hey whats your age? ")
a = Number.parseInt(a); //converting the string into number
