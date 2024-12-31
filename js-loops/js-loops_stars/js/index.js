console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(fillesStars) {
   starContainer.innerHTML = '';

   for (let i = 1; i <= 5; i++) {
      const star = document.createElement('img');
      star.src = '../assets/star-empty.svg';
      starContainer.append(star);
   }
}

renderStars();
