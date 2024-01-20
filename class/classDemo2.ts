//constrctor: constructor is a special method which is used to initialize the object and 
//instance members of the class.

class Vehicle{

    name:string;
    wheels:number;

    //to create constructor we need to use constructor keyword
    constructor(){
        this.name = "BMW";
        this.wheels = 4;
    }

    // getVehData = ():void=>{

    //     console.log("Vehicle Name is ",this.name);
    //     console.log("Vehicle Wheels are ",this.wheels);

    // }

    getVehData():void{
            
            console.log("Vehicle Name is ",this.name);
            console.log("Vehicle Wheels are ",this.wheels);
    }

}


var vehicle = new Vehicle();
vehicle.getVehData();