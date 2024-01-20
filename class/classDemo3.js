var Users = /** @class */ (function () {
    function Users(name1, age1, per1, hobbies1) {
        this.name = name1;
        this.age = age1;
        this.pers = per1;
        this.hobbies = hobbies1;
    }
    Users.prototype.getUserData = function () {
        console.log("Name is ", this.name);
        console.log("Age is ", this.age);
        console.log("Percentage is ", this.pers);
        console.log("Hobbies are ", this.hobbies);
        for (var i = 0; i < this.hobbies.length; i++) {
            console.log("Hobbies are ", this.hobbies[i]);
        }
    };
    return Users;
}());
var user = new Users("Rajesh", 21, 90, ["Cricket", "Football"]);
user.getUserData();
