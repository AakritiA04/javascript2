//question
//create a h2 element with text -"hello javascript" append "from apna collge students" to this using js

//appedning is adding to the last of the snetnce
// let h2= document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText= h2.innerText + " from Apna college students"
// console.log(h2)
//we are here concatinating

//question2 
//create 3 divs with common class name"box. Access them and some unique text to each of them

// let divs=document.querySelectorAll(".box");
// divs[0].innerText="new unique value 1";
// divs[1].innerText="new uni value2";
// //we can also be using loops to accesthem across just like how we did in arrays
// let idx=0
// for(div of divs){
//     // console.log(div.innerText);
//     div.innerText=`new unique value ${idx}`;
//     console.log(div);
//     idx++;
// }

// let newButton= document.createElement("button");
// newButton.innerText="click me";
// console.log(newButton);
// //adding to the screen
// let div= document.querySelector("div");
// div.append(newButton);


//insertion and deletion in line pls
// let newHeading=document.createElement("h1");
// newHeading.innerHTML="<i>Hi, I am new</i>"

// document.querySelector("body").prepend(newHeading);

//practice after inseryion and deletion of nodes and elements
//q-create a new button element. Give it a text "click me", background color of red and text color of white
// insert the buttion as the first element inside the body tag
let newButton=document.createElement("button");
newButton.innerText="click me";
newButton.style.backgroundColor="red";
newButton.style.color="white";
document.querySelector("body").prepend(newButton)
// 

//q2- create a <p> tag in html and give it a class and some styling.
//now create a new class in css and try to appedn this class to the <p> element
 let para= document.querySelector("p");
 para.getAttribute("class");
 para.setAttribute("class", "newClass");
 // this solves by totally overwriting the content of the attribute
 //so we use
