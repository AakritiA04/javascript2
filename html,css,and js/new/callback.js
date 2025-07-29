//lets suppose a website is taking data from a data base,..like matching the username an dpw with basis of data base 
//making a copy of that data type using website

function getData(dataId,getNextData){
    //  console.log("data", dataId);
     //lets supoose this fetching of data takes time
     setTimeout(()=>{
        console.log("data",dataId);
        getNextData();
     },2000);
}

//but now for eg we want to write such a code:
//data1
//data2
//data3
//not together but one by one

getData(1);
getData(2);
getData(3);
//but this wont give delay..sabka timer ek sath chal padega = ek sath compelete, 

//practical way of doing it is using callback 
getData(1,getData(2));//but we cant use this as parenthies are not to be used here
//this will give an error and apparnatly the data 2 gets printed first rather than the data 1 and gives error as well
//parenthis = immediate execution of code;

//instead we make an arrow function isnde the call back
//callback hell:-
 
getData(1,()=>{
    console.log("cgetting data 2");
    getData(2,()=>{
        console.log("getting data 3");
        getData(3,()=>{
            console.log("getting data 4");
            getData(4)

        })
    })
})
//this is not a good way to do this, like this is  an easy function but bhot muskil functions bhi ho skte hai

//Promise is a the solution for the problem of callback hell
let promise= new Promise((resolve, reject)=>{
  console.log("I am a promise"); 
  resolve(123);
   
})