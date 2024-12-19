console.clear();

const form = document.querySelector('[data-js="form"]');

const firstName = document.querySelector('[data-js="firstName"]');
const lastName = document.querySelector('[data-js="lastName"]');
const age = document.querySelector('[data-js="age"]');
const emailAddress = document.querySelector('[data-js="emailAddress"]');
const complaintReason = document.querySelector('[data-js="complaintReason"]');
const complaintNote = document.querySelector('[data-js="complaintNote"]');
const badnessScale = document.querySelector('[data-js="badnessScale"]');
const dateSelector = document.querySelector('[data-js="dateSelector"]');
const checkbox = document.querySelector('[data-js="checkbox"]');
const submitBtn = document.querySelector('[data-js="submitBtn"]');

form.addEventListener('submit', (e) => {
   e.preventDefault();

   //-- form elements from the event target --//

   // const formElements = event.target.elements;
   // const firstName = formElements.firstName.value;
   // const lastName = formElements.lastName.value;
   // const age = formElements.age.value;
   // const email = formElements.email.value;
   // const date = formElements.date.value;
   // const subOptions = formElements.subOptions.value;
   // const personalMessage = formElements.personalMessage.value;
   //--------------- //
   const formData = new FormData(e.target);
   const data = Object.fromEntries(formData);
   console.log('data', data);

   e.target.reset();
   e.target.elements.firstName.focus();
});
