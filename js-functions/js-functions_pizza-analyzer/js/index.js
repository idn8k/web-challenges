console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');
const gainOutput = document.querySelector('[data-js="output"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener('input', () => {
   // write your code here
});

pizzaInput2.addEventListener('input', () => {
   // write your code here
});

// Task 1
// define the function calculatePizzaGain here
const diameter1 = 24;
const diameter2 = 35;

function calculatePizzaGain(diameter1, diameter2) {
   const area1 = Math.PI * (diameter1 / 2) ** 2;
   const area2 = Math.PI * (diameter2 / 2) ** 2;
   const pizzaGain = Math.round(((area2 - area1) / area1) * 100);
   output.innerHTML = pizzaGain;
}
calculatePizzaGain(diameter1, diameter2);

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
