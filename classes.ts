interface UserInterface {
    name: string; 
    email: string; 
    age: number; 
    register(); 
    payInvoice();
}

class User implements UserInterface{
     name: string; 
     email: string; 
     age: number; 
    constructor(name:string, email: string, age:number){
        this.name = name; 
        this.email = email; 
        this.age = age;
        console.log(`user created ${name}`); 
    }
     register(){
        console.log(`${this.name} is now registered`);
        
    }
    payInvoice(){
        console.log(`${this.name} paid invoice`);
        
    }
}

class Member extends User {
    id: number; 
    constructor(id:number, name:string, email: string, age:number){
        super(name, email, age); 
        this.id = id
    }

    payInvoice(){
        super.payInvoice()
    }
}

let john = new User('john doe', 'jjdoe@gmail.com', 26)

john.register()

let Mike: User = new Member(2, "Mike Smith", 'msmith@gmail.com', 26)
Mike.payInvoice()
console.log(Mike);

// console.log(john.age);
