//constrctor: constructor is a special method which is used to initialize the object and 
//instance members of the class.
var Vehicle = /** @class */ (function () {
    //to create constructor we need to use constructor keyword
    function Vehicle() {
        this.name = "BMW";
        this.wheels = 4;
    }
    // getVehData = ():void=>{
    //     console.log("Vehicle Name is ",this.name);
    //     console.log("Vehicle Wheels are ",this.wheels);
    // }
    Vehicle.prototype.getVehData = function () {
        console.log("Vehicle Name is ", this.name);
        console.log("Vehicle Wheels are ", this.wheels);
    };
    return Vehicle;
}());
var vehicle = new Vehicle();
vehicle.getVehData();
