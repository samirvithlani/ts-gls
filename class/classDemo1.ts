class Person{


    name:string = "Rajesh";

    sayHello():void{
        console.log("hello",this.name);
    }


}

let person = new Person();
person.sayHello();