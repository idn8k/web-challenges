console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

let count = 0;

addButton.addEventListener('click', () => {
   // Exercise: Append a new entry to the toast messages container
   const counter = count++;
   const newLi = document.createElement('li');
   newLi.setAttribute('class', 'toast-container__message');
   newLi.innerText = `I'm toast no.${counter}`;

   toastContainer.append(newLi);
});

clearButton.addEventListener('click', () => {
   // Exercise: Clear the stack of toast messages
});
