var Person = /** @class */ (function () {
    function Person() {
        this.name = "Rajesh";
    }
    Person.prototype.sayHello = function () {
        console.log("hello", this.name);
    };
    return Person;
}());
var person = new Person();
person.sayHello();
