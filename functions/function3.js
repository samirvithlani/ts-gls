function sumOfNums() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    console.log(nums);
}
//sumOfNums()
sumOfNums(10, 20, 30, 40);
//default parameter
function userData(age, name) {
    if (age === void 0) { age = 18; }
    if (name === void 0) { name = "ramu"; }
    console.log(age, name);
}
//userData(21,"Ravi");
userData(23);
