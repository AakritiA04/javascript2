//we used object oriented programming to reduce the copy paste of same type of codes using function
//inheritance is being uswed here:-

// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }
// class Child extends Parent{
// }
// let obj=new Child();


//better exampple:-

class person{
    constructor(){
        this.species="homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class Engineer extends person{
    constructor(branch){
        super();//this is to invoke the parent class constructor
        this.branch= branch;
    }
    work(){
        console.log("solve problems, build something");

    }
}

let nameobj=new Engineer("chemical engg") ;// this shows no problem as of teh code giev but gives error to must call super 

