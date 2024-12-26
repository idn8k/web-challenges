console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
   tosError.setAttribute('hidden', 'true');
}

function showTosError() {
   tosError.removeAttribute('hidden', '');
}

tosCheckbox.addEventListener('change', () => {
   if (tosError.getAttribute('hidden')) {
      showTosError();
   } else {
      hideTosError();
   }
});

form.addEventListener('submit', (event) => {
   event.preventDefault();
   const formData = new FormData(event.target);
   const data = Object.fromEntries(formData);
   console.log('🚀 ~ form.addEventListener ~ data:', data);

   // --v-- write your code here --v--
   if (!data.tos) {
      tosError.removeAttribute('hidden');
      return;
   } else {
      hideTosError();
   }

   // --^-- write your code here --^--

   // eslint-disable-next-line no-alert
   alert('Form submitted');
});
