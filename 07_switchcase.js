const prompt = require("prompt-sync")({singint:true});
let a = prompt("What's your age?");

switch (true) {
    case (a > 0):
        alert("Valid age");
    
    case (a <= 1 && a < 10):
        alert("Kiddo");
        break;
    case (a <= 10 && a < 18):
        alert("Kids");
        break;
    case (a <= 18):
        alert("You are now an adult");
        break;
    default:
        alert("This is an invalid age");
}