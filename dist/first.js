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
const number = [20, 10, 50, 33, 40];
number.push(15);
const friends = ['nayem', 'raju', 'salam', 'imtiaz'];
let megaName = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log(megaName);
//object
let player = {
    club: 'barcelona',
    salary: 20000
};
const messi = {
    Name: 'Leo Messi',
    age: 35,
    ClubName: 'barcelona',
    isPlaying: true
};
const ronaldo = {
    Name: 'Ronaldo',
    age: 35,
    ClubName: 'barcelona',
    salary: 2000,
    isPlaying: true
};
function getBonus(player) {
    return player.salary * 10;
}
const poorPlayer = { salary: 2000 };
getBonus(ronaldo);
