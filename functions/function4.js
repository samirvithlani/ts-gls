var message = function (name) {
    return "Hello " + name;
};
console.log(message("Ravi"));
var message1 = function (name) { return "Hello " + name; };
console.log(message1("Ravi"));
var calc = function (a, b, choice) {
    switch (choice) {
        case "add":
            console.log(a + b);
            break;
        case "sub":
            console.log(a - b);
            break;
        default:
            console.log("Invalid choice");
    }
};
calc(10, 20, "add");
