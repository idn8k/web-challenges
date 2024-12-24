console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');
const gainOutput = document.querySelector('[data-js="output"]');

const output = document.querySelector('[data-js="output"]');

let pizzaSize1 = pizzaInput1.value;
let pizzaSize2 = pizzaInput2.value;

pizzaInput1.addEventListener('input', (e) => {
   // write your code here
   pizzaSize1 = Number(e.target.value);
   calculatePizzaGain(pizzaSize1, pizzaSize2);
   updatePizzaDisplay(pizzaSize1, pizza1);
   updateOutputColor(pizzaSize1, pizzaSize2);
});
pizzaInput2.addEventListener('input', (e) => {
   // write your code here
   pizzaSize2 = Number(e.target.value);
   calculatePizzaGain(pizzaSize1, pizzaSize2);
   updatePizzaDisplay(pizzaSize2, pizza2);
   updateOutputColor(pizzaSize1, pizzaSize2);
});
// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain(diameter1, diameter2) {
   if (diameter1 <= 0 || diameter2 <= 0) return;
   const area1 = Math.PI * (diameter1 / 2) ** 2;
   const area2 = Math.PI * (diameter2 / 2) ** 2;
   const pizzaGain = Math.round(((area2 - area1) / area1) * 100);
   output.textContent = pizzaGain;
}

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(newSize, pizzaElement) {
   const size = (newSize / 24) * 100;
   pizzaElement.style.width = size + 'px';
}

// Task 3
// define the function updateOutputColor here

function updateOutputColor(pizza_one, pizza_two) {
   if (pizza_two < pizza_one) {
      outputSection.style.backgroundColor = 'rgb(226, 51, 109)';
   } else {
      outputSection.style.backgroundColor = 'rgb(92, 220, 118)';
   }
}

// // Get the value of a CSS variable
// const root = document.documentElement;
// const mainColor = getComputedStyle(root).getPropertyValue('--main-color').trim();

// console.log(mainColor); // Outputs: #3498db
