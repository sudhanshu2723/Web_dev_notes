"use strict";
console.log("hello typescript");
const x = 12;
function printUser(firstName) {
    console.log("the firstName is " + firstName);
}
printUser("sudhanshu");
function sumValue(a, b) {
    return a + b;
}
let val = sumValue(34, 45);
console.log(val);
function isUserAdult(age) {
    if (age > 18)
        return true;
    else
        return false;
}
console.log(isUserAdult(56));
function result(a, b) {
    return a * b;
}
function printResult(a, b, fnToCall) {
    setTimeout(() => {
        console.log("the result is " + fnToCall(a, b));
    }, 1000);
}
printResult(34, 45, result);
let user = {
    firstName: "sudhanshu",
    lastName: "pandey",
    email: "sudhanshu2723@gmail.com",
    age: 34
};
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
let obj1 = new Employee("sudhanshu", 34);
console.log(obj1.name);
console.log(obj1.name);
obj1.greet("hello ");
