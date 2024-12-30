console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
   // Reset the star container before re-rendering stars
   starContainer.innerHTML = '';
   const star = document.createElement('img');
   star.src = '../assets/star-empty.svg';

   // --v-- write or modify code below this line --v--

   for (let i = 1; i <= 5; i++) {
      console.log('star');
      starContainer.append(star);
   }

   // --^-- write or modify code above this line --^--
}

renderStars();
