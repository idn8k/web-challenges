console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = 'h4x0r1337';

const receivedPassword = 'password1234';

if (receivedPassword === SUPER_SECRET_PASSWORD) {
   console.log('Welcome! You are logged in as Brunhilde1984.');
} else {
   console.log('Access denied!');
}

// Part 2: Even / Odd
const number = 11;

if (number % 2) {
   console.log('odd number');
} else [console.log('even number')];

// Part 3: Hotdogs
const numberOfHotdogs = 1000001;

// switch(numberOfHotdogs){
//   case:
// }

if (numberOfHotdogs < 5) {
   const price = numberOfHotdogs * 2;
   console.log('total price:', price, '$');
} else if (numberOfHotdogs > 4 && numberOfHotdogs < 100) {
   const price = numberOfHotdogs * 1.5;
   console.log('total price:', price, '$');
} else if (numberOfHotdogs > 99 && numberOfHotdogs < 1000000) {
   const price = numberOfHotdogs * 1;
   console.log('total price:', price, '$');
} else {
   const price = numberOfHotdogs * 0.1;
   console.log('total price:', price, '$');
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? 'Still need to learn...' : 'party TIME!';

console.log(statement);

// Part 5: Greeting
const userName = 'Archibald';

const greeting = 'Hello ' + (userName ? userName : 'coach') + '!';

console.log(greeting);
