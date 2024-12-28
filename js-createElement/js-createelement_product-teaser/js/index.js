console.clear();

const productName = 'Queen angelfish';
const description =
   'With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.';
const category1 = 'Freshwater';
const category2 = 'Large aquarium';
const category3 = 'Plankton Diet';
const price = '149,99 €';
const imageSrc =
   'https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640';

//-- Elements ↓ //
const body = document.querySelector('body');

const article = document.createElement('article');
article.classList.add('product');

const section = document.createElement('section');
section.classList.add('product_body');

const textContainer = document.createElement('div');
textContainer.classList.add('product__text-container');

const productNameTitle = document.createElement('h2');
productNameTitle.classList.add('product__name');

const categories = document.createElement('ul');
categories.classList.add('product__categories');

const category_1 = document.createElement('li');
category_1.classList.add('product__category');
const category_2 = document.createElement('li');
category_2.classList.add('product__category');
const category_3 = document.createElement('li');
category_3.classList.add('product__category');

const productDescription = document.createElement('p');
productDescription.classList.add('product__description');

const imgContainer = document.createElement('div');
imgContainer.classList.add('product__image-container');

const img = document.createElement('img');
img.classList.add('product__image');
img.src = imageSrc;

//-- Elements ↑ //

body.append(article);
article.append(section);
section.append(textContainer);
textContainer.append(productNameTitle);
productNameTitle.textContent = productName;
textContainer.append(categories);
categories.append(category_1);
category_1.textContent = category1;
categories.append(category_2);
category_2.textContent = category2;
categories.append(category_3);
category_3.textContent = category3;
textContainer.append(productDescription);
productDescription.textContent = description;

// imgContainer.append(img);
// src.appendChild(img);
