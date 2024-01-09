var message = function (name:string){

    return "Hello " + name;
}

console.log(message("Ravi"))

var message1 = (name:string)=> "Hello " + name;
console.log(message1("Ravi"))


var calc = (a:number,b:number,choice:string):void=>{

    switch(choice){

        case "add":
            console.log(a+b);
        break;
        case "sub":
            console.log(a-b);
        break;
        default:
            console.log("Invalid choice");

    }

}

calc(10,20,"add")