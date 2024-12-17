console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
   const time = new Date().getHours();
   console.log(time);

   if (time > 6 && time < 12) {
      return 'good morning';
   } else if (time > 13 && time < 18) {
      return 'good afternoon';
   } else if (time > 19 && time < 22) {
      return 'good evening';
   } else {
      return 'good night';
   }
}

function getDayColor() {
   const day = new Date().getDay();
   console.log(day);
   if (day === 1) {
      return 'darkgray';
   } else if (day > 1 && day < 5) {
      return 'lightblue';
   } else {
      return 'hotpink';
   }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
