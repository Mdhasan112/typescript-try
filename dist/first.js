"use strict";
let age = 20;
let club = "Barcelona";
let isFamous = true;
function add(num1, num2) {
    // return num1 + num2;
}
add(20, 30);
add(50, 50);
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const user = fullName('Hasan', 'khan');
function doubleIt(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleIt(20);
console.log(output);
const multiply = (x, y) => x * y;
console.log(multiply(20, 10));
let multiply2;
multiply2 = (x, y) => 10 * 20;