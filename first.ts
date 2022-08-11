let age: number = 20;
let club: string = "Barcelona";
let isFamous: boolean = true;

function add (num1: number | string, num2: number | string) {
    // return num1 + num2;
}

add(20, 30);
add(50, 50);


function fullName(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName;
}

const user = fullName('Hasan', 'khan');

function doubleIt(num: number):void {
    const result = num * 2;
    console.log(result);
}

const output = doubleIt(20);
console.log(output);


const multiply = (x: number, y: number): number => x * y;
console.log(multiply(20, 10));

let multiply2: (x: number, y: number) => number;
multiply2 = (x ,y) => 10 * 20;