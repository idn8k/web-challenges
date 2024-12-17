console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/

// --v-- write your code here --v--

// const bookShop = [
//    {
//       bookTitle: 'beloved',
//       author: 'tony morrison',
//       rating: 5,
//       copiesSold: 1000,
//    },
//    {
//       bookTitle: '1984',
//       author: 'george orwell',
//       rating: 4,
//       copiesSold: 2000,
//    },
//    {
//       bookTitle: 'animal farm',
//       author: 'george orwell',
//       rating: 3,
//       copiesSold: 3000,
//    },
// ];

const book1 = {
   bookTitle: '1984',
   author: 'george orwell',
   rating: 4,
   copiesSold: 2000,
};

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/

// --v-- write your code here --v--
// console.log(book1.bookTitle);
// console.log(book1.author);
// console.log(book1.rating);
// console.log(book1.copiesSold);

// book1.copiesSold++
// book1.rating++

// console.log(book1.bookTitle);
// console.log(book1.author);
// console.log(book1.rating);
// console.log(book1.copiesSold);

// --^-- write your code here --^--

/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
 - Then, increase the number of sales two more times and log the updated details after each increase.
*/

// --v-- write your code here --v--

const logBookData = () => {
   console.log(book1.bookTitle);
   console.log(book1.author);
   console.log(book1.rating);
   console.log(book1.copiesSold);
   book1.copiesSold++;
   console.log(book1);
   book1.copiesSold++;
   console.log(book1);
};

logBookData();
// --^-- write your code here --^--
