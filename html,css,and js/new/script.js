// //direct way of writing an object

// const student={
//     fullName:"Aakrit Aroa",
//     marks:95,
//     printMarks: function(){
//         console.log("marks=",this.marks);
//     }
// }

//making our own prototype
const employee={
    calTax(){
        console.log("tax rate is 10%");
    }
};

const karanArjun={
    salary:50000,
    calTax(){
        console.log("tax is 20%");
    },
};
karanArjun.__proto__=employee;
 