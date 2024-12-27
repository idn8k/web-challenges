console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

let operator;
operator = 'addition';
switch (operator) {
   case addition:
      function add(a, b) {
         return a + b;
      }

      break;
   case subtraction:
      function subtract(a, b) {
         return a - b;
      }
      break;
   case multiplication:
      function multiply(a, b) {
         return a * b;
      }
      break;
   case division:
      function divide(a, b) {
         return a / b;
      }
      break;
}

// function add(a, b) {
//    return a + b;
// }

// function subtract(a, b) {
//    return a - b;
// }

// function multiply(a, b) {
//    return a * b;
// }

// function divide(a, b) {
//    return a / b;
// }

form.addEventListener('submit', (event) => {
   event.preventDefault();

   let result;

   // --v-- write your code here --v--
   const formData = new FormData(event.target);
   const data = Object.fromEntries(formData);
   console.log(Number(data.numberA) + Number(data.numberB));

   //  const numA = Number(data.numberA);
   //  const numB = Number(data.numberB);

   // --^-- write your code here --^--

   resultOutput.textContent = result;
});
