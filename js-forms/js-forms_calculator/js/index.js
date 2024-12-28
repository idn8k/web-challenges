console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

// --v-- write your code here --v--

form.addEventListener('submit', (event) => {
   event.preventDefault();
   const formData = new FormData(event.target);
   const data = Object.fromEntries(formData);

   handleSwitch(data.operator, data.numberA, data.numberB);
});

function handleSwitch(operator, numA, numB) {
   const a = Number(numA);
   const b = Number(numB);
   let result;

   function add(a, b) {
      result = a + b;
   }

   function subtract(a, b) {
      result = a - b;
   }

   function multiply(a, b) {
      result = a * b;
   }

   function divide(a, b) {
      result = a / b;
   }

   switch (operator) {
      case 'addition':
         add(a, b);
         break;
      case 'subtraction':
         subtract(a, b);
         break;
      case 'multiplication':
         multiply(a, b);
         break;
      case 'division':
         divide(a, b);
         break;
   }
   console.log(result);

   resultOutput.textContent = result;
   form.reset();
   document.getElementById('number-a').focus();
}

// --^-- write your code here --^--
