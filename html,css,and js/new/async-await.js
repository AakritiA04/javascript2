// async function hello(){
//     console.log("hello")  ;
// }

//await keyword can only be used inside async fucntion onlyyyy
function api(){
    
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("weather data");
        resolve(200);//200 reperests a succesfull msg in website
    },2000);
    });
    
}

// await api();//this is not right way to use

async function getweatherData(){
    await api();//1st call
    await api();//2nd call

}