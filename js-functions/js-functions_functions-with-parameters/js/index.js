console.clear();

function logSaperator(n) {
   console.log('-------------');
   console.log(`Exercise ${n}:`);
}

logSaperator(1);
/*
1: The function below is not executed. Can you figure out why? Find the bug and fix it.
*/

// Uncomment the next line of code and figure out why it does not work:
// logText;

function logText() {
   console.log('This text does not appear. Why?');
}

logText();

logSaperator(2);
/*
2: Look at the functions below. They are almost identical. Can you find a way to generalize them into a new function with an input parameter? 
   Replace the function calls below with your new function.
*/

// function greetBob() {
//    console.log('Welcome Bob, good to see you again!');
// }

// function greetAlice() {
//    console.log('Welcome Alice, good to see you again!');
// }

// function greetMary() {
//    console.log('Welcome Mary, good to see you again!');
// }

// greetAlice();
// greetBob();
// greetMary();

// --v-- write your code here --v--

function greetAll() {
   console.log('Welcome Bob, good to see you again!');
   console.log('Welcome Alice, good to see you again!');
   console.log('Welcome Mary, good to see you again!');
}
greetAll();

// --^-- write your code here --^--

logSaperator(3);

/*
3: We log a small separation text for each subtask. This is repetitive code, so let’s write a function `logSeparator` that takes the number of the exercise as an input parameter and logs the corresponding separator.
   Then, use this function to replace the existing separator logs in this JavaScript file.

Note: Separation text refers to the text that is logged in the console before each exercise. For example, "-------------" and "Exercise 1:" are the separation texts for the first exercise.
*/

// --v-- write your code here --v--

// function logSaperator(n) {
//    console.log('-------------');
//    console.log(`Exercise ${n}:`);
// }

logSaperator(4);

// --^-- write your code here --^--
