// //lets suppose a website is taking data from a data base,..like matching the username an dpw with basis of data base 
// //making a copy of that data type using website

// function getData(dataId,getNextData){
//     //  console.log("data", dataId);
//      //lets supoose this fetching of data takes time
//      setTimeout(()=>{
//         console.log("data",dataId);
//         getNextData();
//      },2000);
// }

// //but now for eg we want to write such a code:
// //data1
// //data2
// //data3
// //not together but one by one

// getData(1);
// getData(2);
// getData(3);
// //but this wont give delay..sabka timer ek sath chal padega = ek sath compelete, 

// //practical way of doing it is using callback 
// getData(1,getData(2));//but we cant use this as parenthies are not to be used here
// //this will give an error and apparnatly the data 2 gets printed first rather than the data 1 and gives error as well
// //parenthis = immediate execution of code;

// //instead we make an arrow function isnde the call back
// //callback hell:-
 
// getData(1,()=>{
//     console.log("cgetting data 2");
//     getData(2,()=>{
//         console.log("getting data 3");
//         getData(3,()=>{
//             console.log("getting data 4");
//             getData(4)

//         })
//     })
// })
// //this is not a good way to do this, like this is  an easy function but bhot muskil functions bhi ho skte hai

// //Promise is a the solution for the problem of callback hell
// let promise= new Promise((resolve, reject)=>{
//   console.log("I am a promise"); 
//   resolve(123);

// })


//promises ko use kese kerte hai:-
//making anew fcuntion:-
//lest suppose phele success== reolve hora hai

// const getPromise=()=>{
//    return new Promise((resolve,reject)=>{
//         console.log("I am promise");
//         resolve("succes");

//     })
// }

// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res);//this is never printed if the reection of promise is there
// })
// promise.catch((err)=>{
//     console.log("error is caught",err);//tghis can never be exceuted when the prpomise is resolve d
// })

//promise chains
function asynFunction1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data1");
            resolve("success");
        },4000)
    });
}

function asynFunction2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data2");
            resolve("success");
        },4000)
    });
}
console.log("fetching data1....");
let p1= asynFunction1();
p1.then((res)=>{
    console.log(res);
    console.log("fethcing data 2...");
    let p2=asynFunction2();
    p2.then((res)=>{
        console.log(res)
    })
});

// console.log("fetching data2....");
// let p2= asynFunction2();
// p2.then((res)=>{
//     console.log(res);
// });
//we want to fetch data 1 and then data 2 not simultanouelsy both of them
//but here we think data 1 is fethced->return promise 1->resolve
//then dtaa 2->return promise2
//acu=tually..we dont wait for the promise to get resolved
//so both data 1 and 2 is fethced sath me and get them both sath me

//so we now do chaining in .then()

