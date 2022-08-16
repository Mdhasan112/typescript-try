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


const number: number[] = [20, 10, 50, 33, 40]
number.push(15);

const friends: string[] = ['nayem', 'raju', 'salam', 'imtiaz']
let megaName: string =  '';

for (let i = 0; i < friends.length; i++) {
    const friend: string = friends[i];
    if(friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log(megaName);

//object

let player: { 
    club: string;
    salary: number;
} = {
    club: 'barcelona',
    salary: 20000
}

interface Player {
    Name: string,
    age: number,
    ClubName: string,
    salary?: number,
    isPlaying: boolean
}

const messi: Player= {
    Name: 'Leo Messi',
    age: 35,
    ClubName: 'barcelona',
    isPlaying: true
}

const ronaldo: Player= {
    Name: 'Ronaldo',
    age: 35,
    ClubName: 'barcelona',
    salary: 2000,
    isPlaying: true
}

function getBonus(player: {salary: number}) {
    return player.salary * 0.1;
}

getBonus({20})