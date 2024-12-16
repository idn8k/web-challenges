console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkModeBtn = document.querySelector('[data-js="dark-mode-button"]');
const lightModeBtn = document.querySelector('[data-js="light-mode-button"]');
const toggleBtn = document.querySelector('[data-js="toggle-button"]');

darkModeBtn.addEventListener('click', () => {
   bodyElement.classList.add('dark');
   console.log('add dark class');
});

lightModeBtn.addEventListener('click', () => {
   bodyElement.classList.remove('dark');
   console.log('remove dark class');
});

toggleBtn.addEventListener('click', () => {
   bodyElement.classList.toggle('dark');
   console.log('toggle dark mode');
});
