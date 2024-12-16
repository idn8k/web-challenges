console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

// --v-- write your code here --v--
const postTitle = 'social media';
const text = 'Content text';
const numLikes = 189;
const username = 'joe';
const isReported = true;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/

// --v-- write your code here --v--

console.log('postTitle:', postTitle);
console.log('Text:', text);
console.log('Number of likes:', numLikes);
console.log('username:', username);
console.log('Reported:', isReported);
console.log('--- After update: ---');
const newNumLikes = numLikes + 1;
console.log('postTitle:', postTitle);
console.log('Text:', text);
console.log('Number of likes:', numLikes);
console.log('username:', username);
console.log('Reported:', isReported);
console.log('Number of likes:', newNumLikes);

console.log('ignore');
// --^-- write your code here --^--
