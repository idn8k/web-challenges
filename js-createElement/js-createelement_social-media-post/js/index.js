console.clear();

function handleLikeButtonClick(event) {
   const buttonElement = event.target;
   buttonElement.classList.toggle('post__button--liked');
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener('click', handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const body = document.querySelector('body');

const newHeader = document.createElement('h1');
newHeader.textContent = 'Social Media Post';

const newArticle = document.createElement('article');
newArticle.setAttribute('class', 'post');

const newP = document.createElement('p');
newP.setAttribute('class', 'post__content');
newP.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.';

const newFooter = document.createElement('footer');
newFooter.setAttribute('class', 'post__footer');

const newSpan = document.createElement('span');
newSpan.setAttribute('class', 'post__username');
newSpan.textContent = '@username';

const newBtn = document.createElement('button');
newBtn.setAttribute('class', 'post__button');
newBtn.textContent = ' ♥ Like';

newFooter.append(newSpan, newBtn);
newArticle.append(newP, newFooter);
body.append(newHeader, newArticle);
