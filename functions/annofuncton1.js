// function userData():void{
//     console.log("user data");
// }
// userData();
var res = function () {
    console.log("user data");
};
res();
var userData = function (name, age) {
    console.log("Name is ", name);
    console.log("Age is ", age);
};
userData("Ravi", 21);
var findPower = function (base, power) {
    return Math.pow(base, power);
};
var ans = findPower(2, 3);
console.log("Ans is ", ans);
var getAllUserAsArray = function () {
    var users = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        users[_i] = arguments[_i];
    }
    return users;
};
var ans1 = getAllUserAsArray("ram", "seeta", "lakshman", "hanuman");
console.log("Ans1 is ", ans1);
