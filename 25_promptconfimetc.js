//how user can interact eith user in the browser 
//alert to give alert to the user
//confirm to use the confirmation for eg deletion of something and getting confirmation from the user


alert("eneter the value of a!")
let a = prompt("enter the value of a:")
a = Number.parseInt(a)
alert("the value of a of type " + (typeof a))
let write = confirm("do you want to write it to the page")
if(write){
    document.write(a)
}
else{
    document.write("please allow me to write")
}
document.write(a)