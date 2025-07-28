let DATA= "secret information";

class User{//following code i wrote is wrong hehe

    // myname(name){
    //     console.log("enter your name");
    //     this.name=name;
    // }
    // emailadd(email){
    //     console.log("enter you mail");
    //     this.mail=mail;

    // }
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("website data",DATA);

    }
}

//q2
class Admin extends User{
    constructor(name, email){
        super(name,email);
        
    }
    editData(){
        DATA="some new value";
    }
}

let student1=new User("augsd","duw@gmail.com");
let student2=new User("ahsh", "ahgs@email.com");

let teacher1=new User("dean", "dean@dean.dueb");

//Question 2
// Create a new class called admin which inherits from user. Add a new method called editAdta to admin that allows  to edit website data.
let admin1=new Admin("admin","swudig@dbuewb");


