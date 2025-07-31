const URL= "https://api.thecatapi.com/v1/images/0XYvRd7oD";
const factPara= document.querySelector("#facts");

const getFcats=async ()=>{
    console.log("getting data...");
    let response =await fetch(URL);
    console.log(response);
    let data=await response.json();
    // console.log(data);
    factPara.innerText=data[0].text

}

  
