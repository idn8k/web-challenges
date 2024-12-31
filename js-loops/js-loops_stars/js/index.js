console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
   starContainer.innerHTML = '';
   if (filledStars) {
      for (let i = 1; i <= filledStars; i++) {
         const star = document.createElement('img');
         star.src = '../assets/star-filled.svg';
         star.addEventListener('click', () => {
            console.log('click');
         });
         starContainer.append(star);
      }
      for (let i = 1; i <= 5 - filledStars; i++) {
         const star = document.createElement('img');
         star.src = '../assets/star-empty.svg';
         star.addEventListener('click', () => {
            console.log('click');
         });
         starContainer.append(star);
      }
   } else {
      for (let i = 1; i <= 5; i++) {
         const star = document.createElement('img');
         star.src = '../assets/star-empty.svg';
         star.addEventListener('click', () => {
            console.log('click');
         });
         starContainer.append(star);
      }
   }
}

renderStars(3);
