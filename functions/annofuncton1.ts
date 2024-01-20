// function userData():void{

//     console.log("user data");

// }

// userData();

const res  =  function():void{
    
        console.log("user data");
    
}
res();

const userData = (name:string,age:number):void=>{

    console.log("Name is ",name);
    console.log("Age is ",age);

}
userData("Ravi",21);


const findPower = (base:number,power:number):number=>{

    return base ** power;
}

var ans  = findPower(2,3)
console.log("Ans is ",ans);


const getAllUserAsArray =  (...users:string[]):string[]=>{

    return users;
}

var ans1 = getAllUserAsArray("ram","seeta","lakshman","hanuman")
console.log("Ans1 is ",ans1);